"use client";

import { useState, type FormEvent } from "react";

/**
 * Moteur de recherche du Registre — posé sur l'image hero de /registry.
 *
 * V1 sans backend : accepte un numéro d'œuvre et affiche un message de
 * disponibilité. À brancher plus tard sur l'API du registre public.
 */
export function RegistrySearch() {
  const [numero, setNumero] = useState("");
  const [state, setState] = useState<
    | { kind: "idle" }
    | { kind: "searching" }
    | { kind: "not-found"; numero: string }
    | { kind: "coming-soon" }
  >({ kind: "idle" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const cleaned = numero.trim();
    if (!cleaned) return;
    setState({ kind: "searching" });
    // Simulation courte — pas de backend registre pour l'instant
    setTimeout(() => {
      setState({ kind: "coming-soon" });
    }, 500);
  }

  return (
    <div className="mx-auto w-full max-w-lg">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 rounded-full border border-cyan-proofeus/40 bg-black/70 p-1.5 backdrop-blur-xl"
        style={{
          boxShadow:
            "0 12px 40px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(63,212,217,0.15)",
        }}
      >
        {/* Icône loupe */}
        <div
          aria-hidden
          className="ml-3 flex-shrink-0 text-cyan-proofeus/70"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.75" />
            <path
              d="M14 14l3 3"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <input
          type="text"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Numéro d'œuvre (ex. 001042)"
          aria-label="Numéro d'œuvre à vérifier dans le Registre"
          className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-blanc-casse outline-none placeholder:text-blanc-casse/50"
        />

        <button
          type="submit"
          disabled={!numero.trim() || state.kind === "searching"}
          className="flex-shrink-0 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest text-noir transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
          style={{ background: "var(--color-cyan-proofeus)" }}
        >
          {state.kind === "searching" ? "…" : "Vérifier"}
        </button>
      </form>

      {/* Feedback */}
      {state.kind === "coming-soon" && (
        <p
          className="mx-auto mt-4 max-w-md rounded-sm border border-cyan-proofeus/30 bg-black/60 px-4 py-3 text-center text-xs leading-relaxed text-blanc-casse/85 backdrop-blur"
          role="status"
        >
          Le Registre public sera consultable dès l&apos;ouverture officielle.
          Rejoignez la liste d&apos;attente pour être averti.
        </p>
      )}
      {state.kind === "not-found" && (
        <p
          className="mx-auto mt-4 max-w-md rounded-sm border border-blanc-casse/20 bg-black/60 px-4 py-3 text-center text-xs leading-relaxed text-gris-clair backdrop-blur"
          role="status"
        >
          Aucune œuvre trouvée sous le numéro « {state.numero} ».
        </p>
      )}
    </div>
  );
}
