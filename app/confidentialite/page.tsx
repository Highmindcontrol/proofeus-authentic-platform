import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Nous respectons intégralement le RGPD. Vos données biométriques ne sont jamais stockées en clair — seulement des dérivations cryptographiques irréversibles. Version détaillée en préparation.",
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Politique de confidentialité"
      titre="RGPD strict."
      chapo="Nous respectons intégralement le RGPD. Vos données biométriques ne sont jamais stockées en clair — seulement des dérivations cryptographiques irréversibles. Version détaillée en préparation."
    />
  );
}
