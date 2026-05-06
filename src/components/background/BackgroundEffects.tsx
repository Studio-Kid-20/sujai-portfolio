import { useLocation } from "react-router-dom";
import { DotGrid, FloatingDecor } from "@/components/background/BackgroundDecor";

export const BackgroundEffects = () => {
  const { pathname } = useLocation();

  return (
    <>
      {/* Background Depth Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-secondary/20 blur-[100px] animate-pulse delay-700" />
        <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] rounded-full bg-tertiary/10 blur-[80px] animate-pulse delay-1000" />

        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Page Specific Decor Layer */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        {pathname === "/" ? <DotGrid /> : <FloatingDecor />}
      </div>
    </>
  );
};
