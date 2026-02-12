import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: "🔧",
    title: "IT Strategy & Consulting",
    description:
      "Align your technology investments with business objectives. We evaluate your current infrastructure, identify gaps, and build a roadmap to get you where you need to be.",
    bullets: [
      "Technology audits & assessments",
      "Roadmap development",
      "Vendor selection & management",
      "Budget optimization",
    ],
  },
  {
    icon: "🛡️",
    title: "Cybersecurity Solutions",
    description:
      "Protect your business from evolving threats with layered security strategies tailored to your risk profile and compliance requirements.",
    bullets: [
      "Security assessments & penetration testing",
      "Firewall & endpoint protection",
      "Employee security awareness training",
      "Incident response planning",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    description:
      "Move to the cloud with confidence. We handle migration, setup, and ongoing management across all major cloud platforms.",
    bullets: [
      "Cloud migration & setup",
      "AWS / Azure / GCP management",
      "Cost optimization & right-sizing",
      "Hybrid cloud architecture",
    ],
  },
  {
    icon: "🌐",
    title: "Network Management",
    description:
      "Build and maintain reliable, secure networks that keep your team connected and your data flowing — whether you're in-office, remote, or hybrid.",
    bullets: [
      "Network design & deployment",
      "Wi-Fi optimization",
      "VPN & remote access setup",
      "24/7 network monitoring",
    ],
  },
  {
    icon: "⚡",
    title: "Workflow Automation",
    description:
      "Eliminate manual busywork with smart automation. We analyze your processes and build integrations that save hours every week.",
    bullets: [
      "Process analysis & optimization",
      "Integration & API setup",
      "Custom scripts & bots",
      "Reporting automation",
    ],
  },
  {
    icon: "💻",
    title: "Tech Support & Troubleshooting",
    description:
      "When things break, you need fast answers. Get responsive, no-nonsense support from someone who actually understands your setup.",
    bullets: [
      "Remote & on-site support",
      "Hardware & software setup",
      "Preventive maintenance",
      "Performance tuning",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="relative z-10 pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="Services" />
        <SectionTitle>
          What I can do for{" "}
          <span className="text-accent">your business.</span>
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
