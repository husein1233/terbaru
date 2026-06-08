import { ScrollReveal } from "./ScrollReveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionHeader({ label, title, subtitle, light = false }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <ScrollReveal>
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.1em] mb-4">
          {label}
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2
          className={`font-serif text-3xl md:text-[2.625rem] leading-tight ${
            light ? "text-white" : "text-text-primary"
          }`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p
            className={`mt-4 max-w-xl mx-auto text-base ${
              light ? "text-white/80" : "text-text-muted"
            }`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
