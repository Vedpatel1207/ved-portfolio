"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find the section whose top is closest to (but not past) the viewport's
      // upper trigger line. Falls back to last section near page bottom.
      const trigger = window.innerHeight * 0.35;
      let current = links[0].id;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - trigger <= 0) current = l.id;
      }
      // If near the bottom of the page, force last section active
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
        current = links[links.length - 1].id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-lg font-bold gradient-text tracking-tight"
        >
          [Ved]
        </a>
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`nav-link ${active === l.id ? "active" : ""}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/Ved_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient text-xs px-5 py-2.5"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
