import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proofeus Genesis® — Le Sceau des Origines",
  description:
    "1 000 000 de fragments Soul-Bound d'une œuvre unique, offerts aux premiers humains vérifiés par Proofeus®. Trace historique, pas actif spéculatif.",
};

/**
 * Page dédiée au Sceau des Origines (Proofeus Genesis®).
 * V1 placeholder — en Phase 3 (T1 2027) : compteur temps réel, galerie
 * dynamique des Sceaux mint, formulaire réclamation.
 */
export default function GenesisPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-gris-clair transition-colors hover:text-cyan-proofeus"
        >
          <span aria-hidden>←</span> Retour Authentic
        </Link>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
          Proofeus Genesis®
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] md:text-6xl">
          Le Sceau des Origines.
        </h1>

        {/* Le Sceau canonique */}
        <div className="mt-10 flex justify-center">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--color-cyan-proofeus)" }}
            />
            <Image
              src="/sceau-canonique.png"
              alt="Le Sceau Cristal — objet iconique de Proofeus Authentic®"
              width={320}
              height={320}
              className="relative"
            />
          </div>
        </div>
        <p className="mt-6 text-center text-sm italic text-cyan-300/70">
          Le même Sceau pour chacun des 1 000 000 titulaires.
          <br />
          Une plaque compagnon numérotée personnalise chaque fragment.
        </p>
        <p className="mt-8 text-xl leading-relaxed text-gris-clair">
          La première œuvre auto-certifiée de l&apos;histoire de Proofeus®.
          Une œuvre numérique unique dont un million de fragments sont
          distribués sous forme de Soul-Bound Tokens (SBT) aux premiers
          humains vérifiés par la plateforme.
        </p>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-sm border border-gris-sombre bg-noir-profond/60 p-6">
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--color-or-authentic)" }}
            >
              Volume
            </p>
            <p className="mt-2 text-3xl font-semibold text-blanc-casse">
              1 000 000
            </p>
            <p className="mt-1 text-sm text-gris-clair">
              fragments Soul-Bound
            </p>
          </div>
          <div className="rounded-sm border border-gris-sombre bg-noir-profond/60 p-6">
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--color-or-authentic)" }}
            >
              Blockchain
            </p>
            <p className="mt-2 text-3xl font-semibold text-blanc-casse">
              Base
            </p>
            <p className="mt-1 text-sm text-gris-clair">
              Ethereum L2 · frais quasi nuls
            </p>
          </div>
          <div className="rounded-sm border border-gris-sombre bg-noir-profond/60 p-6">
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--color-or-authentic)" }}
            >
              Type
            </p>
            <p className="mt-2 text-3xl font-semibold text-blanc-casse">
              SBT
            </p>
            <p className="mt-1 text-sm text-gris-clair">
              Non-transférable · sans valeur de rachat
            </p>
          </div>
          <div className="rounded-sm border border-gris-sombre bg-noir-profond/60 p-6">
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--color-or-authentic)" }}
            >
              Modèle
            </p>
            <p className="mt-2 text-3xl font-semibold text-blanc-casse">
              Lazy Mint
            </p>
            <p className="mt-1 text-sm text-gris-clair">
              Mint uniquement à la réclamation
            </p>
          </div>
        </section>

        <section className="mt-16 border-l-2 border-cyan-proofeus/50 pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
            Ligne rouge
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-blanc-casse">
            Pas un actif. Une trace.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gris-clair">
            Le Sceau des Origines ne prend pas de valeur monétaire, ne se
            revend pas, ne se transfère pas. C&apos;est un{" "}
            <strong className="text-blanc-casse">certificat de fondation</strong>{" "}
            historique — la marque à vie d&apos;avoir participé aux premiers
            temps de la certification humaine à l&apos;ère post-IA.
          </p>
        </section>

        <section className="mt-16 rounded-sm border border-gris-sombre bg-noir-profond/40 p-8">
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: "var(--color-or-authentic)" }}
          >
            Compteur temps réel
          </p>
          <p className="mt-4 text-6xl font-semibold text-blanc-casse">
            —
          </p>
          <p className="mt-2 text-sm text-gris-clair">
            humains vérifiés · disponible au drop T1 2027
          </p>
        </section>

        <p className="mt-12 text-center text-sm text-gris-clair">
          Le drop du Sceau des Origines est prévu au premier trimestre 2027.
          <br />
          <Link
            href="/#waitlist"
            className="text-cyan-proofeus hover:underline"
          >
            Rejoignez la liste d&apos;attente
          </Link>{" "}
          pour être prévenu en avant-première.
        </p>
      </div>
    </main>
  );
}
