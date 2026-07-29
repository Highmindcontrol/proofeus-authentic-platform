import type { Metadata } from "next";
import { SalleTemplate } from "@/components/SalleTemplate";

export const metadata: Metadata = {
  title: "La Succession — Salle IV",
  description:
    "La confiance se transmet. La Succession est la salle où le Sceau accompagne l'œuvre à travers les générations, sans jamais rompre le fil qui la relie à son auteur.",
};

export default function LaSuccessionPage() {
  return (
    <SalleTemplate
      numero="IV"
      nom="La Succession"
      phrase="La confiance se transmet."
      image="/chapitre-4-succession.png"
      sections={[
        {
          titre: "Une œuvre change de mains, jamais d'identité",
          corps:
            "Une toile achetée aujourd'hui par un collectionneur passera peut-être demain entre les mains d'un musée, puis d'un fonds, puis d'un descendant. Elle changera de propriétaire — mais elle ne changera jamais d'auteur. Le Sceau relie l'œuvre à cette vérité première : celui qui l'a créée. Cette signature-là ne se transmet pas. Elle demeure.",
        },
        {
          titre: "Une chaîne inaltérable de propriétaires",
          corps:
            "Chaque changement de propriétaire est inscrit dans le registre de la Maison. La chaîne complète — de l'auteur au propriétaire actuel — reste consultable, vérifiable, opposable. Un historique qui n'est ni tenu par un notaire, ni par une galerie, ni par un État. Il est tenu par la Maison, pour toujours.",
        },
        {
          titre: "Transmettre, hériter, léguer",
          corps:
            "Une œuvre scellée par la Maison peut être offerte, vendue, ou léguée par testament. Le Sceau reste attaché à l'œuvre ; la plaque compagnon suit son propriétaire. Ce que l'héritier reçoit n'est plus une pièce dont il devra prouver l'authenticité — c'est une pièce dont l'authenticité est déjà prouvée. La confiance a été transmise en même temps que l'œuvre.",
        },
      ]}
      cta={[
        { label: "En savoir plus sur la transmission", href: "/artistes", variant: "primary" },
        { label: "Revenir à La Toile", href: "/salle/la-toile" },
      ]}
    />
  );
}
