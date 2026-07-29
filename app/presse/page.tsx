import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Presse",
  description: "Dossier de presse, biographies fondateur, visuels haute définition du Sceau, chronologie du projet, contacts médias. Ouverture au drop du Sceau des Origines T1 2027.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Kit presse"
      titre="Documents pour journalistes."
      chapo="Dossier de presse, biographies fondateur, visuels haute définition du Sceau, chronologie du projet, contacts médias. Ouverture au drop du Sceau des Origines T1 2027."
    />
  );
}
