"use client";

import { useState, type FormEvent } from "react";

/**
 * Formulaire de contact interne — POST vers /api/contact.
 * V1 journalise côté serveur, à brancher plus tard sur Brevo / DB.
 * Ne renvoie JAMAIS vers une messagerie externe (mailto:).
 *
 * Optionnel : `categories` — si fourni, le champ "Sujet" libre est
 * remplacé par un <select> de catégories prédéfinies (ex. sur la page
 * /contact pour orienter la demande vers artistes / partenariats /
 * presse sans utiliser d'adresses email séparées).
 */
export function ContactForm({
  categories,
}: {
  categories?: string[];
} = {}) {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [categorie, setCategorie] = useState(categories?.[0] ?? "");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    try {
      const payload = categories
        ? { nom, email, sujet: categorie, message }
        : { nom, email, sujet, message };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setState("sent");
        setNom("");
        setEmail("");
        setSujet("");
        setCategorie(categories?.[0] ?? "");
        setMessage("");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl space-y-4"
      aria-labelledby="contact-title"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
            Votre nom
          </span>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            autoComplete="name"
            className="w-full rounded-sm border border-gris-sombre bg-noir-profond px-4 py-3 text-sm text-blanc-casse outline-none transition-colors placeholder:text-blanc-casse/40 focus:border-cyan-proofeus/60"
            placeholder="Marie Dupont"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
            Votre email
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="w-full rounded-sm border border-gris-sombre bg-noir-profond px-4 py-3 text-sm text-blanc-casse outline-none transition-colors placeholder:text-blanc-casse/40 focus:border-cyan-proofeus/60"
            placeholder="marie@exemple.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
          {categories ? "Type de demande" : "Sujet"}
        </span>
        {categories ? (
          <select
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
            required
            className="w-full appearance-none rounded-sm border border-gris-sombre bg-noir-profond px-4 py-3 text-sm text-blanc-casse outline-none transition-colors focus:border-cyan-proofeus/60"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%233fd4d9' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "12px 8px",
              paddingRight: "2.5rem",
            }}
          >
            {categories.map((c) => (
              <option key={c} value={c} className="bg-noir-profond">
                {c}
              </option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            value={sujet}
            onChange={(e) => setSujet(e.target.value)}
            className="w-full rounded-sm border border-gris-sombre bg-noir-profond px-4 py-3 text-sm text-blanc-casse outline-none transition-colors placeholder:text-blanc-casse/40 focus:border-cyan-proofeus/60"
            placeholder="Question sur mon Sceau d'auteur"
          />
        )}
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
          Votre message
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          className="w-full resize-y rounded-sm border border-gris-sombre bg-noir-profond px-4 py-3 text-sm leading-relaxed text-blanc-casse outline-none transition-colors placeholder:text-blanc-casse/40 focus:border-cyan-proofeus/60"
          placeholder="Décrivez votre demande…"
        />
      </label>

      {state === "sent" && (
        <p
          role="status"
          className="rounded-sm border border-cyan-proofeus/40 bg-black/60 px-4 py-3 text-sm text-blanc-casse"
        >
          Merci — votre message est bien parvenu à l&apos;équipe Proofeus
          Authentic®. Nous vous répondons humainement sous vingt-quatre
          heures.
        </p>
      )}
      {state === "error" && (
        <p
          role="alert"
          className="rounded-sm border border-red-400/40 bg-black/60 px-4 py-3 text-sm text-red-300"
        >
          Une erreur est survenue. Merci de réessayer dans quelques
          instants.
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <p className="text-xs text-gris-clair">
          Formulaire interne — vos données restent dans notre infrastructure
          européenne, jamais transférées à un tiers.
        </p>
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
          style={{ background: "var(--color-cyan-proofeus)" }}
        >
          {state === "sending" ? "Envoi…" : "Envoyer le message"}
        </button>
      </div>
    </form>
  );
}
