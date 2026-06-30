import type { ReactNode } from "react";
import DashboardShell from "./components/dashboard/layout/dashboardShell";


interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return <DashboardShell>{children}</DashboardShell>;
}