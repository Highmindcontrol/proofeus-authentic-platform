import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Galeries & Institutions",
  description: "Cabinet de certification humaine dédié aux professionnels du marché de l'art. Sceaux d'Auteur illimités, protocole post-mortem 3 verrous, intégration Gaugista pour mesurer les ressentis des visiteurs.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Pour les galeries, musées, fondations"
      titre="L'offre Proofeus® Institutions."
      chapo="Cabinet de certification humaine dédié aux professionnels du marché de l'art. Sceaux d'Auteur illimités, protocole post-mortem 3 verrous, intégration Gaugista pour mesurer les ressentis des visiteurs."
    />
  );
}
