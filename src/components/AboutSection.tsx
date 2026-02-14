import Image from "next/image";
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

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <SectionLabel text="About" />
        <SectionTitle>
          The person behind{" "}
          <span className="text-accent">the solutions.</span>
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 mt-12 items-start">
          {/* Photo */}
          <div className="relative w-[280px] h-[340px] mx-auto lg:mx-0">
            <div className="absolute inset-0 border border-border-accent translate-x-3 translate-y-3" />
            <Image
              src="/robert.jpg"
              alt="Robert Voroscak"
              width={280}
              height={340}
              className="relative object-cover w-[280px] h-[340px] border border-border"
              priority
            />
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-1">
              Robert Voroscak
            </h3>
            <span className="font-mono text-sm text-accent block mb-6">
              Founder &amp; IT Consultant
            </span>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                With over a decade of experience in IT infrastructure,
                cybersecurity, and digital transformation, I founded VoroscakIT
                to give individuals and small businesses access to
                enterprise-level tech expertise — without the enterprise price
                tag.
              </p>
              <p>
                I believe technology should empower, not overwhelm. My approach
                is straightforward: understand the problem, design a practical
                solution, and implement it with precision. No unnecessary
                complexity, no vendor lock-in — just results.
              </p>
              <p>
                When I&apos;m not helping clients optimize their tech stack,
                you&apos;ll find me staying current with the latest in cloud
                infrastructure, security frameworks, and automation tools.
              </p>
            </div>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.7rem] uppercase tracking-wide text-text-secondary border border-border px-3 py-1.5"
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
