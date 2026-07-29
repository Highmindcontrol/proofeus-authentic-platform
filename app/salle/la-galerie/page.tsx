import type { Metadata } from "next";
import { SalleTemplate } from "@/components/SalleTemplate";

export const metadata: Metadata = {
  title: "La Galerie — Salle II",
  description:
    "L'authenticité précède la valeur. La Galerie est la salle où le regard collectif reconnaît l'œuvre — mais seule la certification en amont rend cette reconnaissance possible.",
};

export default function LaGaleriePage() {
  return (
    <SalleTemplate
      numero="II"
      nom="La Galerie"
      phrase="L'authenticité précède la valeur."
      image="/chapitre-2-galerie.png"
      sections={[
        {
          titre: "Aucune valeur ne naît d'une œuvre douteuse",
          corps:
            "Le marché de l'art repose sur une convention silencieuse : ce qui est authentifié peut être valorisé. Une œuvre dont l'auteur ne peut être confirmé perd son socle — quelle que soit sa beauté. Proofeus Authentic® reconnaît ce fait ancien et lui donne, à l'ère post-IA, un outil à la hauteur du problème.",
        },
        {
          titre: "Ce que change le Sceau pour un collectionneur",
          corps:
            "Le collectionneur qui contemple une œuvre scellée n'a pas à croire — il peut vérifier. Le Sceau lui donne, en trois secondes, la signature biométrique de l'auteur, l'historique complet de la pièce, la certitude qu'aucune copie ne peut usurper cette provenance. La contemplation reprend sa place première : le rapport à l'œuvre, débarrassé du soupçon.",
        },
        {
          titre: "Ce que change le Sceau pour une galerie",
          corps:
            "Une galerie qui adopte le Sceau ne vend plus la même chose. Elle vend une œuvre dont chaque étape — création, exposition, vente, transmission — est inscrite dans un registre inaltérable. C'est le fondement même de la confiance renouvelée entre l'artiste, le marchand, l'acheteur et l'institution.",
        },
      ]}
      cta={[
        { label: "Offre Institutions", href: "/galeries", variant: "primary" },
        { label: "Salle suivante — Le Coffre", href: "/salle/le-coffre" },
      ]}
    />
  );
}
