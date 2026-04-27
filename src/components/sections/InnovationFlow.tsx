import { motion } from "framer-motion";

const NODES = [
  { id: "vision", label: "Vision", x: -320, y: -220, side: "left" },
  { id: "code", label: "Code", x: -320, y: 220, side: "left" },
  { id: "ai", label: "AI", x: -480, y: 0, side: "left" },
  { id: "design", label: "Design", x: 320, y: -220, side: "right" },
  { id: "thinking", label: "Thinking", x: 320, y: 220, side: "right" },
  { id: "google", label: "Google", x: 480, y: 0, side: "right" },
];

export const InnovationFlow = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl px-8">
        <div className="relative flex min-h-[850px] flex-col items-center justify-center">
          
          {/* Section Heading */}
          <div className="absolute top-0 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 mb-3"
            >
              <span className="font-label text-[10px] font-bold uppercase tracking-[0.4em] text-primary">System Architecture</span>
            </motion.div>
            <h3 className="font-headline text-2xl font-black tracking-tighter text-white/90">The <span className="text-primary">Neural</span> Fabric</h3>
          </div>

          {/* SVG Connection Layer - OPTIMIZED GEOMETRY */}
          <svg 
            className="absolute inset-0 h-full w-full pointer-events-none transform-gpu" 
            viewBox="0 0 1200 850" 
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="neonPulse" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(182, 160, 255, 0)" />
                <stop offset="50%" stopColor="#b6a0ff" />
                <stop offset="100%" stopColor="rgba(182, 160, 255, 0)" />
              </linearGradient>
            </defs>

            {NODES.map((node, i) => {
              const startX = 600;
              const startY = 425;
              const endX = 600 + node.x;
              const endY = 425 + node.y;
              
              const hubExitX = node.side === "left" ? startX - 100 : startX + 100;
              const path = `M ${startX} ${startY} L ${hubExitX} ${startY} L ${hubExitX} ${endY} L ${endX} ${endY}`;

              return (
                <g key={node.id}>
                  <path d={path} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="url(#neonPulse)"
                    strokeWidth="2.5"
                    strokeDasharray="60 300"
                    animate={{ strokeDashoffset: [-360, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.3
                    }}
                    style={{ filter: "drop-shadow(0 0 4px #b6a0ff)" }}
                  />
                  
                  <circle cx={startX} cy={startY} r="3.5" fill="#b6a0ff" />
                  <circle cx={endX} cy={endY} r="3.5" fill="#b6a0ff" />
                </g>
              );
            })}
          </svg>


          {/* Central Sujai Hub - Perfected Geometry with Hover Blink */}
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
                ease: "easeInOut" 
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

          {/* Peripheral Node Cards - Pixel Perfect Placement with Hover Glow */}
          {NODES.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (i * 0.05) }}
              style={{
                position: "absolute",
                top: `calc(425px + ${node.y}px)`,
                left: `calc(600px + ${node.x}px)`,
                transform: "translate(-50%, -50%)"
              }}
              className="z-30 group cursor-pointer"
            >
              <div className="relative flex h-24 w-24 flex-col items-center justify-center rounded-[2.5rem] border border-white/10 bg-neutral-900/60 shadow-xl backdrop-blur-2xl transition-all duration-300 group-hover:border-primary/60 group-hover:bg-neutral-900/90 group-hover:shadow-[0_0_60px_rgba(182,160,255,0.4)]">
                {/* Internal Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                
                <span className="relative z-10 font-body text-[9px] font-bold uppercase tracking-[0.15em] text-white">
                  {node.label}
                </span>
                <div className="relative z-10 mt-2 h-0.5 w-6 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
