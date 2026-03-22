"use client";

import { motion } from "framer-motion";
import { RefObject } from "react";
import AnimatedCounter from "./AnimatedCounter";
import GrantExpandedPanel from "./GrantExpandedPanel";
import { Grant } from "./types";

import {
  FaCheck,
  FaChevronDown,
  FaClock,
  FaTasks,
  FaStar
} from "react-icons/fa";

interface GrantCardProps {
  grant: Grant;
  index: number;
  expandedCard: string | null;
  toggleCard: (id: string) => void;
  expandedRef: RefObject<HTMLDivElement | null>;
  getDifficultyColor: (difficulty: string) => string;
}

export default function GrantCard({
  grant,
  index,
  expandedCard,
  toggleCard,
  expandedRef,
  getDifficultyColor
}: GrantCardProps) {
  const Icon = grant.icon;
  const isExpanded = expandedCard === grant.id;

  return (
    <motion.div
      key={grant.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="min-w-[88%] sm:min-w-[80%] md:min-w-0 snap-center"
    >
      <div className="relative h-full pt-1">
        {grant.recommended && (
          <div className="absolute -top-5 -right-3 z-10">
            <div className="bg-linear-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <FaStar className="text-sm" />
              <span className="text-sm font-bold">Polecane</span>
            </div>
          </div>
        )}

        <div
          className={`group flex flex-col min-h-120 md:min-h-135 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 ${
            grant.recommended
              ? "border-yellow-400"
              : "border-gray-200 hover:border-blue-300"
          }`}
        >
          <div className="p-4 md:p-6 bg-linear-to-br from-blue-50 to-cyan-50 border-b-2 border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 md:w-14 md:h-14 bg-white rounded-xl shadow-md flex items-center justify-center">
                <Icon className="text-2xl text-blue-600" />
              </div>

              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">
                  Do
                </div>

                <AnimatedCounter value={grant.maxAmount} />
              </div>
            </div>

            <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2">
              {grant.title}
            </h3>

            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold border ${grant.statusColor}`}>
              {grant.status}
            </div>
          </div>

          <div className="p-4 md:p-6 flex flex-col flex-1">
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">
              {grant.description}
            </p>

            <div className="flex gap-2 mb-4 flex-wrap">
              <div className="flex items-center gap-2 px-2.5 py-1.5 md:px-3 md:py-2 bg-gray-100 rounded-lg text-xs md:text-sm">
                <FaClock className="text-blue-600" />
                <span className="font-semibold">{grant.timeline}</span>
              </div>

              <div className={`flex items-center gap-2 px-2.5 py-1.5 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-semibold ${getDifficultyColor(grant.difficulty)}`}>
                <FaTasks />
                <span>{grant.difficulty}</span>
              </div>
            </div>

            <ul className="space-y-1.5 md:space-y-2 mb-4">
              {grant.benefits.map((benefit: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1 shrink-0" />
                  <span className="text-xs md:text-sm text-gray-700">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => toggleCard(grant.id)}
              aria-expanded={isExpanded}
              aria-controls={`grant-panel-${grant.id}`}
              className="w-full py-2.5 md:py-3 text-sm md:text-base bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-auto"
            >
              {isExpanded ? "Zwiń szczegóły" : "Sprawdź wymagania"}

              <FaChevronDown
                className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
              />
            </button>

            <div id={`grant-panel-${grant.id}`}>
              <GrantExpandedPanel
                isExpanded={isExpanded}
                requirements={grant.requirements}
                expandedRef={expandedRef}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}