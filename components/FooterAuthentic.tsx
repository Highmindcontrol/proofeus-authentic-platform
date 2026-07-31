import Link from "next/link";

/**
 * Footer Proofeus Authentic® — sobre, informatif, cohérent groupe.
 *
 * 4 colonnes : Maison / Artistes & Galeries / Web3 / Éditeur.
 * Ligne finale : copyright + liens légaux + cross-links écosystème.
 */
export function FooterAuthentic() {
  return (
    <footer className="border-t border-gris-sombre bg-noir-profond px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300/70">
              L&apos;essentiel
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gris-clair">
              <li><Link href="/" className="hover:text-cyan-proofeus">Ce que nous faisons</Link></li>
              <li><Link href="/ecosysteme" className="hover:text-cyan-proofeus">L&apos;écosystème Proofeus®</Link></li>
              <li><Link href="/voix" className="hover:text-cyan-proofeus">Voix Authentic</Link></li>
              <li><Link href="/presse" className="hover:text-cyan-proofeus">Presse</Link></li>
              <li><Link href="/manifeste" className="hover:text-cyan-proofeus">Manifeste</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300/70">
              Artistes & Galeries
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gris-clair">
              <li><Link href="/artistes" className="hover:text-cyan-proofeus">Offre Artistes</Link></li>
              <li><Link href="/galeries" className="hover:text-cyan-proofeus">Offre Institutions</Link></li>
              <li><Link href="/gaugista" className="hover:text-cyan-proofeus">Module Gaugista</Link></li>
              <li><Link href="/registry" className="hover:text-cyan-proofeus">Le Registre</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300/70">
              Web3 & NFT
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gris-clair">
              <li><Link href="/genesis" className="hover:text-cyan-proofeus">Sceau des Origines</Link></li>
              <li><Link href="/marketplaces" className="hover:text-cyan-proofeus">Marketplaces partenaires</Link></li>
              <li><Link href="/developers" className="hover:text-cyan-proofeus">Développeurs / SDK</Link></li>
              <li><Link href="/web3" className="hover:text-cyan-proofeus">Vue d&apos;ensemble Web3</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300/70">
              Éditeur
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gris-clair">
              <li>
                <a
                  href="https://ataraxis.group"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-cyan-proofeus"
                >
                  Ataraxis IA ↗
                </a>
              </li>
              <li>
                <a
                  href="https://proofeus.com"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-cyan-proofeus"
                >
                  Proofeus® ↗
                </a>
              </li>
              <li><Link href="/contact" className="hover:text-cyan-proofeus">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Ligne finale */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-gris-sombre pt-8 text-xs text-gris-clair md:flex-row md:items-center">
          <p>
            © Proofeus Authentic® — édité par Ataraxis IA. La plateforme de
            certification des œuvres physiques et numériques à l&apos;ère de
            l&apos;intelligence artificielle.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-cyan-proofeus">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-cyan-proofeus">
              Confidentialité
            </Link>
            <Link href="/cookies" className="hover:text-cyan-proofeus">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
