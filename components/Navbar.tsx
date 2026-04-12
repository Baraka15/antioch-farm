
"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-bold text-primary"
      >
        Antioch Farm
      </motion.div>

      <div className="hidden md:flex space-x-8">
        {["Home", "Products", "Story", "Gallery", "Contact"].map((item) => (
          <Link key={item} href={`#${item.toLowerCase()}`}>
            <motion.div
              whileHover={{ scale: 1.1, color: "#2A7D2E" }}
              className="font-medium cursor-pointer"
            >
              {item}
            </motion.div>
          </Link>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block bg-primary text-white px-6 py-2 rounded-full font-medium"
      >
        Order Now
      </motion.button>
    </motion.nav>
  );
}
  
