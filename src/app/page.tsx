
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Faq from "./components/Faq";


import AboutMe from "./components/AboutSection";
import Opinions from "./components/OpinionsSection";
import Contact from "./components/ContactSection";
import Offer from "./components/OfferSection";
import Grants from "./components/GrantSection";
import RealizacjeCarousel from "./components/RealisationSection";

export default function Home() {
  return (
    <main className="bg-stone-100 flex  flex-col mx-auto hide-scrollbar">
      <div className="w-[90%] mx-auto flex items-center justify-between"><Navbar/></div>
      <HeroSection></HeroSection>
      <div className="container  mx-auto px-12 py-4 ">
        <Offer></Offer>
        <AboutMe></AboutMe>
        <Grants></Grants>
        <RealizacjeCarousel></RealizacjeCarousel>
        <Opinions></Opinions>
        <Faq></Faq>
        <Contact></Contact>
      </div>
      
      <Footer/>
    </main>
  );
}
