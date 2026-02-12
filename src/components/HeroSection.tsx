import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-glow" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="fade-up-1 font-mono text-xs uppercase tracking-[3px] text-accent mb-6">
          IT Consulting & Services
        </p>
        <h1 className="fade-up-2 text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          Technology that works{" "}
          <span className="text-accent">for you.</span>
        </h1>
        <p className="fade-up-3 text-text-secondary text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Practical IT support, cybersecurity, and cloud solutions tailored for
          individuals and small businesses. No jargon, no runaround — just
          technology that works.
        </p>
        <div className="fade-up-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-accent text-primary font-semibold text-sm uppercase tracking-wide px-8 py-3 rounded-md transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:-translate-y-0.5"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="border border-border text-text-secondary font-semibold text-sm uppercase tracking-wide px-8 py-3 rounded-md transition-all duration-200 hover:border-border-accent hover:text-accent"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
