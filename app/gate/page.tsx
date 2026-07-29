"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

export default function GatePage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        window.location.href = "/";
      } else {
        setError("Mot de passe incorrect.");
        setLoading(false);
      }
    } catch {
      setError("Une erreur est survenue. Réessayez.");
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-md text-center">
        {/* Sceau canonique */}
        <div className="mx-auto flex justify-center">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full opacity-25 blur-3xl"
              style={{ background: "var(--color-cyan-proofeus)" }}
            />
            <Image
              src="/sceau-canonique.png"
              alt=""
              width={140}
              height={140}
              className="relative"
              priority
            />
          </div>
        </div>

        <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
          Accès réservé
        </p>
        <h1
          className="mt-4 font-light tracking-[-0.01em] text-blanc-casse"
          style={{
            fontFamily:
              "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
            lineHeight: 1.2,
          }}
        >
          Proofeus Authentic — chantier en cours
        </h1>
        <p className="mt-6 text-base leading-relaxed text-gris-clair">
          La plateforme est en préparation. L&apos;accès est réservé jusqu&apos;à
          l&apos;ouverture officielle.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
            autoFocus
            autoComplete="current-password"
            className="w-full rounded-full border border-gris-sombre bg-noir-profond px-6 py-3 text-center text-sm text-blanc-casse placeholder:text-gris-clair/60 outline-none transition-colors focus:border-cyan-proofeus/60"
          />
          {error && (
            <p className="text-sm text-red-400/90" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            style={{ background: "var(--color-cyan-proofeus)" }}
          >
            {loading ? "Vérification…" : "Entrer"}
          </button>
        </form>

        <p className="mt-10 text-xs uppercase tracking-[0.28em] text-gris-clair/60">
          © Proofeus Authentic® — édité par Ataraxis IA
        </p>
      </div>
    </main>
  );
}
