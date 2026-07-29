import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Gaugista®",
  description: "En galerie ou en ligne, chaque visiteur peut noter ses ressentis face à une œuvre selon plusieurs critères — signature biométrique garantie, résultats exposables à l'artiste comme preuve d'accueil du public.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Module Gaugista"
      titre="Mesurer les ressentis, signés."
      chapo="En galerie ou en ligne, chaque visiteur peut noter ses ressentis face à une œuvre selon plusieurs critères — signature biométrique garantie, résultats exposables à l'artiste comme preuve d'accueil du public."
    />
  );
}
