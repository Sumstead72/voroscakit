"use client";

import { useState } from "react";
import Logo from "@/components/Logo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-primary/80 backdrop-blur-[20px]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium uppercase tracking-wide text-text-secondary transition-colors duration-300 hover:text-accent relative"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-accent text-accent font-semibold text-sm uppercase tracking-wide px-6 py-2 transition-all duration-300 hover:bg-accent hover:text-primary hover:shadow-[0_0_30px_rgba(78,205,196,0.3)]"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-primary/95 backdrop-blur-md px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center border border-accent text-accent font-semibold text-sm uppercase tracking-wide px-5 py-2 hover:bg-accent hover:text-primary transition-all"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
