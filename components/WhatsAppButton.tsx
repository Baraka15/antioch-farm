"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.a
        href="https://wa.me/256777466609"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 4px 6px rgba(0, 0, 0, 0.1)",
            "0 4px 20px rgba(37, 211, 102, 0.3)",
            "0 4px 6px rgba(0, 0, 0, 0.1)",
          ],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </motion.div>
  );
}
