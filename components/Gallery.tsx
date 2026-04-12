
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="gallery" className="py-20 px-4 md:px-12">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary"
        >
          Our Farm Gallery
        </motion.h2>
        <motion.p
          variants={item}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          See the beauty and care that goes into every product we grow.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
            >
              <motion.img
                src={image}
                alt={`Farm gallery image ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
  
