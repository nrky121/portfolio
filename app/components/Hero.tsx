export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0F172A]">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-blob absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#3B5BDB] rounded-full blur-[120px] opacity-40" />
        <div className="glow-blob absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-[#6366F1] rounded-full blur-[120px] opacity-30" style={{ animationDelay: "3s" }} />
        <div className="glow-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#4F6EF7] rounded-full blur-[100px] opacity-10" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        <div className="fade-up fade-up-delay-1">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#818CF8] mb-8 border border-[#818CF8]/30 px-4 py-2 rounded-full bg-[#818CF8]/10">
            <span className="w-1.5 h-1.5 bg-[#818CF8] rounded-full"></span>
            Product Manager / Product Owner · B2B SaaS · Enterprise Platforms
          </span>
        </div>

        <h1 className="fade-up fade-up-delay-2 text-6xl md:text-8xl font-bold tracking-tight leading-[1.0] mb-6">
          <span className="gradient-text">Ryan Ngai</span>
        </h1>

        <p className="fade-up fade-up-delay-3 text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-12">
          I turn complex workflows into products that help people spend less time on admin and more time on what matters.
        </p>

        <div className="fade-up fade-up-delay-4 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-[#4F6EF7] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#3B5BDB] transition-all hover:scale-105 shadow-lg shadow-[#4F6EF7]/30"
          >
            View My Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white border border-white/20 px-6 py-3 rounded-xl hover:border-white/40 transition-all"
          >
            Get in touch
          </a>
        </div>

        {/* Stats row */}
        <div className="fade-up fade-up-delay-4 mt-10 pt-8 border-t border-white/10 flex w-full justify-between flex-wrap gap-4">
          {[
            { value: "4+", label: "Years in Product" },
            { value: "300+", label: "User Stories Shipped" },
            { value: "5", label: "Modules Owned" },
            { value: "CSPO", label: "Certified Scrum Product Owner" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
