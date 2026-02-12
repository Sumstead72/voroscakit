import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="font-mono font-bold text-lg">
          Voroscak<span className="text-accent logo-glow">IT</span>
        </Link>
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} VoroscakIT LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
