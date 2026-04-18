"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 md:px-12 bg-green-800">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Taste the Difference?
        </h2>

        <p className="text-white/80 text-lg mb-10">
          Order fresh, organic produce directly from our farm to your table.
          Contact us on WhatsApp and we'll have it ready for you.
        </p>

        <a
          href="https://wa.me/256777466609"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-800 font-bold px-10 py-4 rounded-full text-lg shadow-lg"
          >
            Order on WhatsApp
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
}
