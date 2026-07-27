import { motion } from "framer-motion";

const blobs = [
  "top-[-120px] left-[-80px] bg-pink-300/35",
  "bottom-[-140px] right-[-90px] bg-violet-300/30",
  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-200/30",
];

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#FFFDFB] via-[#FFF7FA] to-[#F7F4FF]">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute h-80 w-80 rounded-full blur-[120px] ${blob}`}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 15 + i * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 backdrop-blur-[80px]" />
    </div>
  );
}