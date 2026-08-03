import { motion } from "framer-motion";

export default function GlassCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="
        relative
        w-full
        max-w-[360px]
        sm:max-w-[460px]
        lg:max-w-[560px]

        overflow-hidden

        rounded-[24px]
        sm:rounded-[32px]
        lg:rounded-[36px]

        border
        border-white/10

        bg-[#171C2A]/95
        backdrop-blur-3xl

        shadow-[0_30px_80px_rgba(0,0,0,.45)]

        px-5
        py-6

        sm:px-8
        sm:py-8

        lg:px-10
        lg:py-10
      "
    >
      {/* Top Border */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-violet-500 via-pink-500 to-fuchsia-500" />

      {/* Glow */}
      <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-violet-600/20 blur-[110px]" />
      <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-pink-600/15 blur-[110px]" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}