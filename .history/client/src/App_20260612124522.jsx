import { useEffect } from "react";
import Lenis from "@studio-freight/lenis"; // Or use 'lenis' if upgraded

export default function App() {
  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.5, // Speed of the scroll easing
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing profile
      smoothWheel: true,
    });

    // 2. Setup the RequestAnimationFrame (RAF) render loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-slate-900 text-white font-sans selection:bg-purple-500">
      
      {/* Visual Fixed Indicator */}
      <div className="fixed top-4 right-4 z-50 rounded-full bg-purple-500/20 px-4 py-1.5 text-xs font-semibold text-purple-300 ring-1 ring-purple-500/30 backdrop-blur-md">
        Lenis Engine Active
      </div>

      {/* SECTION 1 */}
      <section className="flex min-h-screen flex-col items-center justify-center p-6 text-center border-b border-slate-800">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent sm:text-6xl">
          Lenis Smooth Scroll
        </h1>
        <p className="mt-4 text-slate-400 max-w-md">
          Scroll down using your mouse wheel or trackpad to experience the physics-based inertial easing animation.
        </p>
        <div className="mt-12 animate-bounce text-2xl text-purple-400">↓</div>
      </section>

      {/* SECTION 2 */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-6 text-center border-b border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-4">Buttery Smooth Inertia</h2>
        <p className="text-slate-400 max-w-lg leading-relaxed">
          Notice how the page doesn't instantly snap or stop abruptly? Lenis intercepts the standard mouse wheel triggers to add weight and slide effects to your transitions.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-bold text-emerald-400 mb-4">End of the Track</h2>
        <p className="text-slate-400 max-w-md">
          If the scroll flows smoothly past section changes without hard stops, your library is successfully compiled!
        </p>
      </section>

    </div>
  );
}
