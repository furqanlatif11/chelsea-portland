import { ReactNode } from "react";
import DashboardHeader from "./dashboardHeader";
import DashboardSidebar from "./dashboardSidebar";

interface DashboardShellProps {
  children: ReactNode;
}

export default function DashboardShell({
  children,
}: DashboardShellProps) {
  return (
    <div className="flex min-h-screen bg-muted/30 text-foreground">
      <DashboardSidebar />

      <div className="flex flex-1 flex-col">
        <DashboardHeader />

        <main className="flex-1 px-6 py-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}