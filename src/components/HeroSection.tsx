export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-glow" aria-hidden="true" />
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <p className="fade-up-1 font-mono text-xs uppercase tracking-[4px] text-accent mb-8">
          // IT Consulting &amp; Services
        </p>
        <h1 className="fade-up-2 text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          Technology that
          <br />
          works <span className="text-accent">for you.</span>
        </h1>
        <p className="fade-up-3 text-text-secondary text-lg leading-relaxed max-w-[580px] mx-auto mb-10">
          Practical, hands-on IT support for individuals and small businesses.
          From securing systems to automating workflows — clear guidance that
          saves time and money.
        </p>
        <div className="fade-up-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-accent text-primary font-semibold text-sm uppercase tracking-wide px-8 py-3 transition-all duration-300 hover:shadow-[0_0_40px_rgba(78,205,196,0.3)] hover:-translate-y-0.5"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="border border-border text-text-primary font-medium text-sm uppercase tracking-wide px-8 py-3 transition-all duration-300 hover:border-accent hover:text-accent"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
