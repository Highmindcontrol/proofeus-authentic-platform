import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://proofeus.art"),
  title: {
    default: "Proofeus Authentic® — La Maison de l'Art Authentique",
    template: "%s · Proofeus Authentic®",
  },
  description:
    "La Maison de l'Art Authentique — physique et numérique. Certification biométrique multi-modale de l'humain derrière chaque œuvre. Galeries, artistes, Web3, NFT : le maillon humain manquant, sous droit européen.",
  openGraph: {
    title: "Proofeus Authentic® — La Maison de l'Art Authentique",
    description:
      "L'humain derrière l'œuvre, toujours. Physique ou numérique, chaque œuvre certifiée par Proofeus porte la signature biométrique de son auteur — opposable, inaltérable, sous droit européen.",
    type: "website",
    siteName: "Proofeus Authentic",
    locale: "fr_FR",
    images: [
      {
        url: "/sceau-canonique.png",
        width: 1200,
        height: 1200,
        alt: "Le Sceau Cristal — Proofeus Authentic",
      },
    ],
  },
  icons: {
    icon: "/sceau-canonique.png",
    apple: "/sceau-canonique.png",
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
