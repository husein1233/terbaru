import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

export function AboutSection() {
  return (
    <section className="bg-cream py-20 md:py-24" id="tentang">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/about-workshop.jpg"
                alt="Workshop batik tradisional"
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Text Content */}
          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-gold text-xs font-semibold uppercase tracking-[0.1em] mb-4">
                CERITA KAMI
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-serif text-3xl md:text-[2.625rem] leading-tight text-text-primary mb-6">
                Melestarikan Warisan Batik Indonesia
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-text-secondary leading-relaxed mb-4">
                Husein Batik didirikan pada tahun 2010 di Pekalongan, kota yang
                dikenal sebagai salah satu pusat batik terbaik di Indonesia. Kami
                berkomitmen untuk melestarikan seni batik tradisional sambil
                menghadirkan desain yang relevan dengan gaya modern.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-text-secondary leading-relaxed mb-8">
                Kolaborasi kami dengan pengrajin lokal memastikan bahwa setiap
                pembelian Anda turut mendukung ekonomi keluarga pengrajin batik
                dan melestarikan warisan budaya tak benda UNESCO ini.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <motion.a
                href="#tentang"
                className="inline-block border border-gold text-gold hover:bg-gold hover:text-white font-medium px-6 py-3 rounded-sm transition-colors duration-200"
                whileTap={{ scale: 0.98 }}
              >
                Pelajari Lebih Lanjut
              </motion.a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
