"use client";

import { useEffect, useRef, useState } from "react";

export type LegalSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type Props = {
  title: string;
  highlightedTitle?: string;
  description: string;
  effectiveDate: string;
  pdfHref: string;
  pdfLabel?: string;
  tocAriaLabel: string;
  notice?: React.ReactNode;
  sections: LegalSection[];
};

const ROMAN_NUMERALS = [
  "I","II","III","IV","V","VI","VII","VIII","IX","X",
  "XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX",
];

const getTocLabel = (heading: string) =>
  heading.replace(/^[IVXLCDM]+\.\s*/, "");

export function LegalDocumentPage({
  tocAriaLabel,
  sections,
}: Props) {
  const [activeSection, setActiveSection] = useState("");
  const isAutoScrollingRef = useRef(false);
  const autoScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {
    if (sections.length > 0) {
      setActiveSection(sections[0].id);
    }
  }, [sections]);

  useEffect(() => {
    if (sections.length === 0) return;

    let ticking = false;

    const updateActiveSection = () => {
      if (isAutoScrollingRef.current) {
        ticking = false;
        return;
      }

      const activationOffset = 160;
      const currentScroll = window.scrollY + activationOffset;

      let current = sections[0].id;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        if (el.offsetTop <= currentScroll) {
          current = section.id;
        } else break;
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 24;

      if (nearBottom) {
        current = sections[sections.length - 1].id;
      }

      setActiveSection((prev) => (prev === current ? prev : current));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActiveSection);
      }
    };

    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (sections.some((s) => s.id === hash)) {
        setActiveSection(hash);
      } else {
        updateActiveSection();
      }
    };

    updateActiveSection();
    syncFromHash();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", syncFromHash);

      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, [sections]);

  const handleScrollToSection =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      const target = document.getElementById(id);
      if (!target) return;

      const offset = 96;
      const top =
        target.getBoundingClientRect().top + window.scrollY - offset;

      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }

      isAutoScrollingRef.current = true;
      setActiveSection(id);
      window.history.replaceState(null, "", `#${id}`);

      window.scrollTo({ top, behavior: "smooth" });

      const finish = () => {
        isAutoScrollingRef.current = false;
        setActiveSection(id);
        target.focus();
      };

      autoScrollTimeoutRef.current = setTimeout(finish, 700);
    };

  if (sections.length === 0) return null;

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">

          <aside className="h-fit self-start lg:sticky lg:top-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Nawigacja
              </p>

              <h2 className="mt-2 text-lg font-semibold text-slate-900">
                Spis treści
              </h2>

              <nav
                role="navigation"
                aria-label={tocAriaLabel}
                className="mt-5 max-h-[calc(100vh-8rem)] overflow-y-auto pr-1"
              >
                <ol className="space-y-2 text-sm leading-6">
                  {sections.map((section, index) => {
                    const isActive = activeSection === section.id;

                    return (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          onClick={handleScrollToSection(section.id)}
                          aria-current={isActive ? "location" : undefined}
                          className={`flex gap-3 rounded-2xl px-3 py-2 transition ${
                            isActive
                              ? "bg-linear-to-r from-blue-600 to-cyan-500 text-white"
                              : "text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          <span className="h-7 min-w-7 flex items-center justify-center rounded-full text-xs font-semibold">
                            {ROMAN_NUMERALS[index] ?? index + 1}
                          </span>

                          <span>{getTocLabel(section.title)}</span>
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            </div>
          </aside>

          <section className="space-y-8">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                tabIndex={-1}
                className="scroll-mt-24 rounded-2xl border bg-white px-6 py-8 shadow-sm prose max-w-none"
              >
                <h2>{section.title}</h2>
                {section.content}
              </article>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}