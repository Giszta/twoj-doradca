"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FAQ from "./components/Faq";

export default function Home() {
  return (
    <main className="bg-(--bg-primary) flex  flex-col  mx-auto">
      <div className="w-[90%] mx-auto flex items-center justify-between"><Navbar/></div>
      <HeroSection></HeroSection>
      <div className="container  mx-auto px-12 py-4 ">
        
        <FAQ></FAQ>
      </div>
      
      <Footer/>
    </main>
  );
}
