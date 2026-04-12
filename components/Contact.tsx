
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
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
    <section id="contact" className="py-20 px-4 md:px-12">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          variants={item}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          Have questions or want to place an order? Contact us today.
        </motion.p>

        <motion.form
          variants={item}
          className="grid grid-cols-1 gap-6 bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 font-medium">
              Subject
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              id="subject"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              id="message"
              rows={4}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            ></motion.textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-primary text-white py-3 px-6 rounded-lg font-medium mt-4"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
  
