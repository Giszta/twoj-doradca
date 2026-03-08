import { motion } from "framer-motion";
import CounterCard from "./CounterCard";
import BarCounter from "./BarCouter";
import { FaSmile, FaProjectDiagram, FaCalendarAlt } from "react-icons/fa";

export default function AboutStats() {
  return (
    <div className="mb-16 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6 md:mb-12"
      >
        <h2 className="text-xl md:text-3xl font-bold mb-2 bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Liczby mówią same za siebie
        </h2>
        <p className="text-gray-600 text-xs md:text-base px-4">
          Zaufało mi setki zadowolonych klientów
        </p>
      </motion.div>

      <div className="hidden md:grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <CounterCard 
            value={97} 
            label="Zadowolonych klientów" 
            Icon={FaSmile} 
            suffix="%" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <CounterCard 
            value={400} 
            label="Zrealizowanych projektów" 
            Icon={FaProjectDiagram} 
            color="purple" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <CounterCard 
            value={5} 
            label="Lat doświadczenia" 
            Icon={FaCalendarAlt}
            suffix="+" 
            color="green" 
          />
        </motion.div>
      </div>

      <div className="md:hidden max-w-lg mx-auto space-y-3 px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <BarCounter 
            value={97} 
            maxValue={100}
            label="Zadowolonych klientów" 
            Icon={FaSmile} 
            suffix="%" 
            color="blue"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <BarCounter 
            value={400} 
            maxValue={410}
            label="Zrealizowanych projektów" 
            Icon={FaProjectDiagram} 
            color="purple" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <BarCounter 
            value={5} 
            maxValue={6}
            label="Lat doświadczenia" 
            Icon={FaCalendarAlt} 
            color="green"
            suffix="+"
          />
        </motion.div>
      </div>
    </div>
  );
}