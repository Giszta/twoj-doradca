"use client";

import { useRef, useState } from "react";
import AboutStats from "./AboutStats";
import AboutSteps from "./AboutSteps";
import AboutVideo from "./AboutVideo";
import { videoTimestamps } from "./videoTimestamps";
import Separator from "../Separator";

export default function AboutSection() {
  const [activeStep, setActiveStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex);

    if (videoRef.current) {
      videoRef.current.currentTime = videoTimestamps[stepIndex]?.start ?? 0;
    }
  };

  return (
    <section id="about" className="bg-gray-100">
      <Separator />

      <div className="max-w-7xl mx-auto px-6">
        <AboutStats />

        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center md:text-left">
            Jak pracuję?
          </h3>

          <p className="text-gray-600 text-base md:text-lg text-center md:text-left mb-4">
            Sprawdzony proces w 7 krokach
          </p>

          <p className="text-sm text-blue-600 font-semibold text-center md:text-left flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            Kliknij krok aby przewinąć wideo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <AboutSteps
            activeStep={activeStep}
            onStepClick={handleStepClick}
          />

          <AboutVideo videoRef={videoRef} onStepChange={setActiveStep} />
        </div>

        <div className="md:hidden mt-8 p-6 bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
          <p className="text-gray-700 leading-relaxed text-center">
            💡 <strong>Dzięki temu procesowi</strong> masz pewność, że
            inwestujesz świadomie i zyskujesz realne oszczędności – bez stresu i
            bez przepłacania.
          </p>
        </div>
      </div>
    </section>
  );
}