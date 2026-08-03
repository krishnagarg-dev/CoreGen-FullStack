import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function InputField({
  value,
  onChange,
  placeholder = "Enter your username",
  type = "text",
}) {
  return (
    <div className="w-full mt-6">
      {/* Label */}
      <label className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-300">
        <User size={16} className="text-fuchsia-400" />
        Username
      </label>

      <motion.div
        whileFocus={{ scale: 1.01 }}
        className="
          group
          relative
          flex
          items-center
          h-[64px]
          rounded-2xl
          border
          border-white/10
          bg-[#1C2233]
          transition-all
          duration-300
          hover:border-violet-500/50
          focus-within:border-violet-500
          focus-within:shadow-[0_0_25px_rgba(139,92,246,.25)]
        "
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            h-full
            w-full
            bg-transparent
            px-5
            text-white
            outline-none
            placeholder:text-slate-500
          "
        />
      </motion.div>
    </div>
  );
}