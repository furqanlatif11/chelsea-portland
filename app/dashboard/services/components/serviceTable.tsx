"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { Pencil, Trash2 } from "lucide-react";
import type { Doc } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ServiceTableProps {
	services: Doc<"services">[];
	loading: boolean;
}

function formatDate(timestamp: number) {
	return new Intl.DateTimeFormat("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	}).format(new Date(timestamp));
}

export default function ServiceTable({
	services,
	loading,
}: ServiceTableProps) {
	const deleteService = useMutation(api.services.deleteService);
	const [deletingId, setDeletingId] = useState<string | null>(null);

	const handleDelete = async (id: Doc<"services">["_id"]) => {
		setDeletingId(id);

		try {
			await deleteService({ id });
		} finally {
			setDeletingId(null);
		}
	};

	return (
		<section className="overflow-hidden rounded-3xl border border-border bg-card">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Title</TableHead>
						<TableHead>Alt Text</TableHead>
						<TableHead>Description Items</TableHead>
						<TableHead>Updated</TableHead>
						<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{loading ? (
						<TableRow>
							<TableCell colSpan={5} className="py-8 text-center text-muted-foreground">
								Loading services...
							</TableCell>
						</TableRow>
					) : null}

					{!loading && services.length === 0 ? (
						<TableRow>
							<TableCell colSpan={5} className="py-8 text-center text-muted-foreground">
								No services yet. Click Add Service to create your first one.
							</TableCell>
						</TableRow>
					) : null}

					{!loading
						? services.map((service) => (
								<TableRow key={service._id}>
									<TableCell className="font-medium text-foreground">
										{service.title}
									</TableCell>
									<TableCell className="max-w-[260px] truncate text-muted-foreground">
										{service.altText}
									</TableCell>
									<TableCell>{service.description.length}</TableCell>
									<TableCell className="text-muted-foreground">
										{formatDate(service.updatedAt)}
									</TableCell>
									<TableCell>
										<div className="flex justify-end gap-2">
											<Button
												type="button"
												variant="outline"
												size="sm"
												className="rounded-2xl"
												disabled
											>
												<Pencil size={14} />
												Edit
											</Button>

											<AlertDialog>
												<AlertDialogTrigger asChild>
													<Button
														type="button"
														variant="destructive"
														size="sm"
														className="rounded-2xl"
														disabled={deletingId === service._id}
													>
														<Trash2 size={14} />
														Delete
													</Button>
												</AlertDialogTrigger>

												<AlertDialogContent>
													<AlertDialogHeader>
														<AlertDialogTitle>
															Delete this service?
														</AlertDialogTitle>
														<AlertDialogDescription>
															This action cannot be undone and will remove the service from the dashboard.
														</AlertDialogDescription>
													</AlertDialogHeader>

													<AlertDialogFooter>
														<AlertDialogCancel>Cancel</AlertDialogCancel>
														<AlertDialogAction
															onClick={() => handleDelete(service._id)}
															variant="destructive"
														>
															Delete
														</AlertDialogAction>
													</AlertDialogFooter>
												</AlertDialogContent>
											</AlertDialog>
										</div>
									</TableCell>
								</TableRow>
							))
						: null}
				</TableBody>
			</Table>
		</section>
	);
}
