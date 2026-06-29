import AnimateIn from "./AnimateIn";

const skills = [
  "Roadmap Development",
  "Vendor Management",
  "Stakeholder Intake",
  "Release Readiness",
  "SaaS Configuration",
  "Business Requirements",
  "Training and Documentation",
  "API Literacy",
];

export default function About() {
  return (
    <section id="about" className="pt-16 pb-10 px-6 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#4F6EF7]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#4F6EF7]">
            About
          </span>
        </div>

        <AnimateIn delay={0}>
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] mb-6 leading-tight">
              Product Manager with a bias for clarity and delivery.
            </h2>
            <div className="space-y-4 text-[#475569] leading-relaxed">
              <p>
                I am a Product Manager with experience building product roadmaps and delivery strategies from scratch at the startup level and driving structured delivery on enterprise platforms.
              </p>
              <p>
                At CheckingIn I built the full product roadmap and PM process from zero across a multi-module platform, establishing prioritization frameworks, stakeholder intake, and documentation standards where none previously existed. At PHSA I drove product delivery for CareConnect, BC&apos;s provincial clinical information system, managing vendor relationships, EMR integrations, SaaS configurations, and cross-system delivery at scale.
              </p>
              <p>
                Outside of work, I build and ship AI-powered tools to stay close to the full product lifecycle, from customer discovery through deployment.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-[#334155] bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-2 rounded-lg hover:border-[#4F6EF7] hover:text-[#4F6EF7] hover:bg-[#EEF2FF] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mr-1">Tools:</span>
              {["Jira", "Confluence", "Figma", "Miro", "Microsoft Office Suite"].map((tool) => (
                <span
                  key={tool}
                  className="text-sm text-[#334155] bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-2 rounded-lg hover:border-[#4F6EF7] hover:text-[#4F6EF7] hover:bg-[#EEF2FF] transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
