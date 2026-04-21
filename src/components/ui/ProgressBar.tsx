import { motion } from "framer-motion";

type ProgressBarProps = {
  percent: number;
  colorClass: string;
};

export function ProgressBar({ percent, colorClass }: ProgressBarProps) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
      <motion.div
        className={`h-full rounded-full ${colorClass}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    </div>
  );
}
