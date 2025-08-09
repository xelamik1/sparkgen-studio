import { useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-content.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--spotlight-x", `${x}%`);
    el.style.setProperty("--spotlight-y", `${y}%`);
  };

  return (
    <section id="home" className="relative">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        className="spotlight"
      >
        <div className="container mx-auto px-4 pt-16 pb-8 md:pt-20 md:pb-14">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              The #1 AI for <span className="text-hero-gradient">content analysis</span> & idea generation
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Audit any content in seconds, uncover opportunities, and generate on-brand ideas that convert — all in one platform.
            </p>
            <div className="mt-7 flex items-center justify-center gap-3">
              <Button variant="hero" size="lg" aria-label="Try IdeaPulse for free">Try Free Now</Button>
              <Button variant="outline" size="lg" aria-label="Start with Google">Start Free with Google</Button>
            </div>
          </div>

          <div className="mt-10 md:mt-14">
            <div className="glass-card rounded-2xl p-2 md:p-3">
              <img
                src={heroImage}
                alt="AI content analysis dashboard with idea generator"
                className="w-full rounded-xl border border-border"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;