import React from "react";

interface Props {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  image: string;
  reverse?: boolean;
}

const SectionSplit: React.FC<Props> = ({ id, eyebrow, title, description, bullets = [], image, reverse }) => {
  return (
    <section id={id} className="py-14 md:py-20">
      <div className={`container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
        <div>
          {eyebrow && <p className="text-sm font-medium" style={{ color: 'hsl(var(--brand))' }}>{eyebrow}</p>}
          <h3 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">{title}</h3>
          <p className="mt-4 text-muted-foreground">{description}</p>
          {bullets.length > 0 && (
            <ul className="mt-5 space-y-2 text-sm">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundImage: 'var(--gradient-hero)' }} />
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="glass-card rounded-2xl p-2 md:p-3">
          <img src={image} alt="Illustration" className="w-full rounded-xl border border-border" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default SectionSplit;