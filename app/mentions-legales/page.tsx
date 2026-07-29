import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Éditeur, hébergement, propriété intellectuelle, droit applicable. Version complète disponible avant l'ouverture commerciale.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Mentions légales"
      titre="Informations légales."
      chapo="Éditeur, hébergement, propriété intellectuelle, droit applicable. Version complète disponible avant l'ouverture commerciale."
    />
  );
}
