import AnimateIn from "./AnimateIn";

const certs = [
  {
    title: "Certified Scrum Product Owner",
    abbr: "CSPO",
    issuer: "Scrum Alliance",
    highlight: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 1L13.5 8H21L15 12.5L17.5 19.5L11 15L4.5 19.5L7 12.5L1 8H8.5L11 1Z"
          fill="#4F6EF7"
        />
      </svg>
    ),
  },
  {
    title: "Business Analysis Essentials",
    abbr: "BAE",
    issuer: "Global Knowledge",
    highlight: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="#64748B" strokeWidth="1.5" fill="none"/>
        <path d="M6 8h8M6 11h5" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Certifications() {
  return (
    <section className="py-10 px-6 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#4F6EF7]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#4F6EF7]">
            Certifications
          </span>
        </div>

        <AnimateIn delay={0}>
          <div className="flex flex-wrap gap-4">
            {certs.map((cert) => (
              <div
                key={cert.title}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl border ${
                  cert.highlight
                    ? "bg-[#EEF2FF] border-[#C7D2FE] shadow-sm"
                    : "bg-[#F8FAFC] border-[#E2E8F0]"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    cert.highlight ? "bg-white shadow-sm" : "bg-white border border-[#E2E8F0]"
                  }`}
                >
                  {cert.icon}
                </div>
                <div>
                  <p
                    className={`font-bold text-sm leading-tight ${
                      cert.highlight ? "text-[#1E293B]" : "text-[#334155]"
                    }`}
                  >
                    {cert.title}
                  </p>
                  <p className="text-xs text-[#64748B] mt-0.5">{cert.issuer}</p>
                </div>
                {cert.highlight && (
                  <span className="ml-2 text-xs font-bold text-[#4F6EF7] bg-white border border-[#C7D2FE] px-2.5 py-1 rounded-full">
                    {cert.abbr}
                  </span>
                )}
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
