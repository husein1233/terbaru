import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";

const navLinks = [
  { label: "Beranda", href: "#" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Galeri", href: "#produk" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  const scrolled = useScrolled(50);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-border-light/50 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gold"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className={`font-serif text-lg font-semibold tracking-wide transition-colors duration-300 ${
                scrolled ? "text-gold" : "text-white"
              }`}
            >
              HUSEIN
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gold ${
                  scrolled ? "text-text-primary" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Husein%20Batik"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-hover text-white text-sm font-medium px-5 py-2.5 rounded-sm transition-colors duration-200"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={scrolled ? "text-text-primary" : "text-white"} size={24} />
            ) : (
              <Menu className={scrolled ? "text-text-primary" : "text-white"} size={24} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-cream z-50 md:hidden shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="p-6 pt-20">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-text-primary font-medium py-2 border-b border-border-light hover:text-gold transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Husein%20Batik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold hover:bg-gold-hover text-white text-sm font-medium px-5 py-3 rounded-sm transition-colors duration-200 text-center mt-4"
                  >
                    Pesan Sekarang
                  </a>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
