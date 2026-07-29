import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Marketplaces partenaires",
  description: "Foundation, SuperRare, OpenSea, Manifold, Zora — nous proposons gratuitement une intégration Sceau Proofeus® dans vos flux. Vous devenez la seule marketplace où l'humain est garanti.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Partenariats Web3"
      titre="Intégrer le Sceau dans votre marketplace."
      chapo="Foundation, SuperRare, OpenSea, Manifold, Zora — nous proposons gratuitement une intégration Sceau Proofeus® dans vos flux. Vous devenez la seule marketplace où l'humain est garanti."
    />
  );
}
