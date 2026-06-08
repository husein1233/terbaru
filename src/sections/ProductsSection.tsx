import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/ProductCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

const products = [
  {
    image: "/images/product-1.jpg",
    category: "Batik Pria",
    title: "Kemeja Batik Pria Lengan Panjang",
    price: "Rp459.000",
    rating: 5,
    reviewCount: "28",
  },
  {
    image: "/images/product-2.jpg",
    category: "Batik Wanita",
    title: "Dress Batik Wanita Modern",
    price: "Rp529.000",
    rating: 5,
    reviewCount: "36",
  },
  {
    image: "/images/product-3.jpg",
    category: "Batik Pria",
    title: "Kemeja Batik Pria Lengan Pendek",
    price: "Rp399.000",
    originalPrice: "Rp499.000",
    rating: 5,
    reviewCount: "45",
  },
  {
    image: "/images/product-4.jpg",
    category: "Aksesoris",
    title: "Selendang Batik Sutra",
    price: "Rp289.000",
    rating: 5,
    reviewCount: "41",
  },
];

export function ProductsSection() {
  return (
    <section className="bg-beige py-20 md:py-24" id="produk">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="KOLEKSI TERBAIK"
          title="Produk Unggulan"
          subtitle="Pilihan batik terpopuler yang paling diminati pelanggan kami."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {products.map((product, index) => (
            <ProductCard key={product.title} {...product} delay={index * 0.1} />
          ))}
        </div>

        <ScrollReveal className="text-center">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Husein%20Batik,%20saya%20ingin%20melihat%20semua%20produk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all duration-200"
          >
            Lihat Semua Produk
            <ArrowRight className="w-4 h-4" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
