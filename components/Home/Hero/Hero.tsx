"use client"; // Needed for Next.js App Router

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { itemVariants } from "../Utils/MotionVariant"; // Import item animation
import MotionWrapper from "../MotionWrapper/MotionWrapper"; // Import reusable wrapper
import Image from "next/image";


// Tooltip animation variants
const tooltipVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: -25,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
};

const Hero: React.FC = () => {
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Function to copy the contract address to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <MotionWrapper className="bg-green-950 h-screen w-screen flex flex-col items-center gap-8">
      {/* Heading */}
      <div className="w-screen absolute">
          <Image
          aria-hidden
          src="/KermFam Hero Bg.svg"
          alt="background"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
      />
      </div>

      <motion.div
      className="absolute rotate-3 top-40 left-10"
      variants={itemVariants}
      initial="hidden"
      animate={["show", "pulsate"]}
      >
          <Image
          aria-hidden
          src="/KermFam 1.svg"
          alt="KermFam 1"
          width={200}
          height={200}
      />
      </motion.div>

      <motion.div
      className="absolute -rotate-3 top-40 right-10"
      variants={itemVariants}
      initial="hidden"
      animate={["show", "pulsate"]}
      >
          <Image
          aria-hidden
          src="/KermFam 4.svg"
          alt="KermFam 2"
          width={200}
          height={200}
      />
      </motion.div>

      <motion.div
      className="absolute -rotate-3 bottom-10 left-20"
      variants={itemVariants}
      initial="hidden"
      animate={["show", "pulsate"]}
      >
          <Image
          aria-hidden
          src="/KermFam 5.svg"
          alt="KermFam 3"
          width={250}
          height={250}
      />
      </motion.div>

      <motion.div
      className="absolute rotate-3 bottom-10 right-10"
      variants={itemVariants}
      initial="hidden"
      animate={["show", "pulsate"]}
      >
          <Image
          aria-hidden
          src="/KermFam 3.svg"
          alt="KermFam 4"
          width={250}
          height={250}
      />
      </motion.div>

      
      <motion.div
        className=" flex flex-col items-center text-center text-8xl font-[Freckle_Face] uppercase"
        variants={itemVariants}
      >
        <h1 className="text-9xl text-lime-300 pt-60">KermFam</h1>
        <h1>The Ultimate Frog <br /> Family Memecoin</h1>
      </motion.div>

      {/* Subtext */}
      <motion.div variants={itemVariants} className="text-xl -mt-4 tracking-tight">
        <p>Meet the Kerm Family</p>
      </motion.div>

      {/* Buttons */}
      <motion.div className="flex gap-10" variants={itemVariants}>
        <motion.button
          className="rounded-md bg-green-500 -rotate-6 hover:rotate-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="block -translate-x-1 -translate-y-1 rounded-md border-2 border-black bg-white py-2 px-6 text-lg font-extrabold text-black hover:-translate-y-2 active:translate-x-0 active:translate-y-0 transition-all cursor-pointer">
            Buy now!
          </span>
        </motion.button>
        <motion.button
          className="rounded-md bg-green-500 rotate-6 hover:rotate-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="block -translate-x-1 -translate-y-1 rounded-md border-2 border-black bg-lime-300 py-2 px-6 text-lg font-extrabold text-black hover:-translate-y-2 active:translate-x-0 active:translate-y-0 transition-all cursor-pointer">
            Join us!
          </span>
        </motion.button>
      </motion.div>

      {/* Contract Address Section */}
      <motion.div className="flex flex-col items-center gap-2" variants={itemVariants}>
        <p className="text-lg">Contract Address:</p>
        <div className="flex items-center gap-3 border border-white p-2 rounded-md">
          {/* Address Display */}
          <span className="text-sm font-mono truncate max-w-[200px] sm:max-w-full">{contractAddress}</span>

          {/* Copy Button with Tooltip Wrapper */}
          <div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
              setHovered(false);
              setCopied(false); // Reset copied state when mouse leaves
            }}
          >
            <button
              onClick={copyToClipboard}
              className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-md hover:bg-yellow-900 transition"
            >
              Copy
            </button>

            {/* Tooltip (Appears on hover & changes on click) */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md shadow-md"
                  variants={tooltipVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {copied ? "Copied! ✅" : "Copy to Clipboard"}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </MotionWrapper>
  );
};

export default Hero;