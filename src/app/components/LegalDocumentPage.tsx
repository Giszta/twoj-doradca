"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type LegalSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type LegalDocumentPageProps = {
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

export function LegalDocumentPage({
  title,
  highlightedTitle,
  description,
  effectiveDate,
  pdfHref,
  pdfLabel = "Pobierz PDF",
  tocAriaLabel,
  notice,
  sections,
}: LegalDocumentPageProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const isAutoScrollingRef = useRef(false);
  const autoScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const romanNumerals = useMemo(
    () => [
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
      "X",
      "XI",
      "XII",
      "XIII",
      "XIV",
      "XV",
      "XVI",
      "XVII",
      "XVIII",
      "XIX",
      "XX",
    ],
    []
  );

  const getTocLabel = (heading: string) => {
    return heading.replace(/^[IVXLCDM]+\.\s*/, "");
  };

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      if (isAutoScrollingRef.current) {
        ticking = false;
        return;
      }

      const ids = sections.map((section) => section.id);
      const activationOffset = 160;
      const currentScroll = window.scrollY + activationOffset;

      let currentSection = ids[0] ?? "";

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;

        if (element.offsetTop <= currentScroll) {
          currentSection = id;
        } else {
          break;
        }
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 24;

      if (nearBottom && ids.length > 0) {
        currentSection = ids[ids.length - 1];
      }

      setActiveSection((prev) => (prev === currentSection ? prev : currentSection));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveSection);
      }
    };

    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sections.some((section) => section.id === hash)) {
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

      const topOffset = 96;
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - topOffset;

      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }

      isAutoScrollingRef.current = true;
      setActiveSection(id);
      window.history.replaceState(null, "", `#${id}`);

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });

      const finishAutoScroll = () => {
        isAutoScrollingRef.current = false;
        setActiveSection(id);
      };

      if ("onscrollend" in window) {
        const handleScrollEnd = () => {
          finishAutoScroll();
          window.removeEventListener("scrollend", handleScrollEnd as EventListener);
        };

        window.addEventListener("scrollend", handleScrollEnd as EventListener, {
          once: true,
        });
      } else {
        autoScrollTimeoutRef.current = setTimeout(finishAutoScroll, 700);
      }
    };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
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
                aria-label={tocAriaLabel}
                className="mt-5 max-h-[calc(100vh-8rem)] overflow-y-auto pr-1"
              >
                <ol className="space-y-2 text-sm leading-6">
                  {sections.map((section, index) => {
                    const isActive = activeSection === section.id;
                    const tocLabel = getTocLabel(section.title);
                    const roman = romanNumerals[index] ?? `${index + 1}`;

                    return (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          onClick={handleScrollToSection(section.id)}
                          aria-current={isActive ? "true" : undefined}
                          className={[
                            "group flex gap-3 rounded-2xl px-3 py-2 transition",
                            isActive
                              ? "bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-sm"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                          ].join(" ")}
                        >
                          <span
                            className={[
                              "mt-0.5 flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full border px-2 text-[11px] font-semibold transition",
                              isActive
                                ? "border-white/20 bg-white/10 text-white"
                                : "border-slate-200 bg-slate-50 text-slate-600",
                            ].join(" ")}
                          >
                            {roman}
                          </span>

                          <span className="pr-1">{tocLabel}</span>
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            </div>
          </aside>

          <section className="space-y-8">
            <header className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(15,23,42,0.06),_transparent_30%)] px-6 py-8 sm:px-8 sm:py-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-3xl">
                    <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                      Dokument prawny
                    </p>

                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                      {title}
                      {highlightedTitle ? (
                        <span className="mt-2 block text-blue-700">
                          {highlightedTitle}
                        </span>
                      ) : null}
                    </h1>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                      {description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 md:items-end">
                    <div className="inline-flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                      <span className="whitespace-nowrap">
                        Obowiązuje od:{" "}
                        <span className="text-slate-900">{effectiveDate}</span>
                      </span>
                    </div>

                    <a
                      href={pdfHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:from-blue-500 hover:to-cyan-400 hover:shadow-lg"
                    >
                      {pdfLabel}
                    </a>
                  </div>
                </div>
              </div>
            </header>

            {notice ? (
              <div className="rounded-[2rem] border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-900 shadow-sm">
                {notice}
              </div>
            ) : null}

            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="
                  scroll-mt-24
                  rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10
                  prose prose-slate max-w-none
                  prose-headings:scroll-mt-24
                  prose-h2:mt-0
                  prose-h2:mb-6
                  prose-h2:border-b
                  prose-h2:border-slate-200
                  prose-h2:pb-4
                  prose-h2:text-2xl
                  prose-h2:font-bold
                  prose-p:my-5
                  prose-p:leading-8
                  prose-ol:my-5
                  prose-ol:pl-5
                  prose-li:my-2
                  prose-li:marker:text-slate-400
                  prose-strong:text-slate-900
                "
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