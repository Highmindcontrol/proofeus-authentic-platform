import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Manifeste",
  description: "L'IA générative rend indistinguables l'humain et la machine dans la création. Nous refusons ce brouillage. Notre texte fondateur — en cours de rédaction.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Le Manifeste"
      titre="Pourquoi Proofeus Authentic existe."
      chapo="L'IA générative rend indistinguables l'humain et la machine dans la création. Nous refusons ce brouillage. Notre texte fondateur — en cours de rédaction."
    />
  );
}
