import { Brain, Lightbulb, BarChart3, Megaphone, Sparkles, Target } from "lucide-react";

const features = [
  {
    title: "Content Audit AI",
    Icon: Brain,
    description: "Score readability, clarity, sentiment and brand fit in seconds across posts, pages and ads.",
  },
  {
    title: "Idea Generator",
    Icon: Lightbulb,
    description: "Generate fresh, on-brand content ideas tailored to your audience and channels.",
  },
  {
    title: "Headline/Hook Scorer",
    Icon: Megaphone,
    description: "Predict CTR with AI-driven scoring and get data-backed suggestions to improve hooks.",
  },
  {
    title: "Competitor Insights",
    Icon: BarChart3,
    description: "Analyze competitors’ messaging, cadence and performance to find whitespace.",
  },
  {
    title: "Brand Voice Guardrails",
    Icon: Sparkles,
    description: "Lock style, tone and taboo topics so every suggestion stays on-brand.",
  },
  {
    title: "A/B Test Planner",
    Icon: Target,
    description: "Quickly spin up variants and test plans powered by evidence, not guesswork.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Your all-in-one Marketing Powerhouse</h2>
          <p className="mt-3 text-muted-foreground">High-conversion assets, actionable insights and on-brand ideas — unified.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, Icon, description }) => (
            <article key={title} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ backgroundImage: 'var(--gradient-hero)' }} aria-hidden>
                  <Icon className="text-hero-foreground" />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;