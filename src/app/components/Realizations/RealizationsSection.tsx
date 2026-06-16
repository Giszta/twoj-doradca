"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import Separator from "../Separator";
import RealizationLightbox from "./RealizationLightbox";
import { allImages } from "./realizationsData";

const IMG_W = 300;
const IMG_H = 200;
const GAP = 12;

const row1 = allImages.filter((_, i) => i % 2 === 0);
const row2 = allImages.filter((_, i) => i % 2 === 1);

function MarqueeRow({
  images,
  direction,
  speed,
  onImageClick,
}: {
  images: string[];
  direction: "left" | "right";
  speed: number;
  onImageClick: (src: string) => void;
}) {
  const doubled = [...images, ...images];
  const totalWidth = images.length * (IMG_W + GAP);

  return (
    <div className="overflow-hidden">
      <div
        className="flex"
        style={{
          gap: GAP,
          width: "max-content",
          animation: `marquee-${direction} ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {doubled.map((src, i) => (
          <button
            key={`${src}-${i}`}
            onClick={() => onImageClick(src)}
            className="group relative shrink-0 rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            style={{ width: IMG_W, height: IMG_H }}
            aria-label="Otwórz zdjęcie"
          >
            <Image
              src={src}
              alt="Realizacja"
              fill
              sizes="300px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-${totalWidth + GAP}px); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-${totalWidth + GAP}px); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default function RealizationsSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((src: string) => {
    const idx = allImages.indexOf(src);
    if (idx !== -1) setLightboxIndex(idx);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + allImages.length) % allImages.length
      ),
    []
  );

  const goNext = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i + 1) % allImages.length
      ),
    []
  );

  return (
    <section id="realization">
      <Separator />

      <div className="py-12 md:py-16">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center md:text-left">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
            Nasze realizacje
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Projekty, które zrealizowaliśmy
          </h2>
          <p className="text-gray-600 max-w-lg text-base leading-relaxed mx-auto md:mx-0">
            Ponad {allImages.length} wykonanych instalacji. Kliknij dowolne
            zdjęcie, aby zobaczyć je w pełnym rozmiarze.
          </p>
        </div>

        {/* Marquee rows */}
        <div className="flex flex-col gap-3">
          <MarqueeRow
            images={row1}
            direction="left"
            speed={120}
            onImageClick={openLightbox}
          />
          <MarqueeRow
            images={row2}
            direction="right"
            speed={110}
            onImageClick={openLightbox}
          />
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <RealizationLightbox
            images={allImages}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
