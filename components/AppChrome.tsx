"use client";

import { usePathname } from "next/navigation";
import { HeaderAuthentic } from "./HeaderAuthentic";
import { FooterAuthentic } from "./FooterAuthentic";

/**
 * Wrapper qui masque Header + Footer sur /gate.
 * Client component minimal pour lire le pathname côté navigateur.
 */
export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGate = pathname === "/gate";

  if (isGate) {
    return <>{children}</>;
  }

  return (
    <>
      <HeaderAuthentic />
      {children}
      <FooterAuthentic />
    </>
  );
}
