const experience = [
  {
    company: "CheckingIn",
    role: "Product Owner / Product Manager",
    period: "Apr 2025 – Present",
    current: true,
    description:
      "B2B SaaS care coordination and workflow platform supporting intake, referral, facility matching, and treatment pathway management.",
    bullets: [
      "Led discovery and delivery for operational workflows across intake, referral, and onboarding using customer interviews and usage data to guide roadmap priorities.",
      "Built prototypes directly to validate solutions with users before engineering handoff, reducing development rework by ~25% through earlier validation and clearer requirements.",
      "Improved onboarding and first-run workflows by removing low-value steps, improving trial-to-paid conversion.",
      "Managed backlog prioritization, sprint planning, stakeholder demos, and release execution across distributed teams.",
    ],
  },
  {
    company: "Provincial Health Services Authority",
    role: "Team Lead & Product Owner",
    period: "Apr 2022 – Mar 2025",
    current: false,
    description:
      "PHSA delivers enterprise digital health platforms across British Columbia, including CareConnect, the province's clinical information system.",
    bullets: [
      "Led product strategy and delivery for CareConnect, BC's provincial clinical information system giving clinicians across all health authorities a single, secure view of patient health records.",
      "Translated complex clinical and operational workflows into prioritized product improvements, reducing manual coordination and duplicate data entry by 30%.",
      "Collaborated with engineering on health authority system integrations, release sequencing, and stakeholder alignment to improve delivery reliability across interconnected provincial systems.",
      "Coordinated rollout planning, user adoption, and cross-functional alignment across clinical, operational, and technical stakeholder groups province-wide.",
    ],
  },
  {
    company: "Co.Lab",
    role: "Product Manager",
    period: "Jul 2023 – Apr 2024",
    current: false,
    description:
      "Early-stage product accelerator building SaaS and mobile products through collaborative product development.",
    bullets: [
      "Owned backlog refinement, sprint planning, and acceptance criteria for early-stage SaaS and mobile products.",
      "Supported user acceptance testing and release readiness, reducing post-release defects by 20%.",
      "Improved sprint throughput and delivery consistency by 20% through better scope definition and sequencing.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#4F6EF7]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#4F6EF7]">
            Experience
          </span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] mb-12">
          Where I&apos;ve worked.
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-3 bottom-3 w-px bg-[#E2E8F0] hidden md:block ml-[11px]" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <div key={i} className="md:pl-10 relative">
                {/* Timeline dot */}
                <div className={`absolute left-0 top-3 w-[23px] h-[23px] rounded-full border-2 hidden md:flex items-center justify-center ${
                  job.current
                    ? "border-[#4F6EF7] bg-[#4F6EF7]"
                    : "border-[#CBD5E1] bg-white"
                }`}>
                  {job.current && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>

                <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 hover:border-[#C7D2FE] hover:shadow-md transition-all duration-200">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-bold text-[#0F172A]">{job.role}</h3>
                        {job.current && (
                          <span className="text-xs font-semibold text-[#059669] bg-[#D1FAE5] border border-[#A7F3D0] px-2.5 py-1 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[#4F6EF7] font-semibold text-sm">{job.company}</p>
                    </div>
                    <span className="text-xs font-medium text-[#94A3B8] bg-[#F1F5F9] border border-[#E2E8F0] px-3 py-1.5 rounded-full whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  <p className="text-sm text-[#64748B] mb-5 leading-relaxed">{job.description}</p>

                  <ul className="space-y-2.5">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[#475569] leading-relaxed">
                        <span className="text-[#4F6EF7] mt-[5px] flex-shrink-0">
                          <svg width="7" height="7" viewBox="0 0 7 7" fill="currentColor">
                            <circle cx="3.5" cy="3.5" r="3.5"/>
                          </svg>
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white border border-[#E2E8F0] rounded-2xl p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-[#EEF2FF] border border-[#C7D2FE] rounded-lg flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L8.5 5H13L9.5 7.5L11 11.5L7 9L3 11.5L4.5 7.5L1 5H5.5L7 1Z" fill="#4F6EF7"/>
              </svg>
            </div>
            <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-widest">
              Education
            </h3>
          </div>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-bold text-[#0F172A]">University of British Columbia</p>
              <p className="text-sm text-[#64748B] mt-1">Bachelor of Arts, Economics · Vancouver School of Economics</p>
            </div>
            <span className="text-xs font-medium text-[#94A3B8] bg-[#F1F5F9] border border-[#E2E8F0] px-3 py-1.5 rounded-full">
              2017 – 2020
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
