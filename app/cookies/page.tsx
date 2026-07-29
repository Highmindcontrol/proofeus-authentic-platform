import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Aucun cookie de tracking, aucun cookie publicitaire, aucun revendeur tiers. Seuls les cookies techniques nécessaires au fonctionnement de la plateforme. Version détaillée en préparation.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Politique cookies"
      titre="Cookies essentiels uniquement."
      chapo="Aucun cookie de tracking, aucun cookie publicitaire, aucun revendeur tiers. Seuls les cookies techniques nécessaires au fonctionnement de la plateforme. Version détaillée en préparation."
    />
  );
}
