import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function App() {
  const gsapBoxRef = useRef(null);

  // Test GSAP Animation Loop
  useEffect(() => {
    if (gsapBoxRef.current) {
      gsap.to(gsapBoxRef.current, {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
        Animation Package Verification
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full">
        
        {/* 1. FRAMER MOTION TEST CARD */}
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center shadow-xl">
          <span className="text-sm font-semibold tracking-wider text-teal-400 uppercase">
            Framer Motion
          </span>
          <p className="text-xs text-slate-400">Hover or click to test physics trigger</p>
          
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="h-24 w-24 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 shadow-lg shadow-teal-500/20 cursor-pointer flex items-center justify-center font-bold text-slate-950"
          >
            Interact
          </motion.div>
        </div>

        {/* 2. GSAP TEST CARD */}
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center shadow-xl">
          <span className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
            GSAP Engine
          </span>
          <p className="text-xs text-slate-400">Continuous timeline loop test</p>
          
          <div
            ref={gsapBoxRef}
            className="h-24 w-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20 flex items-center justify-center font-bold text-white"
          >
            Spinning
          </div>
        </div>

      </div>
    </div>
  );
}
