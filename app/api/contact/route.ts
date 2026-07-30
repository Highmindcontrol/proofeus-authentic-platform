import { NextResponse } from "next/server";

/**
 * Route interne du formulaire de contact de /aide.
 *
 * V1 sans backend externe : valide le payload, journalise sur le
 * serveur, renvoie success. À brancher plus tard sur Brevo, Supabase
 * ou stockage DB.
 */

type ContactPayload = {
  nom?: string;
  email?: string;
  sujet?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid-json" },
      { status: 400 },
    );
  }

  const nom = (body.nom ?? "").trim();
  const email = (body.email ?? "").trim();
  const sujet = (body.sujet ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!nom || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "missing-fields" },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "invalid-email" },
      { status: 400 },
    );
  }

  // Journalisation serveur — à remplacer par Brevo/DB dans la V2.
  console.log("[contact]", {
    at: new Date().toISOString(),
    nom,
    email,
    sujet,
    message: message.slice(0, 500),
  });

  return NextResponse.json({ ok: true });
}
