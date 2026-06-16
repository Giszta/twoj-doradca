"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function RealizationLightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium tabular-nums">
        {index + 1} / {images.length}
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
        aria-label="Zamknij"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-3 md:left-6 text-white/70 hover:text-white transition-colors p-2 bg-black/30 rounded-xl hover:bg-black/50"
          aria-label="Poprzednie"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      )}

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[index]}
            alt={`Realizacja ${index + 1}`}
            width={1200}
            height={900}
            className="object-contain max-h-[85vh] w-auto rounded-lg shadow-2xl"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-3 md:right-6 text-white/70 hover:text-white transition-colors p-2 bg-black/30 rounded-xl hover:bg-black/50"
          aria-label="Następne"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      )}

      {/* Thumbnail strip for multi-photo projects */}
      {images.length > 1 && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-3"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => {
                // We use onPrev/onNext but need direct jump — pass via parent
                const diff = i - index;
                if (diff > 0) for (let j = 0; j < diff; j++) onNext();
                else for (let j = 0; j < -diff; j++) onPrev();
              }}
              className={`w-10 h-10 rounded-md overflow-hidden border-2 transition-all ${
                i === index ? "border-white scale-110" : "border-white/30 opacity-60 hover:opacity-90"
              }`}
            >
              <Image src={src} alt="" width={40} height={40} className="object-cover w-full h-full" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
