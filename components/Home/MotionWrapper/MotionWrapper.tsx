// components/MotionWrapper.tsx

"use client"; // Required for Next.js App Router

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { containerVariants } from "../Utils/MotionVariant";


interface MotionWrapperProps {
  children: ReactNode;
  className?: string; // Optional class name
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;