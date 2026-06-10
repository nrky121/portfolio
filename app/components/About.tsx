const skills = [
  "Product Discovery",
  "Backlog Management",
  "Sprint Planning",
  "Stakeholder Alignment",
  "Data-Driven Prioritization",
  "Agile / Scrum",
  "Acceptance Criteria",
  "CRM & Data Models",
  "AI-Assisted Prototyping",
  "User Research",
  "Enterprise SaaS",
  "Cross-Functional Delivery",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-medium tracking-widest uppercase text-[#3B5BDB] mb-4 block">
          About
        </span>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#111111] mb-6">
              Product Owner with a bias for clarity and delivery.
            </h2>
            <div className="space-y-4 text-[#374151] leading-relaxed">
              <p>
                I&apos;m a Product Owner with experience across enterprise health platforms and B2B SaaS, specializing in turning operational complexity into clear, shippable product decisions.
              </p>
              <p>
                At PHSA I led delivery for CareConnect, an enterprise care coordination platform used across British Columbia — working across clinical, technical, and operational stakeholders to reduce manual data entry and improve system reliability.
              </p>
              <p>
                At CheckingIn I drive roadmap priorities using customer interviews and usage data, and partner with engineering to prototype faster using AI tools.
              </p>
              <p>
                I&apos;m comfortable in technical conversations, fluent in agile delivery, and obsessed with data quality as a foundation for everything else.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3B5BDB] bg-[#EEF2FF] px-3 py-1.5 rounded-full">
                Certified Scrum Product Owner
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B7280] bg-[#F3F4F6] px-3 py-1.5 rounded-full">
                Business Analysis Essentials
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B7280] bg-[#F3F4F6] px-3 py-1.5 rounded-full">
                BA (Econ), UBC
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#111111] mb-4 uppercase tracking-wider">
              Skills &amp; Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-[#374151] bg-white border border-[#E5E7EB] px-3 py-1.5 rounded-lg"
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
