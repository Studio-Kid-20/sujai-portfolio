import { motion } from "framer-motion";

import { MaterialIcon } from "@/components/ui/MaterialIcon";

const heroImg = "/assets/hero-visual.jpg";

type FloatingHeroCard = {
  animation: { y: number[] };
  className: string;
  delay?: number;
  duration: number;
  icon: string;
  kicker: string;
  title: string;
};

const floatingCards: FloatingHeroCard[] = [
  {
    icon: "auto_awesome",
    kicker: "Creative",
    title: "Visual Storytelling",
    className: "absolute -right-8 top-10 z-20 bg-secondary/80",
    animation: { y: [0, -12, 0] },
    duration: 4.5,
  },
  {
    icon: "deployed_code",
    kicker: "Build Layer",
    title: "Modern Front-End Craft",
    className: "absolute -left-10 bottom-12 z-20 bg-primary/80",
    animation: { y: [0, 10, 0] },
    duration: 5,
    delay: 1,
  },
];

export function HeroVisualCard() {
  return (
    <div className="relative lg:col-span-5">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
        className="relative"
      >
        <div className="absolute -inset-6 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute -inset-6 rounded-full bg-secondary/10 blur-[90px]" />

        <div className="relative z-10 aspect-[4/5] w-full rotate-3 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-2xl transition-transform duration-700 hover:rotate-0">
          <div className="h-full w-full overflow-hidden rounded-2xl">
            <img
              src={heroImg}
              alt="Creative interface illustration"
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </div>

          {floatingCards.map((card) => (
            <motion.div
              key={card.title}
              animate={card.animation}
              transition={{ duration: card.duration, repeat: Infinity, ease: "easeInOut", delay: card.delay ?? 0 }}
              className={`${card.className} flex items-center gap-3 rounded-2xl border border-white/20 p-4 shadow-xl backdrop-blur-md`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                <MaterialIcon name={card.icon} className="text-white" />
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-wider text-white/70">{card.kicker}</p>
                <p className="font-headline text-sm font-bold text-white">{card.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
