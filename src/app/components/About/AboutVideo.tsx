"use client";
import { useEffect, useState, RefObject } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { videoTimestamps } from "./videoTimestamps";

interface Props {
  videoRef: RefObject<HTMLVideoElement | null>;
  onStepChange: (index: number) => void;
}

export default function AboutVideo({ videoRef, onStepChange }: Props) {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const activeStep = videoTimestamps.findIndex(
        (t) => currentTime >= t.start && currentTime < t.end
      );
      onStepChange(activeStep !== -1 ? activeStep : 0);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [videoRef, onStepChange]);

const toggleMute = () => {
  const video = videoRef.current;
  if (!video) return;               
  video.muted = !muted;             
  setMuted(!muted);
};

  return (
    <div className="lg:sticky lg:top-24">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
        <video
          ref={videoRef}
          src="/video/about.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-2xl"
        />

        <button
          onClick={toggleMute}
          className={`absolute bottom-4 right-4 w-12 h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 ${
            muted ? 'animate-pulse' : ''
          }`}
          aria-label={muted ? 'Włącz dźwięk' : 'Wyłącz dźwięk'}
        >
          {muted ? (
            <FaVolumeMute className="text-lg md:text-xl text-gray-700" />
          ) : (
            <FaVolumeUp className="text-lg md:text-xl text-blue-600" />
          )}
        </button>

        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black/70 text-white text-xs px-3 py-2 rounded-full backdrop-blur-sm">
            💡 Kliknij krok aby przewinąć wideo
          </div>
        </div>
      </div>
    </div>
  );
}