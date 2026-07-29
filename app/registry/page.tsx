import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Le Registre",
  description: "Physique ou numérique, chaque œuvre scellée par un Sceau d'Auteur apparaît dans le Registre. Signature humaine vérifiée, date de scellement, empreinte micro-visuelle. Le catalogue mondial de l'art authentique.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Registre public unifié"
      titre="Toutes les œuvres certifiées Proofeus."
      chapo="Physique ou numérique, chaque œuvre scellée par un Sceau d'Auteur apparaît dans le Registre. Signature humaine vérifiée, date de scellement, empreinte micro-visuelle. Le catalogue mondial de l'art authentique."
    />
  );
}
