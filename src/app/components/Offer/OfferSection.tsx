"use client";

import { products } from "./data";
import DesktopCarousel from "./DesktopCarousel";
import MobileCarousel from "./MobileCarousel";
import CTASection from "./CTASection";
import Separator from "../Separator";

export default function OfferSection() {
  return (
    <section id="offer" className=" bg-stone-100  overflow-hidden">  
<Separator />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <DesktopCarousel products={products} />
        <MobileCarousel products={products} />
        <CTASection />
      </div>

      <style jsx global>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}