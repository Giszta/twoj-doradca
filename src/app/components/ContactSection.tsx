"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const contacts = [
  {
    img: "/img/instagram.png",
    alt: "Instagram",
    description: "Dołącz do społeczności – codzienna dawka inspiracji i kulis mojej pracy.",
    href: "https://www.instagram.com/twoj.doradca.oze/",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    img: "/img/facebook.png",
    alt: "Facebook",
    description: "Aktualne programy, zmiany w dotacjach i szybki kontakt w jednym miejscu.",
    href: "https://www.facebook.com/profile.php?id=61567533345453",
    gradient: "from-blue-600 to-blue-500",
  },
  {
    img: "/img/youtube.png",
    alt: "YouTube",
    description: "Zobacz wideo poradniki krok po kroku – praktyczne wskazówki bez teorii.",
    href: "https://www.youtube.com/@TwojDoradcaOZE",
    gradient: "from-red-600 to-red-500",
  },
  {
    img: "/img/tiktok.png",
    alt: "TikTok",
    description: "Szybkie tipy i ciekawostki o OZE w lekkiej i przystępnej formie.",
    href: "https://www.tiktok.com/@twojdoradca",
    gradient: "from-black to-pink-600",
  },
  {
    img: "/img/gmail.png",
    alt: "Email",
    description: "Masz pytania? Napisz – odpowiadam szybko i konkretnie.",
    href: "mailto:Kontakt@czyste-powietrze-dotacja.pl",
    gradient: "from-orange-600 to-red-500",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = "Imię i nazwisko jest wymagane.";
    if (!form.email) {
      newErrors.email = "Email jest wymagany.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Podaj poprawny adres email.";
    }
    if (!form.message) newErrors.message = "Wiadomość nie może być pusta.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Send form:", form);
    alert("Wiadomość wysłana!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="flex items-center justify-center text-4xl font-bold text-gray-800 mb-16">
          <span className="inline-block border-t border-gray-300 w-20 mr-6"></span>
          Napisz do mnie – resztą zajmę się ja!
          <span className="inline-block border-t border-gray-300 w-20 ml-6"></span>
        </h2>

        {/* CTA + formularz */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Lewa strona */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Masz pytania? <br /> Zrób pierwszy krok do oszczędności!
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Wypełnij formularz, a przygotuję dla Ciebie indywidualną ofertę.
              Doradzę najlepsze rozwiązania i podpowiem, jak skorzystać z dotacji.
            </p>
            <p className="text-lg text-gray-600 font-medium">
              To nic nie kosztuje – a możesz zyskać realne oszczędności.
            </p>
          </motion.div>

          {/* Formularz */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Numer telefonu (opcjonalnie)
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Treść wiadomości
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="mt-8 w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition"
            >
              Wyślij wiadomość
            </button>
          </motion.form>
        </div>

        {/* Social media karty */}
        <div className="grid lg:grid-cols-2 gap-30">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex gap-8 p-8 rounded-2xl shadow-xl bg-white"
            >
              <div
                className={`absolute top-8 left-0 w-full h-10 bg-gradient-to-r ${contact.gradient} z-0`}
              />
              <div className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2">
                <Image
                  src={contact.img}
                  alt={contact.alt}
                  width={160}
                  height={120}
                  className="h-auto w-auto z-10 drop-shadow-xl bg-transparent"
                />
              </div>
              <div className="ml-36 flex-1 text-center z-10">
                <h3 className="text-2xl font-bold text-white mb-3">{contact.alt}</h3>
                <p className="text-gray-600">{contact.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
