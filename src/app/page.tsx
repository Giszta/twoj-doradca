"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FAQ from "./components/Faq";
import HowWeHelp from "./components/HelpSection";
import WhyOZE from "./components/WhySection";
import AboutMe from "./components/AboutSection";
import Opinions from "./components/OpinionsSection";

export default function Home() {
  return (
    <main className="bg-stone-100 flex  flex-col mx-auto hide-scrollbar">
      <div className="w-[90%] mx-auto flex items-center justify-between"><Navbar/></div>
      <HeroSection></HeroSection>
      <div className="container  mx-auto px-12 py-4 ">
        <WhyOZE></WhyOZE>
        <AboutMe></AboutMe>
        <HowWeHelp></HowWeHelp>
        <FAQ></FAQ>
        <Opinions></Opinions>
      </div>
      
      <Footer/>
    </main>
  );
}
