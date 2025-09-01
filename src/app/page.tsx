"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="bg-(--bg-primary) flex min-h-screen flex-col hide-scrollbar">
      <Navbar/>
      <div className="container  mx-auto px-12 py-4 hide-scrollbar">
        <HeroSection></HeroSection>
      </div>
      
      <Footer/>
    </main>
  );
}
