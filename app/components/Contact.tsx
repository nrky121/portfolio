export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden bg-[#0F172A]">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3B5BDB] rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#4F6EF7]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#4F6EF7]">
            Contact
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
              Let&apos;s talk.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-10 text-lg">
              I&apos;m open to product roles at companies building enterprise SaaS, data infrastructure, or AI-driven workflow tools. If you&apos;re working on something that makes complex operations feel simple, I&apos;d love to connect.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:ryan@checkingin.co"
                className="flex items-center gap-4 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <span className="w-11 h-11 flex items-center justify-center bg-white/10 group-hover:bg-[#4F6EF7] rounded-xl transition-colors border border-white/10 group-hover:border-[#4F6EF7]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 3h14v10H1V3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                    <path d="M1 3l7 5.5L15 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-xs text-slate-500">ryan@checkingin.co</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/ryngai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <span className="w-11 h-11 flex items-center justify-center bg-white/10 group-hover:bg-[#4F6EF7] rounded-xl transition-colors border border-white/10 group-hover:border-[#4F6EF7]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M4 6v6M4 4v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M7 12V9c0-1.105.895-2 2-2s2 .895 2 2v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 6v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <p className="text-xs text-slate-500">Connect with me</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></span>
              <p className="text-sm font-semibold text-white">Available for new roles</p>
            </div>

            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Product Owner at CheckingIn, actively exploring new opportunities in enterprise SaaS and AI-driven platforms.
            </p>

            <div className="space-y-3">
              {[
                { icon: "📍", label: "Based in Canada, Remote-friendly" },
                { icon: "🎯", label: "Focus: Enterprise SaaS, B2B, AI" },
                { icon: "⚡", label: "Open to: TPO, PM, Sr. PM roles" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm text-slate-400 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <span>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
