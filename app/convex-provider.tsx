"use client";

import { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

const convexClient = convexUrl ? new ConvexReactClient(convexUrl) : null;

interface ConvexProviderProps {
  children: ReactNode;
}

export default function AppConvexProvider({ children }: ConvexProviderProps) {
  if (!convexClient) {
    return <>{children}</>;
  }

  return <ConvexProvider client={convexClient}>{children}</ConvexProvider>;
}
