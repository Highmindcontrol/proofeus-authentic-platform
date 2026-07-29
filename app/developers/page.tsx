import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Développeurs",
  description: "SDK open source, API REST, smart contracts audités sur Base. Documentation technique complète, exemples d'intégration, support développeur. Bientôt disponible.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="API & SDK"
      titre="Intégrer Proofeus Authentic® à vos plateformes."
      chapo="SDK open source, API REST, smart contracts audités sur Base. Documentation technique complète, exemples d'intégration, support développeur. Bientôt disponible."
    />
  );
}
