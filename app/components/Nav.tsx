"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <span className={`font-bold tracking-tight transition-colors duration-500 ${scrolled ? "text-[#0F172A]" : "text-white"}`}>
          Ryan Ngai
        </span>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors duration-500 ${
                  scrolled
                    ? "text-[#64748B] hover:text-[#0F172A]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
