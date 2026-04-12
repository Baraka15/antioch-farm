
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 px-4 md:px-12 bg-secondary text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Experience Farm-Fresh Goodness?
        </motion.h2>
        <motion.p variants={item} className="mb-8 text-lg">
          Join our community of satisfied customers enjoying organic produce
          straight from our farm to your table.
        </motion.p>
        <motion.div variants={item}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary px-8 py-3 rounded-full font-medium text-lg shadow-lg"
          >
            Order Now
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
  
