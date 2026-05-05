import { motion } from "framer-motion";
import type { InnovationNode } from "@/types";

interface InnovationSVGProps {
  nodes: InnovationNode[];
}

export const InnovationSVG = ({ nodes }: InnovationSVGProps) => {
  return (
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

      {nodes.map((node, i) => {
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
                delay: i * 0.3,
              }}
              style={{ filter: "drop-shadow(0 0 4px #b6a0ff)" }}
            />

            <circle cx={startX} cy={startY} r="3.5" fill="#b6a0ff" />
            <circle cx={endX} cy={endY} r="3.5" fill="#b6a0ff" />
          </g>
        );
      })}
    </svg>
  );
};
