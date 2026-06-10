"use client";

import { useState } from "react";

const projects = [
  {
    id: "crm",
    label: "Side Project",
    title: "Simple CRM",
    tagline: "Built a CRM from scratch to understand the problem Riva solves at scale.",
    tech: ["Next.js", "Prisma", "Supabase", "TypeScript"],
    summary:
      "Sales and ops teams lose context when contact history, follow-ups, and relationship data aren't captured reliably — the same data trust problem Riva's customers face at enterprise scale.",
    sections: [
      {
        heading: "The Problem",
        body: "When relationship data lives across spreadsheets, email threads, and disconnected tools, it goes stale fast. Follow-ups are missed, deals fall through cracks, and every new team member starts from zero. I wanted to understand this problem space from the inside — not just as a PM describing it, but as someone who had to model it, build it, and ship it.",
      },
      {
        heading: "What I Built",
        body: "A full-stack CRM with contacts linked to companies, activity feeds, task management, and user authentication with row-level permissions. Built with Next.js, Prisma ORM, and Supabase. Every feature was driven by a real workflow question: what does a rep actually need to track a relationship over time?",
      },
      {
        heading: "Key Decisions",
        body: "I enforced data integrity at the schema layer — no orphaned records, no nullable fields where data should always exist. I designed permission boundaries early so each user only sees their own data, which mirrors the access control complexity Riva manages across enterprise tenants. Keeping the model strict meant the UI could stay simple.",
      },
      {
        heading: "What I Learned",
        body: "When the data model is clean, every downstream workflow is easier to build and easier to use. When it's not, every screen becomes a workaround. This is exactly the tradeoff Riva manages — clean, trusted activity data as the foundation for everything else. Building from scratch gave me ground-level understanding of where data quality breaks down and why syncing across systems is hard.",
      },
      {
        heading: "Connection to Riva",
        body: "Riva's core value prop is that CRM data should be trusted and automatically captured across email, calendar, and CRM systems. I built the thing Riva's customers use, which means I understand the problem space — not just the surface. I know what breaks when data is inconsistent, and I know what it looks like when it works.",
      },
    ],
  },
  {
    id: "careconnect",
    label: "PHSA",
    title: "CareConnect",
    tagline: "Enterprise care coordination platform serving clinical teams across British Columbia.",
    tech: ["Enterprise SaaS", "Agile", "Stakeholder Management", "Integrations"],
    summary:
      "Led product strategy and delivery for a care coordination and referral platform used by clinical and operational teams province-wide, reducing manual coordination by 30%.",
    sections: [
      {
        heading: "The Problem",
        body: "Clinical teams were spending significant time on manual coordination — phone calls, duplicate data entry, and fragmented referral workflows across disconnected systems. The platform needed to become the reliable backbone for care transitions across BC.",
      },
      {
        heading: "What I Did",
        body: "Led product strategy and delivery for CareConnect, translating complex operational workflows into prioritized product improvements. Collaborated with engineering on integrations and release sequencing while managing alignment across clinical, operational, and technical stakeholder groups.",
      },
      {
        heading: "Outcomes",
        body: "Reduced manual coordination and duplicate data entry by 30%. Improved delivery reliability across interconnected enterprise systems. Supported rollout and adoption across a diverse stakeholder base with high compliance and operational stakes.",
      },
      {
        heading: "Why It Matters",
        body: "Enterprise health platforms and enterprise revenue platforms share the same core challenge: complex, high-stakes workflows where data quality and system reliability directly affect outcomes. The lessons from CareConnect — stakeholder alignment, integration sequencing, data trust — translate directly to what Riva builds.",
      },
    ],
  },
  {
    id: "checkingin",
    label: "CheckingIn",
    title: "Intake & Onboarding Workflows",
    tagline: "Redesigned first-run experience and intake flows for a B2B SaaS care coordination platform.",
    tech: ["B2B SaaS", "User Research", "AI Prototyping", "Conversion Optimization"],
    summary:
      "Drove roadmap priorities using customer interviews and usage data. Partnered with engineering to prototype with AI tools, reducing rework by 25% and improving trial-to-paid conversion.",
    sections: [
      {
        heading: "The Problem",
        body: "Organizations trialing the platform were hitting friction early — onboarding steps that didn't map to how their teams actually worked, and intake workflows with unnecessary steps that slowed adoption. Drop-off was happening before users reached the core value.",
      },
      {
        heading: "What I Did",
        body: "Led discovery using customer interviews and usage data to identify where friction was highest. Partnered with engineering and design to prototype solutions using AI tools, enabling earlier validation and clearer requirements before full development began.",
      },
      {
        heading: "Outcomes",
        body: "Reduced development rework by approximately 25% through earlier validation cycles. Improved onboarding and first-run workflows by removing low-value steps, helping organizations adopt faster and improving trial-to-paid conversion.",
      },
      {
        heading: "AI-Assisted Product Development",
        body: "Using AI tools in the prototyping phase wasn't a shortcut — it was a forcing function for better requirements. When you can show a working prototype early, stakeholders give more useful feedback and engineering has clearer scope. This approach changed how I think about the discovery-to-delivery handoff.",
      },
    ],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#4F6EF7]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#4F6EF7]">
            Projects &amp; Work
          </span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] mb-3">
          What I&apos;ve built and shipped.
        </h2>
        <p className="text-[#64748B] mb-12 text-lg">
          Click any project to read the full case study.
        </p>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                expanded === project.id
                  ? "border-[#4F6EF7] shadow-lg shadow-[#4F6EF7]/10"
                  : "border-[#E2E8F0] hover:border-[#C7D2FE] hover:shadow-md"
              }`}
            >
              <button
                onClick={() =>
                  setExpanded(expanded === project.id ? null : project.id)
                }
                className="w-full text-left p-7 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        index === 0
                          ? "text-[#4F6EF7] bg-[#EEF2FF] border border-[#C7D2FE]"
                          : "text-[#64748B] bg-[#F1F5F9] border border-[#E2E8F0]"
                      }`}>
                        {project.label}
                      </span>
                      {index === 0 && (
                        <span className="text-xs font-semibold text-[#059669] bg-[#D1FAE5] border border-[#A7F3D0] px-3 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{project.tagline}</p>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
                        expanded === project.id
                          ? "border-[#4F6EF7] bg-[#4F6EF7] text-white rotate-180"
                          : "border-[#E2E8F0] text-[#94A3B8]"
                      }`}
                    >
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path
                          d="M1 1l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium text-[#4F6EF7] bg-[#EEF2FF] px-3 py-1.5 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>

              {expanded === project.id && (
                <div className="border-t border-[#EEF2FF] px-7 py-8 bg-[#F8FAFC]">
                  <p className="text-[#1E293B] mb-10 text-base leading-relaxed font-medium border-l-4 border-[#4F6EF7] pl-4 bg-[#EEF2FF]/50 py-3 pr-4 rounded-r-xl">
                    {project.summary}
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    {project.sections.map((section) => (
                      <div key={section.heading} className="bg-white border border-[#E2E8F0] rounded-xl p-5">
                        <h4 className="text-xs font-bold text-[#4F6EF7] mb-3 uppercase tracking-widest">
                          {section.heading}
                        </h4>
                        <p className="text-[#475569] leading-relaxed text-sm">
                          {section.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
