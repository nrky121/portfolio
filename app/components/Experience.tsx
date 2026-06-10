const experience = [
  {
    company: "CheckingIn",
    role: "Product Owner / Product Manager",
    period: "Apr 2025 – Present",
    description:
      "B2B SaaS care coordination and workflow platform supporting intake, referral, facility matching, and treatment pathway management.",
    bullets: [
      "Led discovery and delivery for operational workflows across intake, referral, and onboarding using customer interviews and usage data to guide roadmap priorities.",
      "Partnered with engineering and design to prototype solutions using AI tools, reducing development rework by ~25% through earlier validation and clearer requirements.",
      "Improved onboarding and first-run workflows by removing low-value steps, improving trial-to-paid conversion.",
      "Managed backlog prioritization, sprint planning, stakeholder demos, and release execution across distributed teams.",
    ],
  },
  {
    company: "Provincial Health Services Authority",
    role: "Team Lead & Product Owner",
    period: "Apr 2022 – Mar 2025",
    description:
      "Enterprise digital health organization delivering clinical platforms and services across British Columbia.",
    bullets: [
      "Led product strategy and delivery for CareConnect, an enterprise care coordination and referral platform used by clinical and operational teams across BC.",
      "Translated complex operational workflows into prioritized product improvements that reduced manual coordination and duplicate data entry by 30%.",
      "Collaborated with engineering on integrations, release sequencing, and stakeholder alignment to improve delivery reliability across interconnected enterprise systems.",
      "Supported rollout planning, user adoption, and cross-functional coordination across clinical, operational, and technical stakeholder groups.",
    ],
  },
  {
    company: "Co.Lab",
    role: "Product Manager",
    period: "Jul 2023 – Apr 2024",
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
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-medium tracking-widest uppercase text-[#3B5BDB] mb-4 block">
          Experience
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-[#111111] mb-12">
          Where I&apos;ve worked.
        </h2>

        <div className="space-y-10">
          {experience.map((job, i) => (
            <div key={i} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
              <div>
                <p className="text-xs text-[#6B7280] font-medium mb-1">{job.period}</p>
                <p className="text-sm font-semibold text-[#111111]">{job.company}</p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#111111] mb-1">{job.role}</h3>
                <p className="text-sm text-[#6B7280] mb-4">{job.description}</p>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-sm text-[#374151] leading-relaxed">
                      <span className="text-[#3B5BDB] mt-1.5 flex-shrink-0">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                          <circle cx="3" cy="3" r="3"/>
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

        <div className="mt-16 pt-10 border-t border-[#E5E7EB]">
          <h3 className="text-sm font-semibold text-[#111111] uppercase tracking-wider mb-4">
            Education
          </h3>
          <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
            <p className="text-xs text-[#6B7280] font-medium">2017 – 2020</p>
            <div>
              <p className="text-sm font-semibold text-[#111111]">University of British Columbia</p>
              <p className="text-sm text-[#6B7280]">Bachelor of Arts, Economics — Vancouver School of Economics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
