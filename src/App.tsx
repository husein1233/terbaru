import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { HeroSection } from "@/sections/HeroSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { ProductsSection } from "@/sections/ProductsSection";
import { AboutSection } from "@/sections/AboutSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { CTASection } from "@/sections/CTASection";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
