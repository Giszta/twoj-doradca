"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-(--bg-primary) flex min-h-screen flex-col  hide-scrollbar">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4 hide-scrollbar">
        
      </div>
      
      <Footer/>
    </main>
  );
}
