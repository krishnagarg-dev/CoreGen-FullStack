import { motion } from "framer-motion";

export default function AnimatedButton({ children, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-pink-300 via-fuchsia-300 to-violet-300 px-6 py-3 text-white font-semibold shadow-lg"
      {...props}
    >
      <span className="relative z-10">{children}</span>

      <motion.span
        className="absolute inset-0 bg-white/30"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.7 }}
      />
    </motion.button>
  );
}