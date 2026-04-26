import { motion } from "framer-motion";

const NODES = [
  { id: "vision", label: "Vision", x: -280, y: -160 },
  { id: "code", label: "Code", x: -280, y: 160 },
  { id: "design", label: "Design", x: 280, y: -160 },
  { id: "thinking", label: "Thinking", x: 280, y: 160 },
  { id: "ai", label: "AI", x: -380, y: 0 },
  { id: "google", label: "Google", x: 380, y: 0 },
];

export const InnovationFlow = () => {
  return (
    <section className="relative -mt-40 pt-40 pb-60 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-8">
        <div className="relative flex min-h-[800px] flex-col items-center justify-center">
          
          {/* Main Energy Line from Visual Storytelling (Overlapping for zero gap) */}
          <div className="absolute top-0 left-1/2 h-[400px] w-[2px] -translate-x-1/2 overflow-hidden bg-white/5">
            <motion.div
              animate={{ y: [-100, 400] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="h-40 w-full bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_20px_#b6a0ff]"
            />
          </div>

          {/* SVG Connection Layer with Real Circuit Paths (Angular) */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(182, 160, 255, 0)" />
                <stop offset="50%" stopColor="#b6a0ff" />
                <stop offset="100%" stopColor="rgba(182, 160, 255, 0)" />
              </linearGradient>
              <filter id="neonBlur">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {NODES.map((node, i) => {
              const startX = 500;
              const startY = 400;
              const endX = 500 + node.x;
              const endY = 400 + node.y;
              
              // Circuit path: Middle Horizontal -> Final vertical
              const midX = startX + (node.x * 0.4);
              const path = `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;

              return (
                <g key={node.id}>
                  {/* Subtle static trace */}
                  <path d={path} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  {/* Glowing Pulse */}
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="url(#glowLine)"
                    strokeWidth="3"
                    strokeDasharray="40 200"
                    animate={{ strokeDashoffset: [-240, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.3
                    }}
                    filter="url(#neonBlur)"
                  />
                  {/* Glowing joint at the start */}
                  <circle cx={startX} cy={startY} r="3" fill="#b6a0ff" className="animate-pulse" />
                </g>
              );
            })}
          </svg>

          {/* Central Sujai Hub - Microchip Style */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="group relative z-20 flex h-40 w-40 items-center justify-center rounded-[2.5rem] border border-white/20 bg-[#0a0a0a] shadow-[0_0_80px_rgba(182,160,255,0.15)] transition-all hover:shadow-[0_0_100px_rgba(182,160,255,0.3)]"
          >
            {/* Chip Logic Pins */}
            <div className="absolute -left-3 top-1/2 flex -translate-y-1/2 flex-col gap-3">
              {[...Array(5)].map((_, i) => <div key={i} className="h-1.5 w-4 rounded-full bg-white/20 group-hover:bg-primary/60 transition-colors" />)}
            </div>
            <div className="absolute -right-3 top-1/2 flex -translate-y-1/2 flex-col gap-3">
              {[...Array(5)].map((_, i) => <div key={i} className="h-1.5 w-4 rounded-full bg-white/20 group-hover:bg-primary/60 transition-colors" />)}
            </div>
            <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 gap-3">
              {[...Array(5)].map((_, i) => <div key={i} className="h-4 w-1.5 rounded-full bg-white/20 group-hover:bg-primary/60 transition-colors" />)}
            </div>
            <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 gap-3">
              {[...Array(5)].map((_, i) => <div key={i} className="h-4 w-1.5 rounded-full bg-white/20 group-hover:bg-primary/60 transition-colors" />)}
            </div>

            {/* Inner Glow */}
            <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 to-transparent opacity-60" />
            <span className="relative z-10 font-headline text-3xl font-black tracking-tighter text-white">SUJAI</span>
          </motion.div>

          {/* Node Cards - High Fidelity Design */}
          {NODES.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              style={{
                position: "absolute",
                top: `calc(400px + ${node.y}px)`,
                left: `calc(500px + ${node.x}px)`,
                transform: "translate(-50%, -50%)"
              }}
              className="z-30 group"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-[2.5rem] border border-white/10 bg-[#0d0d0d] shadow-2xl transition-all duration-300 group-hover:border-primary/60 group-hover:bg-[#111] group-hover:shadow-[0_0_50px_rgba(182,160,255,0.2)]">
                <span className="font-label text-[12px] font-black uppercase tracking-[0.25em] text-white group-hover:text-primary transition-colors text-center px-2 leading-tight">
                  {node.label}
                </span>
              </div>
              {/* Connector Dot */}
              <div className={`absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full border border-primary/50 bg-background shadow-[0_0_10px_#b6a0ff] ${node.x > 0 ? "-left-1" : "-right-1"}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

