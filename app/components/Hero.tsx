export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto w-full">
      <div className="fade-up fade-up-delay-1">
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#3B5BDB] mb-6">
          Product Owner · B2B SaaS · Enterprise Platforms
        </span>
      </div>

      <h1 className="fade-up fade-up-delay-2 text-5xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.05] mb-6">
        Ryan
      </h1>

      <p className="fade-up fade-up-delay-3 text-xl md:text-2xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
        I close the gap between complex workflows and products people actually use.
      </p>

      <div className="fade-up fade-up-delay-4 flex items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-[#3B5BDB] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#2F4AC7] transition-colors"
        >
          View My Work
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center text-sm font-medium text-[#6B7280] hover:text-[#111111] transition-colors"
        >
          Get in touch
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 fade-up fade-up-delay-4">
        <div className="flex flex-col items-center gap-1 text-[#6B7280]">
          <span className="text-xs">Scroll</span>
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
            <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.2"/>
            <line x1="7" y1="5" x2="7" y2="9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
