import { motion } from "framer-motion";
import { INNOVATION_NODES } from "@/content/system";
import { InnovationSVG } from "./InnovationSVG";
import { InnovationHub } from "./InnovationHub";
import { InnovationNode } from "./InnovationNode";

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
              <span className="font-label text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                System Architecture
              </span>
            </motion.div>
            <h3 className="font-headline text-2xl font-black tracking-tighter text-white/90">
              The <span className="text-primary">Neural</span> Fabric
            </h3>
          </div>

          <InnovationSVG nodes={INNOVATION_NODES} />

          <InnovationHub />

          {INNOVATION_NODES.map((node, i) => (
            <InnovationNode key={node.id} node={node} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
