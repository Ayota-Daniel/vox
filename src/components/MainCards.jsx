import { motion } from 'framer-motion';
import { BookOpen, Building2, Users, Award } from 'lucide-react';



export default function MainCards() {
  const cards = [
    {
      icon: BookOpen,
      title: 'Trouver une Formation',
      description: 'Explorez des centaines de programmes académiques adaptés à vos ambitions.',
      color: 'orange',
      bgColor: 'from-orange-50 to-orange-100',
      iconBg: 'bg-[#F59E0B]',
      textColor: 'text-[#F59E0B]',
    },
    {
      icon: Building2,
      title: "Grandes Écoles d'Afrique",
      description: 'Découvrez les institutions les plus prestigieuses du continent.',
      color: 'green',
      bgColor: 'from-green-50 to-green-100',
      iconBg: 'bg-[#1E7F5C]',
      textColor: 'text-[#1E7F5C]',
    },
    {
      icon: Users,
      title: 'Accompagnement & Orientation',
      description: 'Bénéficiez de conseils personnalisés pour votre parcours académique.',
      color: 'blue',
      bgColor: 'from-blue-50 to-blue-100',
      iconBg: 'bg-[#1E5FAF]',
      textColor: 'text-[#1E5FAF]',
      image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Award,
      title: 'Talents Africains à l\'Honneur',
      description: 'Inspirez-vous des success stories de diplômés qui brillent.',
      color: 'lightblue',
      bgColor: 'from-cyan-50 to-blue-50',
      iconBg: 'bg-[#1E5FAF]',
      textColor: 'text-[#1E5FAF]',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${card.bgColor} rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                {card.image ? (
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : null}

                <div className="relative z-10">
                  <div className={`w-14 h-14 ${card.iconBg} bg-opacity-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <card.icon className={`w-7 h-7 ${card.textColor}`} />
                  </div>

                  <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                    {card.title}
                  </h3>

                  <p className="text-[#6B7280] leading-relaxed mb-4">
                    {card.description}
                  </p>

                  <button className={`${card.textColor} font-semibold text-sm flex items-center space-x-1 group-hover:translate-x-2 transition-transform`}>
                    <span>En savoir plus</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
