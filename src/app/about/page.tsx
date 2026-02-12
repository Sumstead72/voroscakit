import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

const tags = [
  "Network Architecture",
  "Cybersecurity",
  "Cloud / AWS / Azure",
  "Automation",
  "IT Strategy",
  "Systems Admin",
];

export default function AboutPage() {
  return (
    <section className="relative z-10 pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="About" />
        <SectionTitle>
          The person behind the{" "}
          <span className="text-accent">solutions.</span>
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 items-start">
          {/* Photo placeholder */}
          <div className="relative w-[280px] h-[340px] mx-auto lg:mx-0">
            <div className="absolute inset-0 border-2 border-border rounded-lg" />
            <div className="absolute inset-0 border-2 border-accent/30 rounded-lg translate-x-3 translate-y-3" />
            <div className="absolute inset-0 bg-card rounded-lg flex items-center justify-center">
              <span className="text-text-muted text-sm font-mono">Photo</span>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-1">
              Robert Voroscak
            </h3>
            <p className="font-mono text-sm text-accent mb-6">
              Founder &amp; IT Consultant
            </p>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                With over a decade of experience in IT infrastructure,
                cybersecurity, and cloud solutions, I&apos;ve built my career on
                one simple principle: technology should make your life easier,
                not harder.
              </p>
              <p>
                I started VoroscakIT to bring enterprise-level IT expertise to
                individuals and small businesses who deserve the same quality of
                service without the enterprise price tag. Every client gets my
                direct attention — no ticket queues, no hand-offs.
              </p>
              <p>
                Whether you need a full network overhaul, help migrating to the
                cloud, or just someone to call when things break, I&apos;m here
                to help. I believe in straightforward communication, honest
                assessments, and solutions that actually fit your needs and
                budget.
              </p>
            </div>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.7rem] uppercase tracking-wide text-accent border border-border-accent px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
