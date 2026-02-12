import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import StatBox from "@/components/StatBox";

const services = [
  {
    icon: "🔧",
    title: "IT Strategy & Consulting",
    description:
      "Align your technology with your business goals through expert guidance and planning.",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity Solutions",
    description:
      "Protect your data and systems with comprehensive security assessments and protection.",
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    description:
      "Migrate, manage, and optimize your cloud environment across AWS, Azure, and GCP.",
  },
  {
    icon: "🌐",
    title: "Network Management",
    description:
      "Design, deploy, and maintain reliable networks that keep your business connected.",
  },
  {
    icon: "⚡",
    title: "Workflow Automation",
    description:
      "Streamline repetitive tasks with custom scripts, integrations, and automated workflows.",
  },
  {
    icon: "💻",
    title: "Tech Support",
    description:
      "Fast, friendly troubleshooting and maintenance — remote or on-site.",
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
      <HeroSection />

      {/* Services Preview */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel text="What We Do" />
          <SectionTitle>
            Solutions tailored to{" "}
            <span className="text-accent">your needs.</span>
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="border border-border text-text-secondary font-semibold text-sm uppercase tracking-wide px-8 py-3 rounded-md transition-all duration-200 hover:border-border-accent hover:text-accent inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why VoroscakIT */}
      <section className="relative z-10 py-24 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel text="Why VoroscakIT" />
            <SectionTitle>
              IT support that&apos;s{" "}
              <span className="text-accent">personal.</span>
            </SectionTitle>
            <p className="text-text-secondary leading-relaxed mb-4">
              When you work with VoroscakIT, you&apos;re not getting a faceless
              help desk. You&apos;re getting a dedicated consultant who takes the
              time to understand your business, your goals, and your pain
              points.
            </p>
            <p className="text-text-secondary leading-relaxed">
              No jargon, no runaround, no unnecessary upsells. Just practical
              solutions that work — explained in plain English so you always
              know what&apos;s happening with your technology.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <StatBox key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to simplify your{" "}
            <span className="text-accent">tech?</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Let&apos;s talk about how VoroscakIT can help your business run
            smoother.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary font-semibold text-sm uppercase tracking-wide px-8 py-3 rounded-md transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
