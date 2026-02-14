import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: "⚡",
    title: "IT Strategy & Consulting",
    description:
      "Comprehensive technology assessments and strategic planning to align IT with your business objectives.",
    bullets: [
      "Technology audits",
      "Roadmap development",
      "Vendor selection & management",
      "Budget optimization",
    ],
  },
  {
    icon: "🔒",
    title: "Cybersecurity Solutions",
    description:
      "Protect your business from threats with proactive security measures and compliance-ready frameworks.",
    bullets: [
      "Security assessments",
      "Firewall & endpoint protection",
      "Employee security training",
      "Incident response planning",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    description:
      "Design, migrate, and manage cloud environments built for reliability and performance.",
    bullets: [
      "Cloud migration & setup",
      "AWS / Azure / GCP",
      "Cost optimization",
      "Hybrid cloud solutions",
    ],
  },
  {
    icon: "🌐",
    title: "Network Management",
    description:
      "Reliable, high-performance networks designed for your specific business requirements.",
    bullets: [
      "Network design & deployment",
      "Wi-Fi optimization",
      "VPN & remote access",
      "Monitoring & maintenance",
    ],
  },
  {
    icon: "⚙️",
    title: "Workflow Automation",
    description:
      "Streamline operations by automating repetitive tasks and connecting your digital tools.",
    bullets: [
      "Process analysis",
      "Integration & API setup",
      "Custom scripts & bots",
      "Reporting automation",
    ],
  },
  {
    icon: "🛠️",
    title: "Tech Support & Troubleshooting",
    description:
      "Responsive, knowledgeable support to keep your systems running without interruption.",
    bullets: [
      "Remote & on-site support",
      "Hardware & software setup",
      "System maintenance",
      "Performance tuning",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-10 py-24 px-6">
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
