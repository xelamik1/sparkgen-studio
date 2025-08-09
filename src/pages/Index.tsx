import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Features from "@/components/site/Features";
import SectionSplit from "@/components/site/SectionSplit";
import Footer from "@/components/site/Footer";
import heroImage from "@/assets/hero-ai-content.jpg";

const Index = () => {
  const softwareLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "IdeaPulse AI",
    applicationCategory: "BusinessApplication",
    description: "AI platform for content analysis and idea generation.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "/"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SectionSplit
          id="how"
          eyebrow="Generate High-Performing Content"
          title="Boost engagement by up to 10x"
          description="Create conversion-optimized ideas, headlines and outlines for any channel. Get instant, on-brand suggestions and evidence-based improvements."
          bullets={[
            "Insight-led ideas in seconds",
            "Actionable recommendations before you publish",
            "Customizable outputs for every platform",
          ]}
          image={heroImage}
        />
        <SectionSplit
          id="pricing"
          reverse
          eyebrow="Perfect for Teams"
          title="From brief to ideas to drafts in seconds"
          description="Turn a simple brief into ready-to-edit copy and content variations. Keep brand voice consistent while exploring new angles."
          bullets={["Brand voice guardrails", "Competitor-aware ideation", "Export to your toolchain"]}
          image={heroImage}
        />
      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }} />
    </div>
  );
};

export default Index;