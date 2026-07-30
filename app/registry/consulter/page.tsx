import type { Metadata } from "next";
import Link from "next/link";
import { RegistrySearch } from "@/components/RegistrySearch";

export const metadata: Metadata = {
  title: "Consulter le Registre — Proofeus Authentic®",
  description:
    "Le catalogue public des œuvres scellées par Proofeus Authentic®. Recherche par numéro, par auteur, par technique — consultez librement l'ensemble des œuvres certifiées.",
};

type OeuvreRegistre = {
  numero: string;
  titre: string;
  auteur: string;
  annee: string;
  medium: string;
  proprietaire: string;
};

/* Données provisoires — remplacer par un fetch sur l'API Registre
   quand le backend sera branché. */
const OEUVRES: OeuvreRegistre[] = [
  {
    numero: "001042",
    titre: "Chapelle sous l'orage",
    auteur: "Marie Delvaux",
    annee: "2024",
    medium: "Huile sur toile",
    proprietaire: "Galerie Lumière",
  },
  {
    numero: "001108",
    titre: "Silence de Kyoto",
    auteur: "Hiroshi Tanaka",
    annee: "2024",
    medium: "Photographie",
    proprietaire: "Collection privée",
  },
  {
    numero: "001267",
    titre: "Résonance minérale",
    auteur: "Jean-Baptiste Roche",
    annee: "2025",
    medium: "Sculpture bronze",
    proprietaire: "Fondation Cristal",
  },
  {
    numero: "001341",
    titre: "Fragments d'aube",
    auteur: "Sofia Martinelli",
    annee: "2025",
    medium: "Acrylique sur bois",
    proprietaire: "Galerie Zenith",
  },
  {
    numero: "001489",
    titre: "Genesis 01",
    auteur: "David Krohn",
    annee: "2025",
    medium: "NFT ERC-721",
    proprietaire: "0x7A8F…3C2E",
  },
  {
    numero: "001523",
    titre: "Le Passage",
    auteur: "Anna Voss",
    annee: "2025",
    medium: "Huile sur lin",
    proprietaire: "Galerie Lumière",
  },
  {
    numero: "001674",
    titre: "Chorale des ombres",
    auteur: "Léa Fontaine",
    annee: "2025",
    medium: "Photographie argentique",
    proprietaire: "Musée d'Art Moderne",
  },
  {
    numero: "001788",
    titre: "Métamorphose III",
    auteur: "Pablo Sanchez",
    annee: "2025",
    medium: "Sculpture pierre",
    proprietaire: "Collection privée",
  },
  {
    numero: "001856",
    titre: "Aurora Digitalis",
    auteur: "Emma Chen",
    annee: "2025",
    medium: "Art numérique",
    proprietaire: "Foundation.app",
  },
  {
    numero: "001943",
    titre: "Souvenirs de sel",
    auteur: "Marie Delvaux",
    annee: "2025",
    medium: "Huile sur toile",
    proprietaire: "Collection privée",
  },
  {
    numero: "002061",
    titre: "Verse #7",
    auteur: "Oliver Bright",
    annee: "2025",
    medium: "NFT ERC-1155",
    proprietaire: "0xE3B1…9F04",
  },
  {
    numero: "002177",
    titre: "Écho de Delphes",
    auteur: "Sofia Martinelli",
    annee: "2026",
    medium: "Technique mixte",
    proprietaire: "Galerie Zenith",
  },
];

export default function ConsulterRegistrePage() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════════════
          1. HEADER NOIR — moteur de recherche + filtres
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-20 md:px-12 md:py-24"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-proofeus/85">
              Consulter le Registre
            </p>
            <h1
              className="mt-6 font-light tracking-[-0.02em] text-blanc-casse"
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Le catalogue public des œuvres scellées.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              Recherche par numéro, par auteur, par technique. Consultation
              libre, gratuite et anonyme — à vie.
            </p>
          </div>

          <div className="mt-10">
            <RegistrySearch />
          </div>

          {/* Filtres rapides */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              "Toutes",
              "Peinture",
              "Sculpture",
              "Photographie",
              "Art numérique",
              "NFT",
            ].map((f, i) => (
              <button
                key={f}
                type="button"
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                  i === 0
                    ? "border-cyan-proofeus/60 bg-cyan-proofeus/10 text-cyan-proofeus"
                    : "border-gris-sombre bg-transparent text-blanc-casse/70 hover:border-cyan-proofeus/50 hover:text-cyan-proofeus"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. GRILLE DES ŒUVRES — anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-baseline justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
              Dernières inscriptions
            </p>
            <p className="text-xs text-gris-clair">
              {OEUVRES.length.toLocaleString("fr-FR")} œuvres affichées ·
              catalogue en construction
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {OEUVRES.map((o) => (
              <OeuvreCard key={o.numero} oeuvre={o} />
            ))}
          </div>

          {/* Pagination factice — à brancher plus tard */}
          <div className="mt-14 flex items-center justify-center gap-2">
            {["1", "2", "3", "…", "142"].map((p, i) => (
              <button
                key={`${p}-${i}`}
                type="button"
                disabled={p === "…"}
                className={`min-w-[36px] rounded-sm border px-3 py-1.5 text-xs font-medium transition-colors ${
                  i === 0
                    ? "border-cyan-proofeus/60 bg-cyan-proofeus/10 text-cyan-proofeus"
                    : "border-gris-sombre bg-noir-profond text-blanc-casse/70 hover:border-cyan-proofeus/50 hover:text-cyan-proofeus disabled:cursor-not-allowed disabled:opacity-40"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-xs italic leading-relaxed text-gris-clair">
            Les œuvres affichées sont des exemples de démonstration. Le
            catalogue s&apos;alimentera au fur et à mesure que les artistes
            et les institutions apposeront leur Sceau.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. CTAs — bandeau noir
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-20 md:px-12 md:py-24"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
              lineHeight: 1.2,
            }}
          >
            Vous cherchez une œuvre précise ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gris-clair">
            Contactez notre équipe pour toute recherche institutionnelle,
            expertise ou audit de provenance.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-cyan-proofeus)" }}
            >
              Contacter l&apos;équipe
            </Link>
            <Link
              href="/registry"
              className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-6 py-3 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
            >
              ← À propos du Registre
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ══════════════════════════════════════════════════════════════════
   Carte œuvre — vignette + métadonnées essentielles
   ══════════════════════════════════════════════════════════════════ */

function OeuvreCard({ oeuvre }: { oeuvre: OeuvreRegistre }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-gris-sombre bg-noir-profond transition-all hover:border-cyan-proofeus/50 hover:shadow-[0_18px_40px_-14px_rgba(63,212,217,0.25)]">
      {/* Vignette placeholder — cadre dégradé + numéro visible */}
      <div
        className="relative flex aspect-[4/5] items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(63,212,217,0.10) 0%, rgba(22,22,26,0.9) 100%)",
        }}
      >
        <span
          className="font-light text-cyan-proofeus/30"
          style={{
            fontFamily:
              "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(3rem, 5vw, 4.5rem)",
            lineHeight: 1,
          }}
        >
          {oeuvre.numero.slice(-3)}
        </span>
        {/* Badge Verified Human Author */}
        <span className="absolute right-3 top-3 rounded-full border border-cyan-proofeus/60 bg-black/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-cyan-proofeus backdrop-blur">
          ✓ Vérifié
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] font-mono uppercase tracking-widest text-cyan-proofeus">
          #{oeuvre.numero}
        </p>
        <h3
          className="mt-2 font-light text-blanc-casse"
          style={{
            fontFamily:
              "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "1.35rem",
            lineHeight: 1.2,
          }}
        >
          {oeuvre.titre}
        </h3>
        <p className="mt-1 text-sm text-blanc-casse/80">{oeuvre.auteur}</p>

        <dl className="mt-4 space-y-1.5 text-xs text-gris-clair">
          <div className="flex justify-between gap-3">
            <dt>Année</dt>
            <dd className="text-blanc-casse/70">{oeuvre.annee}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt>Médium</dt>
            <dd className="text-right text-blanc-casse/70">{oeuvre.medium}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt>Propriétaire</dt>
            <dd className="truncate text-right text-blanc-casse/70">
              {oeuvre.proprietaire}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
