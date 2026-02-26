import { motion } from 'framer-motion';
import service1 from "@/assets/images/service4.png";
import service2 from "@/assets/images/service5.png";
import service3 from "@/assets/images/service6.png";
import service4 from "@/assets/images/service7.png";


export default function SuccessStories() {
  return (
    <section className="py-16 md:py-20 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Scientifique africaine en laboratoire"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block px-4 py-1 bg-[#F59E0B] bg-opacity-10 text-[#F59E0B] rounded-full text-sm font-semibold mb-4 w-fit">
                Inspiration
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
                Success Stories
              </h2>
              <p className="text-[#6B7280] mb-6 leading-relaxed text-lg">
                Découvrez les parcours inspirants de diplômés africains qui brillent dans leurs domaines. De la recherche scientifique à l'entrepreneuriat, ces talents façonnent l'avenir du continent.
              </p>
              <button className="px-8 py-3 bg-[#F59E0B] text-white rounded-full font-semibold hover:bg-[#d97706] transition-colors shadow-md hover:shadow-lg w-fit">
                Lire les Témoignages
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-3 gap-4 mt-6"
        >
          <img
            src={service1}
            alt="Networking professionnel"
            className="rounded-xl h-32 object-cover w-full shadow-md hover:shadow-xl transition-shadow"
          />
          <img
            src={service2}
            alt="Business meeting"
            className="rounded-xl h-32 object-cover w-full shadow-md hover:shadow-xl transition-shadow"
          />
          <img
            src={service3}
            alt="Collaboration"
            className="rounded-xl h-32 object-cover w-full shadow-md hover:shadow-xl transition-shadow"
          />
        </motion.div>
      </div>
    </section>
  );
}
