import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Aide",
  description: "FAQ, tutoriels, documentation, contact humain. Une équipe qui répond en moins de 24 h, sans robot, sans centre d'appel. L'écosystème d'aide se met en place progressivement.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Centre d'aide"
      titre="Nous sommes joignables."
      chapo="FAQ, tutoriels, documentation, contact humain. Une équipe qui répond en moins de 24 h, sans robot, sans centre d'appel. L'écosystème d'aide se met en place progressivement."
    />
  );
}
