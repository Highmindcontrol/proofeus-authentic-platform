import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Tarifs",
  description: "Certification à l'œuvre, abonnement galerie, forfait institutions. Prix transparents, pas de commission de vente, pas de piège. Grille détaillée en préparation.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Nos formules"
      titre="Artistes, galeries, marketplaces — une offre par cible."
      chapo="Certification à l'œuvre, abonnement galerie, forfait institutions. Prix transparents, pas de commission de vente, pas de piège. Grille détaillée en préparation."
    />
  );
}
