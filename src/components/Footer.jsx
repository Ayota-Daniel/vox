import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import logoImg from "@/assets/images/logo-white.png";

export default function Footer() {
  return (
    <footer className="bg-[#1E5FAF] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <BookOpen className="w-8 h-8" /> */}
               <img src={logoImg} alt="Logo" className="h-14 w-auto" />
            </div>
            <p className="text-blue-100 leading-relaxed">
              Votre plateforme d'orientation académique pour exceller en Afrique.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-4">
              <Mail className="w-5 h-5 text-blue-200" />
              <a
                href="mailto:contact@voxeCampus.com"
                className="text-blue-100 hover:text-white transition-colors"
              >
                contact@voxeCampus.com
              </a>
            </div>
            <p className="text-sm text-blue-200">Contactez-nous pour toute question</p>
          </div>

          <div className="flex flex-col items-end">
            <button className="px-6 py-3 bg-[#F59E0B] text-white rounded-full font-semibold hover:bg-[#d97706] transition-colors shadow-md hover:shadow-lg mb-4">
              S'inscrire
            </button>
            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-blue-100">
              © 2026 Vox Echo Campus. Tous droits réservés.
            </p>

            <div className="flex items-center space-x-6 text-sm text-blue-100">
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="hover:text-white transition-colors">
                À propos
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
