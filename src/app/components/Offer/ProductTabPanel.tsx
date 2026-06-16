"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "./types";
import { scrollToSection } from "./utils/scrollToSection";

type Props = {
  products: Product[];
};

const DESKTOP_VISIBLE = 3;
const GAP = 16;
const ARROW_W = 52;
const SWIPE_THRESHOLD = 50;

export default function ProductTabPanel({ products }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const maxIndex = products.length - DESKTOP_VISIBLE;
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      setCardWidth(
        Math.floor((w - GAP * (DESKTOP_VISIBLE - 1)) / DESKTOP_VISIBLE) - 1,
      );
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const mobilePrev = () => {
    if (index === 0) return;
    setDirection(-1);
    setIndex((i) => i - 1);
  };
  const mobileNext = () => {
    if (index === products.length - 1) return;
    setDirection(1);
    setIndex((i) => i + 1);
  };
  const mobileTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) mobileNext();
      else mobilePrev();
    }
    touchStartX.current = null;
  };

  const ArrowBtn = ({
    onClick,
    disabled,
    label,
    children,
  }: {
    onClick: () => void;
    disabled: boolean;
    label: string;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      style={{ width: ARROW_W, height: ARROW_W, flexShrink: 0 }}
      className="rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-800 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );

  const CardContent = ({ product }: { product: Product }) => {
    const Icon = product.icon;
    return (
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col h-full transition-shadow duration-200 hover:shadow-md">
        <div className="relative bg-linear-to-br from-blue-500 to-cyan-500 h-80 flex items-center justify-center shrink-0">
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />
          </div>
          <div className="absolute top-3 right-3 px-2 pt-0.5 pb-1 bg-white/90 backdrop-blur-sm rounded-full">
            <span className="text-[10px] font-semibold text-blue-700">
              {product.badge}
            </span>
          </div>
          <div className="relative w-72 h-72">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="224px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-base font-bold text-gray-900">
              {product.name}
            </h3>
          </div>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
            {product.description}
          </p>
          <div className="bg-stone-50 rounded-xl p-3 mb-4 text-sm text-gray-500 leading-relaxed border border-stone-100 flex-1">
            {product.details}
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-50 text-blue-700 rounded-xl text-sm font-semibold hover:bg-blue-100 transition-colors border border-blue-200 active:scale-95"
          >
            Zapytaj o ofertę
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-12">
      {/* ── DESKTOP ── */}
      <div className="hidden md:flex items-center gap-3">
        <ArrowBtn onClick={prev} disabled={index === 0} label="Poprzednie">
          <ChevronLeft className="w-6 h-6" />
        </ArrowBtn>

        <div ref={containerRef} className="overflow-hidden flex-1">
          <motion.div
            className="flex"
            style={{ gap: GAP }}
            animate={{ x: cardWidth ? -index * (cardWidth + GAP) : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="shrink-0"
                style={{ width: cardWidth || "33%" }}
              >
                <CardContent product={product} />
              </div>
            ))}
          </motion.div>
        </div>

        <ArrowBtn onClick={next} disabled={index === maxIndex} label="Następne">
          <ChevronRight className="w-6 h-6" />
        </ArrowBtn>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden">
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={{
                enter: (d: number) => ({ x: d * 60, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (d: number) => ({ x: d * -60, opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
            >
              <CardContent product={products[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-5">
          <ArrowBtn
            onClick={mobilePrev}
            disabled={index === 0}
            label="Poprzednie"
          >
            <ChevronLeft className="w-6 h-6" />
          </ArrowBtn>

          <div className="flex gap-2">
            {products.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => mobileTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-blue-500"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

          <ArrowBtn
            onClick={mobileNext}
            disabled={index === products.length - 1}
            label="Następne"
          >
            <ChevronRight className="w-6 h-6" />
          </ArrowBtn>
        </div>

        <p className="text-center text-xs text-gray-400 mt-3 select-none">
          Przesuń palcem, aby zmienić kartę
        </p>
      </div>
    </div>
  );
}
