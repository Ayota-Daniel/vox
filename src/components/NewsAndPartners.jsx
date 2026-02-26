import { motion } from 'framer-motion';
import service1 from "@/assets/images/service3.png";
import service2 from "@/assets/images/three.webp";


export default function NewsAndPartners() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="relative h-56">
              <img
                src={service1}
                alt="Étudiants africains en réunion"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white rounded-full text-sm font-semibold text-[#F59E0B]">
                Actualités
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-4">
                Les Métiers d'Avenir en Afrique
              </h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                Intelligence artificielle, énergies renouvelables, fintech... Découvrez les secteurs porteurs qui recrutent sur le continent.
              </p>
              <button className="px-6 py-3 bg-[#F59E0B] text-white rounded-full font-semibold hover:bg-[#d97706] transition-colors shadow-md hover:shadow-lg">
                Lire l'Article
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="relative h-56">
              <img
                src={service2}
                alt="Professionnel africain networking"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white rounded-full text-sm font-semibold text-[#1E5FAF]">
                Réseautage
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-4">
                Collaborer pour l'avenir
              </h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                Rejoignez notre réseau de partenaires engagés dans l'excellence académique et le développement des talents africains.
              </p>
              <button className="px-6 py-3 bg-[#1E5FAF] text-white rounded-full font-semibold hover:bg-[#1a4d8f] transition-colors shadow-md hover:shadow-lg">
                Nos Partenaires
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
