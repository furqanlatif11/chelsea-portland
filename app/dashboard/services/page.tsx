"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";

import PageHeader from "../components/dashboard/layout/pageHeader";
import ServiceTable from "./components/serviceTable";
import ServiceDialog from "./components/serviceDialog";


import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const [open, setOpen] = useState(false);

  const services = useQuery(api.services.getServices);

  return (
    <>
      <PageHeader
        title="Services"
        description="Manage all services displayed on the Chelsea Portland website."
      >
        <Button
          onClick={() => setOpen(true)}
          className="gap-2 rounded-2xl"
        >
          <Plus size={18} />
          Add Service
        </Button>
      </PageHeader>

      <ServiceTable
        services={services ?? []}
        loading={services === undefined}
      />

      <ServiceDialog
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}