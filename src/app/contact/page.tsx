import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  { label: "Email", value: "robert@voroscakit.com" },
  { label: "Phone", value: "267-540-3247" },
  { label: "Based In", value: "Pennsylvania, USA" },
  { label: "Availability", value: "Mon – Fri, 9am – 6pm EST" },
];

export default function ContactPage() {
  return (
    <section className="relative z-10 pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="Contact" />
        <SectionTitle>
          Let&apos;s work <span className="text-accent">together.</span>
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((item) => (
              <div key={item.label}>
                <p className="font-mono text-xs uppercase tracking-[3px] text-accent mb-1">
                  {item.label}
                </p>
                <p className="text-text-primary text-lg">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
