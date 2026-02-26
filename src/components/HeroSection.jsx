import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import heroImg from "@/assets/images/service1.png";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] mb-6 leading-tight">
              Explorer, S'orienter, Briller en Afrique !
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] mb-8 leading-relaxed">
              Découvrir les meilleures formations et grandes écoles du continent africain.
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-[#6B7280] mb-2">
                    Domaine d'Études
                  </label>
                  <select className="px-4 py-3 bg-[#F5F6F8] rounded-lg text-[#1F2937] font-medium focus:outline-none focus:ring-2 focus:ring-[#1E5FAF] transition-all">
                    <option>Sciences & Tech</option>
                    <option>Business & Management</option>
                    <option>Santé & Médecine</option>
                    <option>Arts & Médias</option>
                    <option>Ingénierie</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-[#6B7280] mb-2">
                    Pays
                  </label>
                  <select className="px-4 py-3 bg-[#F5F6F8] rounded-lg text-[#1F2937] font-medium focus:outline-none focus:ring-2 focus:ring-[#1E5FAF] transition-all">
                    <option>Tous les pays</option>
                    <option>Afrique du Sud</option>
                    <option>Maroc</option>
                    <option>Sénégal</option>
                    <option>Kenya</option>
                    <option>Nigeria</option>
                    <option>Ghana</option>
                    <option>Égypte</option>
                  </select>
                </div>

                <div className="flex flex-col justify-end">
                  <button className="px-6 py-3 bg-[#1E7F5C] text-white rounded-lg font-semibold hover:bg-[#166b4a] transition-colors shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                    <Search className="w-5 h-5" />
                    <span>Rechercher</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-14 h-14 bg-[#1E5FAF] bg-opacity-10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#1E5FAF]">50+</span>
                </div>
                <span className="text-sm text-[#6B7280] font-medium">Formations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-14 h-14 bg-[#1E7F5C] bg-opacity-10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#1E7F5C]">15+</span>
                </div>
                <span className="text-sm text-[#6B7280] font-medium">Écoles</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-14 h-14 bg-[#F59E0B] bg-opacity-10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#F59E0B]">30+</span>
                </div>
                <span className="text-sm text-[#6B7280] font-medium">Pays</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
               <img src={heroImg}    
                alt="Étudiante africaine souriante avec sac et tablette"
                className="w-full h-full object-cover" 
                />
              {/* <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Étudiante africaine souriante avec sac et tablette"
                className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-xs">
              <p className="text-sm text-[#6B7280] mb-2">
                Rejoignez des milliers d'étudiants africains
              </p>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#1E5FAF] border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-[#1E7F5C] border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-[#F59E0B] border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-[#6B7280] border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                  +5K
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
