import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/30 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[150px]" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            Modern Web Development Agency
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-tight">
            Building Modern Websites That
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}Grow Businesses
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            We design and develop premium websites,
            landing pages and web applications that help
            brands stand out and convert more customers.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-8 py-4 bg-purple-600 rounded-xl flex items-center gap-2 hover:scale-105 transition">
              Start Project
              <ArrowRight size={18} />
            </button>

            <button className="px-8 py-4 border border-white/10 rounded-xl hover:bg-white/5">
              View Work
            </button>
          </div>
        </div>

        <div className="relative h-[500px]">
          <div className="absolute top-0 right-0 w-72 h-44 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
            <h3 className="font-semibold">📈 Growth Analytics</h3>
            <p className="mt-4 text-4xl font-bold">+120%</p>
          </div>

          <div className="absolute top-40 left-0 w-72 h-44 rounded-3xl bg-purple-500/10 backdrop-blur-xl border border-purple-500/20 p-6">
            <h3 className="font-semibold">⚡ Performance</h3>
            <p className="mt-4 text-4xl font-bold">98/100</p>
          </div>

          <div className="absolute bottom-0 right-20 w-72 h-44 rounded-3xl bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/20 p-6">
            <h3 className="font-semibold">🎨 Premium UI</h3>
            <p className="mt-4 text-4xl font-bold">Modern</p>
          </div>
        </div>

      </div>
    </section>
  );
}