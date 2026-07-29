import type { Metadata } from "next";
import { SalleTemplate } from "@/components/SalleTemplate";

export const metadata: Metadata = {
  title: "Le Coffre — Salle III",
  description:
    "Certaines choses traversent le temps. Le Coffre est la salle où la plateforme conserve la mémoire — un registre immuable, ouvert au public, qui survit aux modes et aux régimes.",
};

export default function LeCoffrePage() {
  return (
    <SalleTemplate
      numero="III"
      nom="Le Coffre"
      phrase="Certaines choses traversent le temps."
      image="/chapitre-3-coffre.png"
      sections={[
        {
          titre: "La mémoire ne pardonne pas l'à-peu-près",
          corps:
            "Une œuvre traverse les siècles. Les documents qui l'accompagnent, non. Les certificats papier jaunissent, se perdent, se falsifient. Les archives brûlent. Les héritiers meurent. Proofeus Authentic® a été conçu pour survivre à tous ces oublis — parce que sa mémoire n'appartient à personne en particulier, et donc à chacun.",
        },
        {
          titre: "Un registre ouvert, inaltérable, souverain",
          corps:
            "Chaque Sceau émis par la plateforme est inscrit dans un registre public. Toute personne au monde peut consulter l'existence d'une œuvre certifiée, son auteur, sa date d'inscription. Nul ne peut effacer une entrée du registre. Nul ne peut la falsifier. Proofeus Authentic® elle-même n'en a pas le pouvoir.",
        },
        {
          titre: "Ce qui traverse le temps",
          corps:
            "Le Sceau, la plaque compagnon, l'iris de l'auteur, l'empreinte cryptographique de l'œuvre — tous demeurent quand l'artiste s'en va, quand la galerie ferme, quand la plateforme elle-même ne serait plus. Le registre est notre engagement solennel : ce que nous scellons aujourd'hui doit pouvoir être vérifié dans un siècle.",
        },
      ]}
      cta={[
        { label: "Visiter le registre", href: "/registry", variant: "primary" },
        { label: "Salle suivante — La Succession", href: "/salle/la-succession" },
      ]}
    />
  );
}
