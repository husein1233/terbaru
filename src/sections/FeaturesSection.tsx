import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal } from "@/components/ScrollReveal";

const features = [
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" />
        <path d="M24 24l18-10" />
        <path d="M24 24V4" />
        <path d="M24 24L6 14" />
      </svg>
    ),
    title: "100% Handmade",
    description:
      "Setiap kain batik kami dibuat secara manual oleh pengrajin berpengalaman menggunakan teknik tradisional wax-resist dyeing.",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 4L4 14v20l20 10 20-10V14L24 4z" />
        <path d="M24 24l20-10" />
        <path d="M24 24V4" />
        <path d="M24 24L4 14" />
        <path d="M4 34l20 10" />
        <path d="M44 34L24 44" />
      </svg>
    ),
    title: "Kualitas Premium",
    description:
      "Bahan katun dan sutra pilihan dengan pewarna alami yang aman dan ramah lingkungan, tahan lama dan nyaman dipakai.",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="18" width="32" height="26" rx="4" />
        <path d="M16 18V12a8 8 0 0116 0v6" />
        <circle cx="24" cy="30" r="3" />
        <path d="M24 33v4" />
      </svg>
    ),
    title: "Pengiriman Aman",
    description:
      "Kami kirim ke seluruh Indonesia dengan packaging khusus yang melindungi kain batik Anda dari kerusakan selama perjalanan.",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-cream py-20 md:py-24" id="mengapa-kami">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="MENGAPA KAMI"
          title="Keunggulan Husein Batik"
          subtitle="Komitmen kami untuk melestarikan dan menghadirkan batik berkualitas tertinggi kepada Anda."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <motion.div
                className="text-center group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-medium text-lg text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
