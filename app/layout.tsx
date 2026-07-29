import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://proofeus.art"),
  title: {
    default: "Proofeus Authentic® — NFT : problème résolu.",
    template: "%s · Proofeus Authentic®",
  },
  description:
    "Espace dédié à la certification humaine dans le Web3. Proofeus Authentic certifie l'humain derrière chaque œuvre numérique et chaque NFT. Accueille Proofeus Genesis et le drop du Sceau des Origines.",
  openGraph: {
    title: "Proofeus Authentic® — NFT : problème résolu.",
    description:
      "Le maillon humain manquant du Web3. Certification biométrique multi-modale de l'humain derrière chaque œuvre.",
    type: "website",
    siteName: "Proofeus Authentic",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
