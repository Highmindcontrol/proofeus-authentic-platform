import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Web3 & NFT",
  description: "Le maillon humain manquant enfin soudé. Sceau des Origines, Proofeus Genesis, marketplaces partenaires. Une infrastructure de confiance, neutre, souveraine, sous droit européen.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Pour le monde Web3"
      titre="NFT : problème résolu."
      chapo="Le maillon humain manquant enfin soudé. Sceau des Origines, Proofeus Genesis, marketplaces partenaires. Une infrastructure de confiance, neutre, souveraine, sous droit européen."
    />
  );
}
