"use client";

import { useState, type FormEvent } from "react";

const contactInfo = [
  { label: "email", value: "robert@voroscakit.com", icon: "~" },
  { label: "phone", value: "267-540-3247", icon: "#" },
  { label: "location", value: "Pennsylvania, USA", icon: "@" },
  { label: "hours", value: "Mon – Fri, 9am – 6pm EST", icon: "%" },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email.";
    }
    if (!formData.message.trim()) errs.message = "Message is required.";
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative z-10 py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-[30px] h-px bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[3px] text-accent">
            Contact
          </span>
        </div>
        <h2 className="text-[2.8rem] font-bold leading-[1.15] tracking-tight text-text-primary mb-12">
          Let&apos;s work <span className="text-accent">together.</span>
        </h2>

        {/* Terminal window */}
        <div className="terminal-window rounded-lg overflow-hidden border border-border">
          {/* Title bar */}
          <div className="terminal-titlebar flex items-center gap-3 px-5 py-3 bg-[#091525] border-b border-border">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="font-mono text-[0.7rem] text-text-muted tracking-wide ml-2">
              contact@voroscakit ~ %
            </span>
          </div>

          {/* Terminal body */}
          <div className="terminal-body relative bg-[#0a1929] p-6 sm:p-10">
            {/* Scan line overlay */}
            <div className="terminal-scanline" aria-hidden="true" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
              {/* Form — takes 3 of 5 columns */}
              <form
                onSubmit={handleSubmit}
                className="lg:col-span-3 space-y-5"
              >
                {/* Intro line */}
                <div className="font-mono text-sm text-text-muted mb-6">
                  <span className="text-accent">$</span> ./send-message
                  --to=robert
                </div>

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <TerminalInput
                    label="name"
                    type="text"
                    value={formData.name}
                    placeholder="Your name"
                    error={errors.name}
                    focused={focusedField === "name"}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(v) => setFormData({ ...formData, name: v })}
                  />
                  <TerminalInput
                    label="email"
                    type="email"
                    value={formData.email}
                    placeholder="you@company.com"
                    error={errors.email}
                    focused={focusedField === "email"}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                  />
                </div>

                {/* Phone */}
                <TerminalInput
                  label="phone"
                  type="tel"
                  value={formData.phone}
                  placeholder="(optional)"
                  focused={focusedField === "phone"}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(v) => setFormData({ ...formData, phone: v })}
                />

                {/* Message */}
                <div>
                  <label className="font-mono text-[0.7rem] uppercase tracking-[2px] text-accent block mb-2">
                    <span className="text-text-muted">{">"}</span> message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`terminal-input w-full resize-none ${
                      focusedField === "message" ? "terminal-input-focused" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="font-mono text-red-400 text-xs mt-1">
                      <span className="text-red-500">ERR</span>{" "}
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="terminal-submit group w-full font-mono text-sm uppercase tracking-[2px] py-3.5 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === "sending" ? (
                      <>
                        <span className="terminal-spinner" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <span className="text-accent group-hover:text-primary transition-colors">
                          $
                        </span>{" "}
                        Send Message
                        <span className="text-accent group-hover:text-primary transition-colors">
                          _
                        </span>
                      </>
                    )}
                  </span>
                </button>

                {/* Status messages */}
                {status === "success" && (
                  <div className="font-mono text-sm text-green-400 bg-green-400/5 border border-green-400/20 rounded px-4 py-3">
                    <span className="text-green-500">[OK]</span> Message
                    transmitted successfully. Expect a reply within 24h.
                  </div>
                )}
                {status === "error" && (
                  <div className="font-mono text-sm text-red-400 bg-red-400/5 border border-red-400/20 rounded px-4 py-3">
                    <span className="text-red-500">[FAIL]</span> Transmission
                    error. Please try again or email directly.
                  </div>
                )}
              </form>

              {/* Contact Info — takes 2 of 5 columns */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                {/* System info header */}
                <div className="font-mono text-[0.65rem] text-text-muted tracking-wider uppercase mb-6 pb-3 border-b border-border">
                  <span className="text-accent">$</span> cat
                  /etc/contact.conf
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="group">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-accent text-sm opacity-40">
                          {item.icon}
                        </span>
                        <span className="font-mono text-[0.65rem] uppercase tracking-[2px] text-text-muted">
                          {item.label}
                        </span>
                      </div>
                      <div className="ml-5 mt-1">
                        <span className="text-text-primary text-[0.95rem] group-hover:text-accent transition-colors duration-300">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative terminal output */}
                <div className="mt-10 pt-6 border-t border-border">
                  <div className="font-mono text-[0.65rem] text-text-muted space-y-1.5 opacity-60">
                    <p>
                      <span className="text-accent">STATUS</span> &nbsp;
                      accepting new clients
                    </p>
                    <p>
                      <span className="text-accent">RESPONSE</span> typically
                      &lt; 24h
                    </p>
                    <p>
                      <span className="text-accent">ENCRYPT</span> &nbsp; PGP
                      available on request
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— Terminal Input Component ——— */

function TerminalInput({
  label,
  type,
  value,
  placeholder,
  error,
  focused,
  onFocus,
  onBlur,
  onChange,
}: {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  error?: string;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="font-mono text-[0.7rem] uppercase tracking-[2px] text-accent block mb-2">
        <span className="text-text-muted">{">"}</span> {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e) => onChange(e.target.value)}
        className={`terminal-input w-full ${
          focused ? "terminal-input-focused" : ""
        }`}
      />
      {error && (
        <p className="font-mono text-red-400 text-xs mt-1">
          <span className="text-red-500">ERR</span> {error}
        </p>
      )}
    </div>
  );
}
