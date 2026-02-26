import { useState } from 'react';
import { BookOpen, Search, Menu, X, ChevronDown } from 'lucide-react';
import logoImg from "@/assets/images/logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormationsOpen, setIsFormationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2">
            {/* <BookOpen className="w-8 h-8 text-[#1E5FAF]" /> */}
            <span className="text-xl md:text-2xl font-bold text-[#1F2937]">
              <img src={logoImg} alt="Logo" className="h-12 w-auto" />
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#1F2937] hover:text-[#1E5FAF] font-medium transition-colors">
              Accueil
            </a>
            <div className="relative">
              <button
                onMouseEnter={() => setIsFormationsOpen(true)}
                onMouseLeave={() => setIsFormationsOpen(false)}
                className="flex items-center space-x-1 text-[#1F2937] hover:text-[#1E5FAF] font-medium transition-colors"
              >
                <span>Formations</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isFormationsOpen && (
                <div
                  onMouseEnter={() => setIsFormationsOpen(true)}
                  onMouseLeave={() => setIsFormationsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2"
                >
                  <a href="#" className="block px-4 py-2 text-[#6B7280] hover:bg-[#F5F6F8] hover:text-[#1E5FAF] transition-colors">
                    Sciences & Tech
                  </a>
                  <a href="#" className="block px-4 py-2 text-[#6B7280] hover:bg-[#F5F6F8] hover:text-[#1E5FAF] transition-colors">
                    Business
                  </a>
                  <a href="#" className="block px-4 py-2 text-[#6B7280] hover:bg-[#F5F6F8] hover:text-[#1E5FAF] transition-colors">
                    Santé
                  </a>
                  <a href="#" className="block px-4 py-2 text-[#6B7280] hover:bg-[#F5F6F8] hover:text-[#1E5FAF] transition-colors">
                    Arts & Médias
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="text-[#1F2937] hover:text-[#1E5FAF] font-medium transition-colors">
              Grandes Écoles
            </a>
            <a href="#" className="text-[#1F2937] hover:text-[#1E5FAF] font-medium transition-colors">
              Talents
            </a>
            <a href="#" className="text-[#1F2937] hover:text-[#1E5FAF] font-medium transition-colors">
              Actualités
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-[#F5F6F8] rounded-full transition-colors">
              <Search className="w-5 h-5 text-[#6B7280]" />
            </button>
            <button className="px-6 py-2 bg-[#1E5FAF] text-white rounded-full font-semibold hover:bg-[#1a4d8f] transition-colors shadow-md hover:shadow-lg">
              Connexion
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-[#F5F6F8] rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1F2937]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1F2937]" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-[#1F2937] hover:text-[#1E5FAF] font-medium transition-colors">
                Accueil
              </a>
              <a href="#" className="text-[#1F2937] hover:text-[#1E5FAF] font-medium transition-colors">
                Formations
              </a>
              <a href="#" className="text-[#1F2937] hover:text-[#1E5FAF] font-medium transition-colors">
                Grandes Écoles
              </a>
              <a href="#" className="text-[#1F2937] hover:text-[#1E5FAF] font-medium transition-colors">
                Talents
              </a>
              <a href="#" className="text-[#1F2937] hover:text-[#1E5FAF] font-medium transition-colors">
                Actualités
              </a>
              <button className="px-6 py-2 bg-[#1E5FAF] text-white rounded-full font-semibold hover:bg-[#1a4d8f] transition-colors shadow-md w-full">
                Connexion
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
