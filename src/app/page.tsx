import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Faq from "./components/Faq";
import Opinions from "./components/OpinionsSection";
import Contact from "./components/ContactSection";
import Offer from "./components/OfferSection";
import Grants from "./components/GrantSection";
import RealizacjeCarousel from "./components/RealisationSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="bg-stone-100 flex flex-col mx-auto hide-scrollbar">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        <div className="">

          <Navbar />
        </div>
      </div>

      <HeroSection />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-20">

        <Offer />
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
