import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <img
          src="/images/hero-bg.jpg"
          alt="Proses pembuatan batik tradisional"
          className="w-full h-[130%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-[700px]">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] mb-4 opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          SINCE 2010
        </motion.p>

        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          Warisan Batik
          <br />
          Indonesia
        </motion.h1>

        <motion.p
          className="text-base md:text-lg opacity-90 max-w-[560px] mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Koleksi batik premium hasil tangan pengrajin terbaik Nusantara. Setiap
          motif menceritakan warisan budaya yang tak ternilai.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="#produk"
            className="bg-gold hover:bg-gold-hover text-white font-medium px-6 py-3 rounded-sm transition-colors duration-200"
          >
            Jelajahi Koleksi
          </a>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Husein%20Batik"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white hover:bg-white hover:text-text-primary font-medium px-6 py-3 rounded-sm transition-all duration-200"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </div>

      {/* Scroll Chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a href="#mengapa-kami" className="text-white/70 hover:text-white">
          <ChevronDown className="w-6 h-6 animate-bounce-chevron" />
        </a>
      </motion.div>
    </section>
  );
}
