
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
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
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10" />
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/farm-video.mp4" type="video/mp4" />
      </video>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
        className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Farm-Fresh Organic Produce
        </motion.h1>
        <motion.h2
          variants={item}
          className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
        >
          Direct from Antioch Mixed Farm
        </motion.h2>
        <motion.div variants={item} className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-full font-medium"
          >
            Our Products
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary px-8 py-3 rounded-full font-medium"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-secondary rounded-full opacity-30"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-primary rounded-full opacity-20"
        />
      </motion.div>
    </div>
  );
}
  
