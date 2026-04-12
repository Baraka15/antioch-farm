
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Story() {
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageItem = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="story" className="py-20 px-4 md:px-12 bg-gray-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={imageItem}>
          <motion.img
            src="/farm-story.jpg"
            alt="Antioch Farm Story"
            className="rounded-xl shadow-lg w-full h-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <div>
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold mb-6 text-primary"
          >
            Our Story
          </motion.h2>
          <motion.p variants={item} className="mb-4">
            Antioch Mixed Farm was founded in 2010 with a vision to provide
            organic, sustainable produce to our local community in Uganda.
          </motion.p>
          <motion.p variants={item} className="mb-4">
            What started as a small family farm has grown into a thriving
            agricultural business while maintaining our commitment to ethical
            farming practices.
          </motion.p>
          <motion.p variants={item} className="mb-6">
            We believe in working with nature, not against it, to bring you the
            freshest, healthiest products possible.
          </motion.p>
          <motion.button
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-6 py-2 rounded-full font-medium"
          >
            Read More
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
  
