const skills = [
  "Product Discovery",
  "Backlog Management",
  "CRM & Data Models",
  "Integration Workflows",
  "API Literacy",
  "Acceptance Criteria",
  "Hands-On Prototyping",
  "Enterprise SaaS",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#4F6EF7]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#4F6EF7]">
            About
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] mb-6 leading-tight">
              Product Owner with a bias for clarity and delivery.
            </h2>
            <div className="space-y-4 text-[#475569] leading-relaxed">
              <p>
                I&apos;m a Product Owner with experience across enterprise health platforms and B2B SaaS, specializing in turning complex system and data workflows into clear, shippable product decisions.
              </p>
              <p>
                At PHSA I led delivery for CareConnect, BC&apos;s provincial clinical information system. The platform integrates health records across all BC health authorities, requiring precise stakeholder alignment, data integrity standards, and reliable cross-system delivery at scale.
              </p>
              <p>
                At CheckingIn I own the full product lifecycle across a multi-module web and mobile platform. I drive roadmap priorities using customer interviews and usage data, and build prototypes to validate solutions before engineering handoff.
              </p>
              <p>
                I&apos;m comfortable in technical conversations, fluent in agile delivery, and focused on data quality and integration reliability as the foundation for everything else.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
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
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
            <h3 className="text-xs font-semibold text-[#0F172A] mb-6 uppercase tracking-widest">
              Skills &amp; Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
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
        </div>
      </div>
    </section>
  );
}
