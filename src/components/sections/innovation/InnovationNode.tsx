import { motion } from "framer-motion";
import type { InnovationNode as InnovationNodeType } from "@/types";

interface InnovationNodeProps {
  node: InnovationNodeType;
  index: number;
}

export const InnovationNode = ({ node, index }: InnovationNodeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 + index * 0.05 }}
      style={{
        position: "absolute",
        top: `calc(425px + ${node.y}px)`,
        left: `calc(600px + ${node.x}px)`,
        transform: "translate(-50%, -50%)",
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
  );
};
