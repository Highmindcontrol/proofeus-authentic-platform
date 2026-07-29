import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Artistes",
  description: "Sceau d'Auteur pour toile, sculpture, photo, NFT. Un seul standard, deux formats — la même signature biométrique inaltérable rattachée à votre nom, opposable dans le monde entier.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Pour les artistes"
      titre="Certifiez vos œuvres, physiques et numériques."
      chapo="Sceau d'Auteur pour toile, sculpture, photo, NFT. Un seul standard, deux formats — la même signature biométrique inaltérable rattachée à votre nom, opposable dans le monde entier."
    />
  );
}
