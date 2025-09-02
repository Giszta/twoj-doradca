"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="bg-(--bg-primary) flex min-h-screen flex-col hide-scrollbar mx-auto">
      <div className="w-[90%] mx-auto flex items-center justify-between py-4"><Navbar/></div>
      
      <div className="container  mx-auto px-12 py-4 hide-scrollbar">
        <HeroSection></HeroSection>
      </div>
      
      <Footer/>
    </main>
  );
}
