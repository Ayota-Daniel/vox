import { motion } from 'framer-motion';
import service1 from "@/assets/images/service2.png";
import service2 from "@/assets/images/two.webp";

export default function FeaturedSchools() {
  const schools = [
    {
      name: 'Université de Pretoria',
      country: 'Afrique du Sud',
      flag: '🇿🇦',
    },
    {
      name: 'HEM Business School',
      country: 'Maroc',
      flag: '🇲🇦',
    },
    {
      name: 'Université Cheikh Anta Diop',
      country: 'Sénégal',
      flag: '🇸🇳',
    },
    {
      name: 'Strathmore University',
      country: 'Kenya',
      flag: '🇰🇪',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="inline-block px-4 py-1 bg-[#1E5FAF] bg-opacity-10 text-[#1E5FAF] rounded-full text-sm font-semibold mb-4">
              Excellence Académique
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">
              Écoles & Universités en Vedette
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <img
                src={service2}
                alt="Campus moderne"
                className="rounded-xl h-48 object-cover w-full shadow-md hover:shadow-xl transition-shadow"
              />
              <img
                src={service1}
                alt="Bibliothèque universitaire"
                className="rounded-xl h-48 object-cover w-full shadow-md hover:shadow-xl transition-shadow"
              />
            </div>

            <div className="space-y-4 mb-8">
              {schools.map((school, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:translate-x-2 cursor-pointer"
                >
                  <div className="text-3xl">{school.flag}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#1F2937]">{school.name}</h4>
                    <p className="text-sm text-[#6B7280]">{school.country}</p>
                  </div>
                  <div className="w-2 h-2 bg-[#1E7F5C] rounded-full"></div>
                </motion.div>
              ))}
            </div>

            <button className="px-8 py-3 bg-[#1E5FAF] text-white rounded-full font-semibold hover:bg-[#1a4d8f] transition-colors shadow-md hover:shadow-lg">
              Voir Plus d'Écoles
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
