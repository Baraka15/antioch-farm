
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: 1,
    name: "Sarah K.",
    role: "Local Restaurant Owner",
    content:
      "The quality of Antioch Farm's produce is unmatched. Our customers can taste the difference in every dish.",
  },
  {
    id: 2,
    name: "James M.",
    role: "Community Member",
    content:
      "I've been getting my vegetables from Antioch for years. Fresh, organic, and always delicious.",
  },
  {
    id: 3,
    name: "Grace L.",
    role: "Health Coach",
    content:
      "As a nutritionist, I recommend Antioch Farm products to all my clients. The nutrient density is exceptional.",
  },
];

export default function Testimonials() {
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
    <section className="py-20 px-4 md:px-12 bg-primary text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
            >
              <p className="mb-6 italic text-lg">"{testimonial.content}"</p>
              <div className="font-bold">{testimonial.name}</div>
              <div className="text-white/80">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
  
