"use client";

import { useState, useEffect, useRef } from "react";

import { grants } from "./GrantsData";

import GrantCard from "./GrantCard";
import GrantsHeader from "./GrantsHeader";
import GrantsCTA from "./GrantsCTA";
import MobileDots from "./MobileDots";

export default function Grants() {

  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const expandedRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const toggleCard = (id: string): void => {

    const isOpening = expandedCard !== id;

    setExpandedCard(isOpening ? id : null);

    if (isOpening) {
      setTimeout(() => {
        expandedRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }, 250);
    }
  };

  const scrollToContact = (): void => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ 
      behavior: "smooth",
      block: "start" 
    });
  };

  const getDifficultyColor = (difficulty: string): string => {

    switch (difficulty) {

      case "Łatwy":
        return "bg-green-100 text-green-700";

      case "Średni":
        return "bg-yellow-100 text-yellow-700";

      case "Trudny":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const scrollToCard = (index: number): void => {

    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.scrollWidth / grants.length;

    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = (): void => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / grants.length;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveCardIndex(Math.min(index, grants.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="grants" className="bg-gray-100">

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <GrantsHeader />

        <div className="md:hidden text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full">
            <span className="text-xs font-semibold text-blue-700">← Przesuń aby zobaczyć więcej →</span>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="mb-4 pt-5 flex md:grid md:grid-cols-3 md:gap-8 overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory gap-4 pb-4 px-4 -mx-4"
        >

          {grants.map((grant, index) => (

            <GrantCard
              key={grant.id}
              grant={grant}
              index={index}
              expandedCard={expandedCard}
              toggleCard={toggleCard}
              expandedRef={expandedRef}
              getDifficultyColor={getDifficultyColor}
            />

          ))}

        </div>

        <MobileDots
          grants={grants}
          activeCardIndex={activeCardIndex}
          scrollToCard={scrollToCard}
        />

        <GrantsCTA scrollToContact={scrollToContact} />

      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

    </section>
  );
}