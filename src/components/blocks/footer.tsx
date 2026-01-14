import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Linkedin, TwitterIcon, YoutubeIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/40 mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Colonne 1 — Branding */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Vox Echo Campus
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plateforme panafricaine dédiée à la valorisation des formations,
              des grandes écoles et des talents africains.
            </p>
          </div>

          {/* Colonne 2 — Explorer */}
          <div>
            <h4 className="font-medium mb-4">Explorer</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ecoles" className="hover:underline">
                  Écoles & Universités
                </Link>
              </li>
              <li>
                <Link href="/formations" className="hover:underline">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/contenus" className="hover:underline">
                  Articles & Interviews
                </Link>
              </li>
              <li>
                <Link href="/talents" className="hover:underline">
                  Talents
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 — Ressources */}
          <div>
            <h4 className="font-medium mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/orientation" className="hover:underline">
                  Orientation scolaire
                </Link>
              </li>
              <li>
                <Link href="/dossiers" className="hover:underline">
                  Dossiers thématiques
                </Link>
              </li>
              <li>
                <Link href="/interviews" className="hover:underline">
                  Interviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 — Contact & Réseaux */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@voxechocampus.africa"
                  className="hover:underline"
                >
                  contact@voxechocampus.africa
                </a>
              </li>
              <li className="flex gap-4 mt-4">
                <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
                  <Linkedin />
                </a>
                <a href="#" aria-label="Twitter" className="hover:opacity-80">
                  <TwitterIcon />
                </a>
                <a href="#" aria-label="YouTube" className="hover:opacity-80">
                  <YoutubeIcon />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <Separator className="my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Vox Echo Campus. Tous droits réservés.
          </span>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:underline">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:underline">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
