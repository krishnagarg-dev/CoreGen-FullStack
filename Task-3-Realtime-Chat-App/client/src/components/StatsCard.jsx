import { motion } from "framer-motion";

export default function StatsCard({
  icon,
  value,
  label,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="
      relative
      overflow-hidden
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      px-6
      py-5
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        -top-10
        -right-10
        h-20
        w-20
        rounded-full
        bg-violet-500/20
        blur-2xl
        "
      />

      <div className="relative">

        <div className="text-3xl">

          {icon}

        </div>

        <h2
          className="
          mt-4
          text-3xl
          font-black
          text-white
          "
        >
          {value}
        </h2>

        <p
          className="
          mt-1
          text-sm
          text-slate-400
          "
        >
          {label}
        </p>

      </div>

    </motion.div>
  );
}