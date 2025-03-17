// utils/motionVariants.ts
export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 8 },
  },
  pulsate: {
    scale: [1, 1.1, 1], // Smooth pulsating effect
    transition: { repeat: Infinity, duration: 7, ease: "easeInOut" },
  },
};
