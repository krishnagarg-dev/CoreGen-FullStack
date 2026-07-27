import { motion } from "framer-motion";

export default function GlassCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-md rounded-[30px] border border-white/40 bg-white/45 backdrop-blur-3xl shadow-[0_25px_60px_rgba(0,0,0,0.08)] p-8"
    >
      {children}
    </motion.div>
  );
}