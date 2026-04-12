"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255,255,255,0.95)"
          : "rgba(0,0,0,0)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`text-2xl font-bold ${
          isScrolled ? "text-green-700" : "text-white"
        }`}
      >
        Antioch Farm
      </motion.div>

      {/* Links */}
      <div
        className={`hidden md:flex space-x-8 ${
          isScrolled ? "text-gray-800" : "text-white"
        }`}
      >
        {["home", "products", "story", "gallery", "contact"].map((item) => (
          <Link key={item} href={`#${item}`}>
            <motion.span
              whileHover={{ scale: 1.1, color: "#15803d" }}
              className="font-medium cursor-pointer capitalize"
            >
              {item}
            </motion.span>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <a
        href="https://wa.me/256777466609"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-green-700 text-white px-6 py-2 rounded-full font-medium"
        >
          Order Now
        </motion.button>
      </a>
    </motion.nav>
  );
}
