import { motion } from "framer-motion";

export const DotGrid = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[50] overflow-hidden transform-gpu">
      <div className="flex h-full w-full flex-wrap justify-center gap-16 p-20">
        {Array.from({ length: 120 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, scale: 1 }}
            whileHover={{ 
              scale: 3, 
              backgroundColor: "#b6a0ff",
              boxShadow: "0 0 20px #b6a0ff",
              opacity: 1,
              zIndex: 100
            }}
            className="h-1.5 w-1.5 rounded-full bg-white/30 pointer-events-auto cursor-crosshair transition-colors duration-200"
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        ))}
      </div>
    </div>
  );
};

export const FloatingDecor = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden transform-gpu">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
          style={{
            left: `${(i * 12) % 95}%`,
            top: `${(i * 17) % 95}%`,
          }}
          className="absolute"
        >
          {/* Glowing Orb - Optimized blur */}
          <div className="h-[20rem] w-[20rem] rounded-full bg-gradient-to-br from-primary/30 via-tertiary/20 to-transparent blur-[100px]" />
          
          {/* Floating Geometric Element */}
          <div className="ml-32 mt-16 h-12 w-12 rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-xl" />
        </motion.div>
      ))}
    </div>
  );
};





