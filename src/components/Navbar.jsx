import { useState } from "react";
import { waLink } from "../data/puppies";

const links = [
  { label: "Home", href: "#home" },
  { label: "Puppies", href: "#puppies" },
  { label: "Happy families", href: "#families" },
  { label: "How it works", href: "#how" },
  { label: "FAQ", href: "#faq" },
  { label: "Visit & contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  return (
    <header className="scallop-bottom sticky top-0 z-50 bg-cream">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="TeddyPups logo" className="h-12 w-12 rounded-full" />
          <span className="font-display text-2xl font-black">TeddyPups</span>
        </a>

        <ul className="hidden gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href} className="relative">
              <a
                href={l.href}
                onClick={() => setActive(l.href)}
                className={`font-medium transition hover:text-rust ${active === l.href ? "text-rust" : ""}`}
              >
                {l.label}
              </a>
              {active === l.href && (
                <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 text-xs text-rust">🐾</span>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-wa hidden !px-6 !py-3 sm:inline-flex">
            WhatsApp us
          </a>
          <button
            className="lg:hidden text-3xl"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 bg-cream px-6 pb-6 lg:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => { setActive(l.href); setOpen(false); }} className="text-lg font-medium">
                {l.label}
              </a>
            </li>
          ))}
          <a href={waLink()} className="btn btn-wa justify-center">WhatsApp us</a>
        </ul>
      )}
    </header>
  );
}