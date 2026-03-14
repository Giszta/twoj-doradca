"use client";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import SocialMediaCards from "./SocialMediaCards";
import Separator from "./Separator";

export default function Contact() {
  return (
    <section id="contact" className="">
      <div className="max-w-7xl mx-auto px-6">
<Separator />
    

        {/* CTA + Formularz */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Tekst marketingowy */}
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
              Wypełnij prosty formularz – przygotuję indywidualną ofertę, doradzę najlepsze
              rozwiązania i podpowiem, jak uzyskać dotacje.
            </p>
            <p className="text-lg text-gray-700 font-medium">
              To nic nie kosztuje, a możesz zyskać realne oszczędności i komfort na lata.
            </p>
          </motion.div>
          <ContactForm />
        </div>
        <SocialMediaCards />
      </div>
    </section>
  );
}
