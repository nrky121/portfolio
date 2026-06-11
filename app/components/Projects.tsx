"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";

const projects = [
  {
    id: "crm",
    label: "Side Project",
    title: "Simple CRM",
    tagline: "Built a CRM from scratch to understand the problem Riva solves at scale.",
    tech: ["Next.js", "Prisma", "Supabase", "TypeScript"],
    summary:
      "Built a working CRM from scratch for a family member's small business, then realized it gave me ground-level understanding of the exact problem Riva solves at enterprise scale.",
    sections: [
      {
        heading: "The Problem",
        body: "My cousin runs a small business and could not justify paying for a full CRM tool. Contacts lived in a spreadsheet, follow-ups were tracked in a notes app, and tasks were forgotten entirely. I decided to build something lightweight they could actually use. Dashboard, contacts, companies, and a task manager with priorities and due dates. No bloat, just the core of what a small team needs to manage relationships.",
      },
      {
        heading: "What I Built",
        body: "A full-stack CRM with a pipeline dashboard, contacts linked to companies, tag-based segmentation, task management with priority levels, and user authentication with row-level permissions. Built with Next.js, Prisma ORM, and Supabase. Every feature was driven by a real workflow question: what does someone actually need to track a relationship and never miss a follow-up?",
      },
      {
        heading: "Key Decisions",
        body: "I enforced data integrity at the schema layer with no orphaned records and no nullable fields where data should always exist. I designed permission boundaries early so each user only sees their own data. Keeping the data model strict meant the UI could stay simple and the product actually usable for a non-technical user.",
      },
      {
        heading: "What I Learned",
        body: "When the data model is clean, every downstream workflow is easier to build and easier to use. When it is not, every screen becomes a workaround. Building this from scratch gave me ground-level understanding of where relationship data breaks down and why syncing it reliably across systems is genuinely hard.",
      },
      {
        heading: "Connection to Riva",
        body: "Riva's core value prop is that CRM data should be trusted and automatically captured across email, calendar, and CRM systems. I built a CRM to understand what that data looks like at the model level, how it breaks, and why clean data matters so much to the people using it. That gives me product intuition for Riva's problem space that goes beyond surface familiarity.",
      },
    ],
  },
  {
    id: "careconnect",
    label: "PHSA",
    title: "CareConnect",
    tagline: "BC's provincial clinical information system giving clinicians a single view of patient health records across all health authorities.",
    tech: ["Provincial Health Platform", "Enterprise Integrations", "Agile Delivery", "Stakeholder Management"],
    summary:
      "Led product strategy and delivery for CareConnect, BC's provincial clinical information system. Clinicians across all health authorities use it as their single, secure point of access to patient health data regardless of where in the province that care was delivered.",
    sections: [
      {
        heading: "The Problem",
        body: "Clinicians across BC health authorities had no single view of a patient's health records. Each health authority held its own data in disconnected systems, forcing clinicians to chase records across platforms during time-sensitive care decisions.",
      },
      {
        heading: "What I Did",
        body: "Led product strategy and delivery for CareConnect, BC's provincial clinical information system. Worked across clinical, operational, and technical stakeholder groups to translate complex workflows into prioritized product improvements and coordinated cross-system releases.",
      },
      {
        heading: "Key Decisions",
        body: "Prioritized data consistency and integration reliability over new feature velocity. Coordinated release sequencing carefully across interconnected health authority systems to avoid cascading failures. Reduced manual coordination overhead by 30% through clearer requirements and stakeholder alignment processes.",
      },
      {
        heading: "What I Learned",
        body: "Enterprise integration products live or die on trust. When data is inconsistent or a sync breaks, clinical workflows break with it. That gave me a ground-level understanding of why reliable data flow across systems is non-negotiable, which is directly relevant to how Riva operates at enterprise scale.",
      },
    ],
  },
  {
    id: "checkingin",
    label: "CheckingIn",
    title: "Intake and Onboarding Workflows",
    tagline: "Drove discovery and delivery across the mobile app and web platform at CheckingIn.",
    tech: ["Mobile App", "Web Platform", "User Research", "Prototyping", "Conversion Optimization"],
    summary:
      "CheckingIn is a mobile and web platform serving Indigenous communities, combining a culture app with a care navigation tool supporting detox, treatment, and aftercare pathways. I drove roadmap priorities using customer interviews and usage data, building prototypes directly to validate solutions before engineering handoff.",
    images: [
      { src: "/checkingin2.png", caption: "Treatment Intake & Facility Matching Workflow" },
      { src: "/checkingin1.png", caption: "Culture is Healing - Client-Facing Mobile App" },
    ],
    sections: [
      {
        heading: "The Product",
        body: "CheckingIn delivers two interconnected products: a culture app that supports language learning, teachings, and community connection, and a care navigation platform that guides members through intake, referral, treatment, and aftercare. Both ship across mobile and web, and the products are customized for each Indigenous nation.",
      },
      {
        heading: "The Problem",
        body: "Organizations trialing the platform were hitting friction early. Onboarding steps didn't map to how their teams actually worked, and intake workflows had unnecessary steps that slowed adoption. Drop-off was happening before users reached the core value of the product.",
      },
      {
        heading: "What I Did",
        body: "Led discovery and delivery for operational workflows across intake, referral, and onboarding. Used customer interviews and usage data to identify where friction was highest, then built prototypes directly to validate solutions before engineering got involved. Managed backlog, sprint planning, stakeholder demos, and release execution across a distributed team.",
      },
      {
        heading: "Hands-On Prototyping",
        body: "Building prototypes myself rather than describing requirements in documents changed the quality of feedback I got from users and stakeholders. When people can click through something real, they give specific, actionable input. It also gave engineering a much clearer picture of what done looked like before a line of production code was written, reducing rework by roughly 25%.",
      },
    ],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="pt-10 pb-16 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#4F6EF7]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#4F6EF7]">
            Projects &amp; Work
          </span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] mb-3">
          Selected Work
        </h2>
        <p className="text-[#64748B] mb-8 text-lg">
          Case studies from enterprise platforms and side projects.
        </p>

        <div className="space-y-3">
          {projects.map((project, index) => (
            <AnimateIn key={project.id} delay={index * 100}>
            <div
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
                  {project.id === "crm" && (
                    <div className="-mx-7 mb-10">
                      <img
                        src="/crm1.gif"
                        alt="Simple CRM walkthrough"
                        className="w-full rounded-xl"
                      />
                    </div>
                  )}
                  {"images" in project && project.images && (
                    <div className="-mx-7 grid grid-cols-1 md:grid-cols-2 gap-px mb-10">
                      {project.images.map((img) => (
                        <div key={img.src}>
                          <img
                            src={img.src}
                            alt={img.caption}
                            className="w-full min-h-[300px] object-contain bg-[#F1F5F9] border border-[#E2E8F0]"
                          />
                          <p className="mt-2 mb-4 text-xs text-[#94A3B8] text-center px-4">{img.caption}</p>
                        </div>
                      ))}
                    </div>
                  )}
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
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
