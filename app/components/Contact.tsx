export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-medium tracking-widest uppercase text-[#3B5BDB] mb-4 block">
          Contact
        </span>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#111111] mb-4">
              Let&apos;s talk.
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              I&apos;m open to product roles at companies building enterprise SaaS, data infrastructure, or AI-driven workflow tools. If you&apos;re working on something that makes complex operations feel simple, I&apos;d love to connect.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:ryan@checkingin.co"
                className="flex items-center gap-3 text-sm text-[#374151] hover:text-[#3B5BDB] transition-colors group"
              >
                <span className="w-9 h-9 flex items-center justify-center bg-[#F3F4F6] group-hover:bg-[#EEF2FF] rounded-lg transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 3h14v10H1V3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                    <path d="M1 3l7 5.5L15 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                ryan@checkingin.co
              </a>

              <a
                href="https://linkedin.com/in/ryan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#374151] hover:text-[#3B5BDB] transition-colors group"
              >
                <span className="w-9 h-9 flex items-center justify-center bg-[#F3F4F6] group-hover:bg-[#EEF2FF] rounded-lg transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M4 6v6M4 4v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M7 12V9c0-1.105.895-2 2-2s2 .895 2 2v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 6v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </span>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl p-6">
            <p className="text-sm font-semibold text-[#111111] mb-1">Currently</p>
            <p className="text-sm text-[#6B7280] mb-6">
              Product Owner at CheckingIn — open to new opportunities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-[#374151]">
                <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                Available for new roles
              </div>
              <div className="flex items-center gap-2 text-sm text-[#374151]">
                <span className="w-2 h-2 bg-[#3B5BDB] rounded-full flex-shrink-0"></span>
                Based in Canada — Remote-friendly
              </div>
              <div className="flex items-center gap-2 text-sm text-[#374151]">
                <span className="w-2 h-2 bg-[#3B5BDB] rounded-full flex-shrink-0"></span>
                Focus: Enterprise SaaS, B2B, AI-driven platforms
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
