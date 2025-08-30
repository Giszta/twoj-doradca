"use client";

import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-(--bg-primary) min-h-screen flex flex-col items-center justify-center p-24">
      <h1>Welcome to Next.js!</h1>
      <Footer/>
    </main>
  );
}
