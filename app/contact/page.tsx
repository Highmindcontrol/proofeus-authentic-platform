import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Contact",
  description: "Une adresse unique, une équipe humaine, une réponse sous 24 h. Formulaire de contact opérationnel en préparation.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Nous écrire"
      titre="Presse, partenariats, questions."
      chapo="Une adresse unique, une équipe humaine, une réponse sous 24 h. Formulaire de contact opérationnel en préparation."
    />
  );
}
