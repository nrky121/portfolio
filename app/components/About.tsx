import AnimateIn from "./AnimateIn";

const skills = [
  "Product Discovery",
  "Backlog Management",
  "CRM & Data Models",
  "Integration Workflows",
  "API Literacy",
  "Acceptance Criteria",
  "Hands-On Prototyping",
  "Enterprise SaaS",
  "Roadmap Development",
  "Vendor Management",
  "Release Readiness",
  "Business Requirements",
  "SaaS Configuration",
  "Stakeholder Intake",
  "Training and Documentation",
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
                At CheckingIn I built the full product roadmap and PM process from zero across a multi-module platform, establishing prioritization frameworks, stakeholder intake, and documentation standards where none previously existed.
              </p>
              <p>
                At PHSA I drove product delivery for CareConnect, BC&apos;s provincial clinical information system, managing vendor relationships, EMR integrations, SaaS configurations, and cross-system delivery at scale.
              </p>
              <p>
                I hold a Certified Scrum Product Owner certification and a Business Analysis Essentials certificate, and I bring structure to teams that need stronger product management process, roadmap discipline, and documentation standards.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#4F6EF7] bg-[#EEF2FF] border border-[#C7D2FE] px-3 py-2 rounded-full">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M5 0L6.12 3.38H9.51L6.81 5.49L7.94 8.87L5 6.76L2.06 8.87L3.19 5.49L0.49 3.38H3.88L5 0Z"/></svg>
                Certified Scrum Product Owner
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#64748B] bg-white border border-[#E2E8F0] px-3 py-2 rounded-full">
                Business Analysis Essentials
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#64748B] bg-white border border-[#E2E8F0] px-3 py-2 rounded-full">
                BA (Econ), UBC
              </span>
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
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
