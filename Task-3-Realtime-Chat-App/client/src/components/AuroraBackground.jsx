import { motion } from "framer-motion";

const blobs = [
  {
    className:
      "top-[-180px] left-[-150px] h-[520px] w-[520px] bg-violet-600/30",
    duration: 20,
  },
  {
    className:
      "bottom-[-200px] right-[-150px] h-[520px] w-[520px] bg-fuchsia-500/25",
    duration: 22,
  },
  {
    className:
      "top-[30%] left-[45%] h-[350px] w-[350px] bg-cyan-400/15",
    duration: 18,
  },
];

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#080A12]">

      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[170px] ${blob.className}`}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.12, .95, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Vignette */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent,rgba(0,0,0,.35))]" />

    </div>
  );
}