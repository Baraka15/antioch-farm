"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const products = [
  {
    id: 1,
    name: "Organic Vegetables",
    description: "Freshly harvested seasonal vegetables",
    image: "/vegetables.jpg",
  },
  {
    id: 2,
    name: "Free-Range Eggs",
    description: "Nutrient-rich eggs from happy chickens",
    image: "/eggs.jpg",
  },
  {
    id: 3,
    name: "Dairy Products",
    description: "Fresh milk, yogurt and cheese",
    image: "/dairy.jpg",
  },
  {
    id: 4,
    name: "Organic Fruits",
    description: "Seasonal fruits grown without pesticides",
    image: "/fruits.jpg",
  },
];

export default function Products() {
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
    <section id="products" className="py-20 px-4 md:px-12 bg-gray-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-700"
        >
          Our Products
        </motion.h2>

        <motion.p
          variants={item}
          className="text-center mb-12 max-w-2xl mx-auto text-gray-600"
        >
          Farm-fresh organic products grown with care and sustainability in mind.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>

                <a
                  href="https://wa.me/256777466609"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-700 text-white px-4 py-2 rounded-full text-sm"
                  >
                    Order via WhatsApp
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
