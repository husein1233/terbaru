import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  delay?: number;
}

export function TestimonialCard({
  quote,
  name,
  location,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 border border-border-light flex-shrink-0 w-[320px] md:w-[360px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gold fill-gold" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-text-primary italic text-sm leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div>
        <p className="font-medium text-text-primary text-sm">{name}</p>
        <p className="text-text-muted text-xs">{location}</p>
      </div>
    </motion.div>
  );
}
