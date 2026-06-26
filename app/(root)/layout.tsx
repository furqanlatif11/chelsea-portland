import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Chelsea Portland",
  description: "A polished, modern landing page experience.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
