import AnimateIn from "./AnimateIn";

const experience = [
  {
    company: "CheckingIn",
    role: "Product Manager",
    period: "Apr 2025 – Present",
    current: true,
    description:
      "B2B SaaS care coordination and workflow platform supporting intake, referral, facility matching, and treatment pathway management.",
    bullets: [
      "Built the product roadmap from scratch across a multi-module platform with no prior roadmap structure in place, establishing the first prioritization framework, stakeholder intake process, and release planning cadence from the ground up.",
      "Established the first formal PM process for the team including PRDs, user stories, acceptance criteria, and definition of done, bringing documentation discipline and product management structure where none previously existed.",
      "Led discovery through customer interviews and usage data, translating ambiguous business needs into clear requirements and solution recommendations for engineering handoff.",
      "Managed release readiness, QA, and sprint execution across distributed teams, reducing development rework through earlier validation and tighter scope definition.",
      "Built prototypes directly to validate solutions with stakeholders before engineering handoff, improving alignment and reducing ambiguity on complex workflows.",
    ],
  },
  {
    company: "Provincial Health Services Authority",
    role: "Team Lead & Product Manager / Business Analyst",
    period: "Apr 2022 – Mar 2025",
    current: false,
    description:
      "Enterprise digital health organization delivering clinical platforms and services across British Columbia.",
    bullets: [
      "Drove product delivery and roadmap contributions for CareConnect, BC's provincial clinical information system, aligning clinical, operational, and technical stakeholders across all health authorities on priorities, constraints, and release timelines.",
      "Managed vendor and third party relationships for EMR integrations, owning feature prioritization, SLA oversight, incident management, and contract coordination to ensure platform reliability and alignment with clinical business needs.",
      "Configured and maintained CareConnect as a provincial SaaS platform, managing system updates, release readiness, QA testing, and configuration changes across interconnected health authority systems.",
      "Conducted business analysis across complex clinical workflows, developing requirements documentation, SOPs, training materials, and testing artifacts to support cross-system integrations and onboard clinical users province-wide.",
      "Coordinated rollout planning, user adoption, and cross-functional stakeholder alignment across clinical, operational, and technical groups, reducing manual coordination and duplicate data entry by 30 percent.",
    ],
  },
  {
    company: "Co.Lab",
    role: "Product Manager",
    period: "Jul 2023 – Apr 2024",
    subtitle: "Concurrent with PHSA role",
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
    <section id="experience" className="py-16 px-6 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#4F6EF7]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#4F6EF7]">
            Experience
          </span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] mb-8">
          Where I&apos;ve worked.
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-3 bottom-3 w-px bg-[#E2E8F0] hidden md:block ml-[11px]" />

          <div className="space-y-5">
            {experience.map((job, i) => (
              <AnimateIn key={i} delay={i * 120}>
              <div className="md:pl-10 relative">
                {/* Timeline dot */}
                <div className={`absolute left-0 top-3 w-[23px] h-[23px] rounded-full border-2 hidden md:flex items-center justify-center ${
                  job.current
                    ? "border-[#4F6EF7] bg-[#4F6EF7]"
                    : "border-[#CBD5E1] bg-white"
                }`}>
                  {job.current && (
                    <>
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span className="absolute inline-flex w-full h-full rounded-full bg-[#4F6EF7] opacity-40 animate-ping" />
                    </>
                  )}
                </div>

                <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 hover:border-[#C7D2FE] hover:shadow-md transition-all duration-200">
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
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs font-medium text-[#94A3B8] bg-[#F1F5F9] border border-[#E2E8F0] px-3 py-1.5 rounded-full whitespace-nowrap">
                        {job.period}
                      </span>
                      {"subtitle" in job && job.subtitle && (
                        <span className="text-xs text-[#94A3B8] italic">{job.subtitle}</span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-[#64748B] mb-3 leading-relaxed">{job.description}</p>

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
              </AnimateIn>
            ))}
          </div>
        </div>

        <AnimateIn delay={experience.length * 120}>
        <div className="mt-8 bg-white border border-[#E2E8F0] rounded-2xl p-5">
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
        </AnimateIn>
      </div>
    </section>
  );
}
