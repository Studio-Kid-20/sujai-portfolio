import { motion } from "framer-motion";

export const InnovationHub = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="group relative z-20 flex h-48 w-48 items-center justify-center cursor-pointer"
    >
      {/* Symmetrical Orbit Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-primary/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-4 rounded-full border border-primary/10 border-dashed"
      />

      {/* Hub Hover Glow - Long Blink Animation */}
      <motion.div
        whileHover={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-[3rem] bg-primary/20 blur-[40px] opacity-0"
      />

      {/* Core Chip - Clean & Solid */}
      <div className="relative flex h-36 w-36 items-center justify-center rounded-[2.5rem] border-2 border-white/10 bg-neutral-950 shadow-[0_0_80px_rgba(182,160,255,0.15)] transition-all group-hover:border-primary/40 group-hover:shadow-[0_0_100px_rgba(182,160,255,0.3)]">
        <div className="flex flex-col items-center">
          <span className="font-body text-[7px] font-bold uppercase tracking-[0.5em] text-primary/80 mb-1">CORE</span>
          <span className="font-headline text-xl font-black tracking-tight text-white">SUJAI</span>
          <div className="mt-3 flex gap-1.5">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#b6a0ff]"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
