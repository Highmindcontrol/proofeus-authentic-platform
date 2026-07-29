import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Certifier une œuvre",
  description: "Enrôlement biométrique de l'artiste, upload de l'œuvre, émission du Sceau d'Auteur sur la blockchain Base. La procédure complète sera ouverte à l'arrivée à Chypre.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Certification"
      titre="Certifier une œuvre en trois gestes."
      chapo="Enrôlement biométrique de l'artiste, upload de l'œuvre, émission du Sceau d'Auteur sur la blockchain Base. La procédure complète sera ouverte à l'arrivée à Chypre."
    />
  );
}
