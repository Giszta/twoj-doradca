import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import Faq from "./components/Faq/FAQ";
import Opinions from "./components/opinions/Opinions";
import Contact from "./components/ContactSection";
import OfferSection from "./components/Offer/OfferSection";
import Grants from "./components/Grants/GrantSection";
import RealizacjeCarousel from "./components/Realizations/RealizationCarousel";
import AboutSection from "./components/About/AboutSection";

export default function Home() {
  return (
    <main className="bg-stone-100 flex flex-col mx-auto hide-scrollbar">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        <div className="">

          <Navbar />
        </div>
      </div>

      <HeroSection />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">

        <OfferSection />
        <AboutSection />
        <Grants />
        <RealizacjeCarousel />
        <Opinions />
        <Faq />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
