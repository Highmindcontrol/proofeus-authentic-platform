import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Voix Authentic",
  description: "Réflexions doctrinales, entretiens d'artistes, analyses du marché post-IA générative. Les prises de position d'Ataraxis IA sur la certification de l'humain. Publication à venir.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Blog éditorial"
      titre="Nos textes sur l'humain, l'IA, l'art."
      chapo="Réflexions doctrinales, entretiens d'artistes, analyses du marché post-IA générative. Les prises de position d'Ataraxis IA sur la certification de l'humain. Publication à venir."
    />
  );
}
