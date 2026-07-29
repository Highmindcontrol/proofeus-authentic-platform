import type { Metadata } from "next";
import { SalleTemplate } from "@/components/SalleTemplate";

export const metadata: Metadata = {
  title: "La Toile — Salle I",
  description:
    "Toute œuvre mérite une identité. La Toile est la salle où l'œuvre individuelle reçoit son Sceau — le geste fondateur qui la lie à jamais à son auteur.",
};

export default function LaToilePage() {
  return (
    <SalleTemplate
      numero="I"
      nom="La Toile"
      phrase="Toute œuvre mérite une identité."
      image="/chapitre-1-toile.png"
      sections={[
        {
          titre: "Une œuvre existe deux fois",
          corps:
            "Une œuvre existe d'abord par la matière — la toile tendue, la couche de pigment, la trace de la main. Puis elle existe une seconde fois par le regard — celui de l'auteur qui la signe, celui du collectionneur qui la reconnaît, celui de l'histoire qui la retient. Proofeus Authentic® n'invente pas cette seconde existence. Elle lui donne un corps.",
        },
        {
          titre: "Ce que le Sceau vient sceller",
          corps:
            "Le Sceau ne modifie pas l'œuvre. Il l'accompagne. Il porte l'iris de l'auteur — sa signature biométrique, aussi singulière que le grain de la toile. Il porte la date exacte de la mise en dépôt. Il porte l'empreinte immuable de sa dimension, de sa technique, de son sujet. Une œuvre scellée par Proofeus Authentic® ne peut plus être confondue, imitée, contestée. Elle a trouvé son identité.",
        },
        {
          titre: "Pour qui le Sceau est-il utile",
          corps:
            "Pour l'auteur qui souhaite que sa création ne soit jamais dissociée de son nom. Pour le collectionneur qui exige de savoir qui a peint ce qu'il achète. Pour l'historien qui reconstitue une provenance. Pour le tribunal, un jour, qui devra trancher. Sceller une œuvre, c'est prendre au sérieux sa mémoire.",
        },
      ]}
      cta={[
        { label: "Sceller mon œuvre", href: "/certifier", variant: "primary" },
        { label: "Salle suivante — La Galerie", href: "/salle/la-galerie" },
      ]}
    />
  );
}
