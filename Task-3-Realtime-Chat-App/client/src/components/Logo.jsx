import { MessageCircleMore } from "lucide-react";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-4"
    >
      {/* Logo */}
      <div
        className="
          relative
          flex
          h-[72px]
          w-[72px]
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-violet-600
          via-fuchsia-500
          to-pink-500
          shadow-[0_18px_45px_rgba(168,85,247,.35)]
        "
      >
        <div className="absolute inset-0 rounded-2xl bg-white/10" />

        <MessageCircleMore
          size={34}
          className="relative z-10 text-white"
        />
      </div>

      {/* Text */}
      <div>
        <h1
          className="
            text-4xl
            font-extrabold
            tracking-tight
            text-white
          "
        >
          Link
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            &Sync
          </span>
        </h1>

        <p className="mt-1 text-base text-slate-400">
          Modern Realtime Collaboration
        </p>
      </div>
    </motion.div>
  );
}