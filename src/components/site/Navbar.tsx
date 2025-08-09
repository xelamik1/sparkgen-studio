import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md" style={{ backgroundImage: 'var(--gradient-hero)' }} aria-hidden />
          <span className="font-semibold">IdeaPulse AI</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">Login</Button>
          <Button variant="hero" size="sm">Try Free</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;