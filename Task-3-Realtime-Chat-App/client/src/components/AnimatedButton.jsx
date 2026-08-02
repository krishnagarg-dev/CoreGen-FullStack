import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AnimatedButton({
  text = "Enter Link&Sync",
  onClick,
  disabled = false,
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileHover={{
        scale: 1.02,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="
        group
        relative
        mt-8
        flex
        h-[64px]
        w-full
        items-center
        justify-center
        gap-3
        overflow-hidden
        rounded-2xl
        bg-gradient-to-r
        from-violet-600
        via-fuchsia-500
        to-pink-500
        text-lg
        font-semibold
        text-white
        shadow-[0_15px_40px_rgba(168,85,247,.35)]
        transition-all
        duration-300
        hover:shadow-[0_20px_55px_rgba(168,85,247,.55)]
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {/* Shine Effect */}
      <span
        className="
          absolute
          left-[-120%]
          top-0
          h-full
          w-1/2
          -skew-x-12
          bg-white/20
          transition-all
          duration-700
          group-hover:left-[130%]
        "
      />

      <span className="relative z-10">
        {text}
      </span>

      <ArrowRight
        size={22}
        className="
          relative
          z-10
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    </motion.button>
  );
}