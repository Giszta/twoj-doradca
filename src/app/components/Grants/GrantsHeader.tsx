import { motion } from "framer-motion";
import Separator from "../Separator";

export default function GrantsHeader() {

  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
       <Separator/>

<h2 className="text-xl md:text-3xl font-bold mb-2 bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Aktualne programy dotacyjne
          </h2>
          <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto mb-8">
            Skorzystaj z dostępnych programów wsparcia i odzyskaj nawet{" "}
            <span className="font-bold text-green-600">45 000 zł</span>. Pomogę
            Ci dobrać odpowiednie rozwiązanie i przejść przez wszystkie formalności.
          </p>
        </motion.div>
  );
}