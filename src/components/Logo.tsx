"use client";

import { useState, useEffect } from "react";

export default function Logo({ size = "lg" }: { size?: "lg" | "sm" }) {
  const textSize = size === "lg" ? "text-2xl" : "text-lg";
  const [introExpanded, setIntroExpanded] = useState(size === "lg");

  useEffect(() => {
    if (size !== "lg") return;
    const timer = setTimeout(() => setIntroExpanded(false), 2000);
    return () => clearTimeout(timer);
  }, [size]);

  return (
    <a href="#home" className={`logo-container font-mono font-bold ${textSize} inline-flex items-baseline cursor-pointer no-underline relative ${introExpanded ? "logo-intro" : ""}`}>
      <span className="text-accent logo-glow relative z-[2]">&gt;</span>
      <span className="logo-expand-text">
        <span className="text-text-primary">Voroscak</span>
        <span className="text-accent logo-glow">IT</span>
      </span>
      <span className="text-accent logo-cursor relative z-[2]">_</span>
    </a>
  );
}
