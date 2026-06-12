export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 px-4 text-center text-white selection:bg-emerald-500 selection:text-slate-900">
      <div className="max-w-md space-y-6 rounded-2xl border border-slate-800 bg-slate-950/50 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-emerald-400 ring-1 ring-emerald-500/20 ring-inset">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          Vite + Tailwind v4 Active
        </div>

        {/* Heading */}
        <h1 className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
          Setup Complete!
        </h1>

        {/* Subtext */}
        <p className="text-base text-slate-400 leading-relaxed">
          Your utility classes are compiling natively through the Vite bundler. All layout tools, animations, and typography variables are ready to use.
        </p>

        {/* Action Button */}
        <button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:bg-emerald-400 hover:shadow-emerald-400/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 active:scale-[0.98]">
          Start Building 
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </button>

      </div>
    </div>
  )
}
