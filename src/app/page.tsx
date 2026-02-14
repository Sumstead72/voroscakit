import HeroSection from "@/components/HeroSection";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import StatBox from "@/components/StatBox";
import PageDivider from "@/components/PageDivider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const servicesPreview = [
  {
    icon: "⚡",
    title: "IT Strategy & Consulting",
    description:
      "Align your technology roadmap with business goals. Smart planning for sustainable growth.",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    description:
      "Protect your data and systems with proactive security measures and best practices.",
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    description:
      "Migrate, manage, and optimize your cloud environment for performance and cost efficiency.",
  },
  {
    icon: "🌐",
    title: "Network Management",
    description:
      "Design, deploy, and maintain reliable networks that keep your business connected.",
  },
  {
    icon: "⚙️",
    title: "Workflow Automation",
    description:
      "Eliminate repetitive tasks and streamline operations with intelligent automation solutions.",
  },
  {
    icon: "🛠️",
    title: "Tech Support",
    description:
      "Fast, reliable troubleshooting and ongoing support to keep everything running smoothly.",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Clients Served" },
  { value: "99%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Availability" },
];

export default function Home() {
  return (
    <>
      {/* ===== HOME ===== */}
      <HeroSection />

      {/* Services Preview */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="What We Do" />
          <SectionTitle>
            Solutions built for{" "}
            <span className="text-accent">your business.</span>
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {servicesPreview.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why VoroscakIT */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel text="Why VoroscakIT" />
              <SectionTitle>
                Real expertise.{" "}
                <span className="text-accent">Real results.</span>
              </SectionTitle>
              <p className="text-text-secondary text-[1.05rem] leading-relaxed mb-4">
                No jargon, no upselling — just practical solutions tailored to
                your needs. Whether you&apos;re a solo entrepreneur or a growing
                team, I bring the same level of care and expertise to every
                engagement.
              </p>
              <p className="text-text-secondary text-[1.05rem] leading-relaxed">
                I work with you, not around you. That means understanding your
                business first, then building the tech foundation to support it.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <StatBox key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative z-10 py-20 px-6 cta-gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Ready to simplify your tech?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Let&apos;s talk about how VoroscakIT can help your business thrive.
          </p>
          <a
            href="#contact"
            className="inline-block bg-accent text-primary font-semibold text-sm uppercase tracking-wide px-8 py-3 transition-all duration-300 hover:shadow-[0_0_40px_rgba(78,205,196,0.3)] hover:-translate-y-0.5"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <PageDivider label="Services" />
      <ServicesSection />

      {/* ===== ABOUT ===== */}
      <PageDivider label="About" />
      <AboutSection />

      {/* ===== CONTACT ===== */}
      <PageDivider label="Contact" />
      <ContactSection />
    </>
  );
}
