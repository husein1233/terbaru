import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Kualitas batiknya luar biasa! Saya sudah membeli 3 kemeja dan semuanya nyaman dipakai. Motifnya autentik dan warnanya tidak luntur.",
    name: "Ahmad Fauzi",
    location: "Jakarta",
  },
  {
    quote:
      "Pelayanan sangat ramah dan pengiriman cepat. Dress batik yang saya pesan pas di badan dan motifnya elegan. Recommended!",
    name: "Siti Rahayu",
    location: "Surabaya",
  },
  {
    quote:
      "Saya beli sebagai hadiah untuk orang tua dan mereka sangat suka. Packagingnya mewah dan batiknya terlihat premium.",
    name: "Budi Santoso",
    location: "Bandung",
  },
  {
    quote:
      "Pengalaman belanja online terbaik. Bisa konsultasi via WhatsApp untuk pilihan motif. Produk sesuai ekspektasi!",
    name: "Dewi Anggraini",
    location: "Yogyakarta",
  },
  {
    quote:
      "Batiknya bagus untuk acara formal maupun casual. Harga sepadan dengan kualitas. Pasti akan beli lagi!",
    name: "Rudi Hartono",
    location: "Semarang",
  },
  {
    quote:
      "Senang mendukung UMKM lokal yang melestarikan budaya. Batiknya original dan pengrajinnya berbakat.",
    name: "Maya Sari",
    location: "Bali",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(goNext, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, goNext]);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section
      className="bg-beige py-20 md:py-24 overflow-hidden"
      id="testimoni"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="APA KATA MEREKA"
          title="Testimoni Pelanggan"
          subtitle="Pengalaman nyata dari pelanggan setia Husein Batik."
        />

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-text-primary hover:text-gold transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-text-primary hover:text-gold transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="flex gap-6 justify-center">
            <AnimatePresence mode="popLayout">
              {visibleTestimonials.map((t, i) => (
                <motion.div
                  key={`${currentIndex}-${i}`}
                  className="bg-white rounded-lg p-6 border border-border-light flex-1 max-w-[360px]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg
                        key={j}
                        className="w-4 h-4 text-gold fill-gold"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-text-primary italic text-sm leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-medium text-text-primary text-sm">
                      {t.name}
                    </p>
                    <p className="text-text-muted text-xs">{t.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-gold w-6" : "bg-border-light"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#testimoni"
            className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all duration-200"
          >
            Lihat Semua Testimoni
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
