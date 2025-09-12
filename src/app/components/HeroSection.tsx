
export default function HeroSection() {
  return (
    <section className="left-0 top-0 w-screen h-screen flex items-center mask-alpha mask-b-from-green mask-b-from-90% mask-b-to-transparent "
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/hero.mp4" type="video/mp4" />
        Twoja przeglądarka nie wspiera elementu video.
      </video>
      <div className="absolute inset-0 bg-black/40 left-0 top-0 w-screen h-screen"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <span className="inline-block mb-6 px-4 py-1 border border-white/50 rounded-full text-white text-sm backdrop-blur-sm">
          Doradztwo | Pompy ciepła | Fotowoltaika
        </span>

        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-snug max-w-3xl">
          Twój doradca <span className="text-blue-500">OZE</span>. <br /> Twoja
          energia przyszłości.
        </h1>

        <div className="mt-10 flex gap-4">
          <a
            href="#kontakt"
            className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
          >
            Skontaktuj się
          </a>
          <a
            href="#oferta"
            className="px-6 py-3 rounded-full bg-white/20 border border-white text-white font-semibold hover:bg-white/30 transition"
          >
            Zobacz ofertę
          </a>
        </div>
      </div>
    </section>
  );
}
