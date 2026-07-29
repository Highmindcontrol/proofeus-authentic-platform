import type { Metadata } from "next";
import "./globals.css";
import { AppChrome } from "@/components/AppChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://proofeus.art"),
  title: {
    default:
      "Proofeus Authentic® — Certification des œuvres d'art physiques et numériques",
    template: "%s · Proofeus Authentic®",
  },
  description:
    "La première plateforme de certification des œuvres d'art physiques et numériques à l'ère de l'intelligence artificielle. Contre la copie, la contrefaçon et l'usurpation d'auteur — l'humain derrière l'œuvre, toujours.",
  openGraph: {
    title:
      "Proofeus Authentic® — Certification des œuvres d'art physiques et numériques",
    description:
      "Proofeus Authentic® relie chaque œuvre à l'humain qui l'a créée par une empreinte biométrique unique et un registre public inaltérable. Copies générées par IA, contrefaçons, usurpations d'auteur : le problème est résolu.",
    type: "website",
    siteName: "Proofeus Authentic®",
    locale: "fr_FR",
    images: [
      {
        url: "/sceau-canonique.png",
        width: 1200,
        height: 1200,
        alt: "Le Sceau Proofeus® — Proofeus Authentic®",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
