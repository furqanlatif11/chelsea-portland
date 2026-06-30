"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ServiceForm from "./serviceForm";

interface ServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ServiceDialog({
  open,
  onOpenChange,
}: ServiceDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Add Service
          </DialogTitle>

          <DialogDescription>
            Use the form below to add a new service that will appear on the website.
          </DialogDescription>
        </DialogHeader>

        <ServiceForm
          onSuccess={() => onOpenChange(false)}
          onCancel={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}