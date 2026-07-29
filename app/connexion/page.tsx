import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Connexion",
  description: "L'espace membre Authentic ouvrira son accès à l'arrivée à Chypre. Rejoignez la liste d'attente pour être prévenu en priorité.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Espace membre"
      titre="Bientôt disponible."
      chapo="L'espace membre Authentic ouvrira son accès à l'arrivée à Chypre. Rejoignez la liste d'attente pour être prévenu en priorité."
    />
  );
}
