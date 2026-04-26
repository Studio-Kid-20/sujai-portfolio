import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

/**
 * Interactive Dot that "Pops" when clicked.
 */
const InteractiveDot = ({ index }: { index: number }) => {
  const [isPopped, setIsPopped] = useState(false);

  const handlePop = useCallback(() => {
    if (isPopped) return;
    setIsPopped(true);
    // Respawn after 3 seconds
    setTimeout(() => setIsPopped(false), 3000);
  }, [isPopped]);

  return (
    <AnimatePresence>
      {!isPopped && (
        <motion.div
          key={`dot-${index}`}
          initial={{ opacity: 0.15, scale: 1 }}
          exit={{ 
            scale: 2.5, 
            opacity: 0, 
            filter: "blur(10px)",
            transition: { duration: 0.3 } 
          }}
          whileHover={{ 
            scale: 4, 
            backgroundColor: "#b6a0ff",
            boxShadow: "0 0 40px #b6a0ff, 0 0 80px #ff6c95, 0 0 120px rgba(182,160,255,0.4)",
            opacity: 1,
            zIndex: 100
          }}
          onClick={handlePop}
          className="h-2 w-2 rounded-full bg-white/40 pointer-events-auto cursor-pointer transition-colors duration-200"
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
      )}
    </AnimatePresence>
  );
};

export const DotGrid = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[50] overflow-hidden">
      <div className="flex h-full w-full flex-wrap justify-center gap-16 p-20">
        {Array.from({ length: 200 }).map((_, i) => (
          <InteractiveDot key={i} index={i} />
        ))}
      </div>
    </div>
  );
};

/**
 * Interactive Orb that "Pops" when clicked.
 */
const InteractiveOrb = ({ index }: { index: number }) => {
  const [isPopped, setIsPopped] = useState(false);

  const handlePop = useCallback(() => {
    if (isPopped) return;
    setIsPopped(true);
    // Respawn after 5 seconds
    setTimeout(() => setIsPopped(false), 5000);
  }, [isPopped]);

  return (
    <AnimatePresence>
      {!isPopped && (
        <motion.div
          key={`orb-${index}`}
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -150, 0],
            x: [0, 80, 0],
            rotate: [0, 180, 0],
            opacity: [0.2, 0.7, 0.2]
          }}
          exit={{ 
            scale: 2, 
            opacity: 0, 
            filter: "blur(50px)",
            transition: { duration: 0.5 } 
          }}
          whileHover={{ scale: 1.05, opacity: 0.8 }}
          onClick={handlePop}
          transition={{
            duration: 10 + index * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 2
          }}
          style={{
            left: `${(index * 7) % 95}%`,
            top: `${(index * 13) % 95}%`,
          }}
          className="absolute pointer-events-auto cursor-pointer"
        >
          {/* Glowing Orb */}
          <div className="h-[25rem] w-[25rem] rounded-full bg-gradient-to-br from-primary/40 via-tertiary/30 to-transparent blur-[150px]" />
          
          {/* Floating Geometric Element */}
          <div className="ml-40 mt-20 h-16 w-16 rounded-[2.5rem] border border-white/40 bg-white/10 shadow-[0_0_60px_rgba(182,160,255,0.5)] backdrop-blur-2xl" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const FloatingDecor = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <InteractiveOrb key={i} index={i} />
      ))}
    </div>
  );
};





