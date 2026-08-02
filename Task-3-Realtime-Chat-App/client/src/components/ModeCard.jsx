import { motion } from "framer-motion";

export default function ModeCard({
  active,
  icon,
  title,
  subtitle,
  onClick,
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.015, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`
        relative
        w-full
        overflow-hidden
        rounded-3xl
        border
        px-5
        py-4
        text-left
        transition-all
        duration-300

        ${
          active
            ? "border-violet-500 bg-[#24293A] shadow-[0_0_35px_rgba(168,85,247,.28)]"
            : "border-white/10 bg-[#1B2030] hover:border-violet-500/40 hover:bg-[#22283A]"
        }
      `}
    >
      <div className="flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Icon */}
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-violet-600
              via-fuchsia-500
              to-pink-500
              text-white
              shadow-lg
            "
          >
            {icon}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              {title}
            </h3>

            <p className="mt-1 text-[13px] leading-5 text-slate-400">
              {subtitle}
            </p>
          </div>

        </div>

        {/* Radio */}
        <div
          className={`
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            border-2
            transition-all
            duration-300

            ${
              active
                ? "border-violet-500"
                : "border-slate-500"
            }
          `}
        >
          <div
            className={`
              h-3
              w-3
              rounded-full
              bg-violet-500
              transition-all
              duration-300

              ${
                active
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-0"
              }
            `}
          />
        </div>

      </div>
    </motion.button>
  );
}