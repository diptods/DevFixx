import { CheckCircle2, ShieldCheck, Flame, ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-900 px-4 text-white">
      <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-xl text-center">
        
        {/* Core Icon Test Row */}
        <div className="flex justify-center gap-6 mb-6">
          <CheckCircle2 className="h-8 w-8 text-emerald-400 animate-pulse" />
          <ShieldCheck className="h-8 w-8 text-blue-400" />
          <Flame className="h-8 w-8 text-orange-400" />
        </div>

        <h1 className="text-2xl font-bold tracking-tight mb-2">
          Lucide Icons Loaded
        </h1>
        
        <p className="text-sm text-slate-400 mb-6">
          If you can see the green checkmark, blue shield, and orange flame icons above, your vector graphics toolkit is functioning.
        </p>

        {/* Button with inline Icon */}
        <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2.5 text-sm font-semibold transition-colors duration-200">
          Continue Development
          <ArrowRight className="h-4 w-4 text-slate-400" />
        </button>

      </div>
    </div>
  );
}
