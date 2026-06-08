const menuLinks = [
  { label: "Beranda", href: "#" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Galeri", href: "#produk" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

const categories = [
  { label: "Batik Pria", href: "#produk" },
  { label: "Batik Wanita", href: "#produk" },
  { label: "Aksesoris Batik", href: "#produk" },
];

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white" id="kontak">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo & Social */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
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
              <span className="font-serif text-lg font-semibold tracking-wide text-gold">
                HUSEIN
              </span>
            </a>
            <p className="text-white/70 text-sm mb-6">
              Batik Berkualitas, Warisan Indonesia
            </p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="#"
                className="text-white/50 hover:text-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                className="text-white/50 hover:text-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="#"
                className="text-white/50 hover:text-gold transition-colors duration-200"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                className="text-white/50 hover:text-gold transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Menu
            </h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Kategori Produk
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <a
                    href={cat.href}
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>+62 812-3456-7890</li>
              <li>info@huseinbatik.com</li>
              <li>Jl. Batik Indah No. 45, Pekalongan, Jawa Tengah</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; 2025 Husein Batik. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Crafted with love in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
