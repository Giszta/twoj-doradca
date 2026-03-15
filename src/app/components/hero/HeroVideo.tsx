export default function HeroVideo() {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover overflow-hidden"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/video/hero.mp4" type="video/mp4" />
      Twoja przeglądarka nie wspiera elementu video.
    </video>
  )
}