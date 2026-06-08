import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: string;
  delay?: number;
}

export function ProductCard({
  image,
  category,
  title,
  price,
  originalPrice,
  rating,
  reviewCount,
  delay = 0,
}: ProductCardProps) {
  return (
    <motion.div
      className="group bg-white rounded-lg shadow-card overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-gold text-white text-[11px] font-medium px-2 py-1 rounded-sm">
          {category}
        </span>
        {/* Discount Badge */}
        {originalPrice && (
          <span className="absolute top-3 right-3 bg-danger text-white text-[11px] font-bold px-2 py-1 rounded-sm">
            DISKON 20%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-sm text-text-primary mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold text-gold">{price}</span>
          {originalPrice && (
            <span className="text-sm text-text-muted line-through">
              {originalPrice}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < rating
                    ? "text-gold fill-gold"
                    : "text-border-light fill-transparent"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-text-muted">({reviewCount})</span>
        </div>
      </div>
    </motion.div>
  );
}
