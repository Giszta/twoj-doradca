export default function HeroVideo() {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src="/video/hero.mp4" type="video/mp4" />
      Twoja przeglądarka nie wspiera elementu video.
    </video>
  );
}