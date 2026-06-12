import React from 'react'
import { motion } from 'framer-motion'

// --- SAMPLE PORTFOLIO IMAGES ---
const RETAIL_IMAGE = "https://unsplash.com"
const WHOLESALE_IMAGE = "https://unsplash.com"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/30">
      
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* 1. NAVIGATION BAR */}
      <nav className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-black text-white tracking-tight">
            Dev<span className="text-teal-400">Fixx</span>
          </div>
          <div className="flex items-center space-x-6 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Our Work</a>
            <a href="#contact" className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-4 py-2 rounded-lg font-bold transition-colors">Hire Us</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO HIGHLIGHT INTRO SECTION */}
      <header className="max-w-4xl mx-auto text-center px-4 pt-20 pb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
            Premium Web Development
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mt-4 leading-tight">
            We Build High-Scale Systems For <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Clothing & Wholesale Stores</span>
          </h1>
          <p className="text-slate-400 mt-6 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Beautiful retail platforms and complex wholesale e-commerce dashboards engineered with real-time analytics pipelines.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#contact" className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-teal-500/10 transition-all text-sm uppercase tracking-wider">
              Launch Your Store
            </a>
            <a href="#portfolio" className="border border-slate-800 hover:border-slate-700 bg-slate-900/50 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 transition-all">
              View Portfolios
            </a>
          </div>
        </motion.div>
      </header>

      {/* 3. BUSINESS SERVICES METRICS CONTAINER */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-lg mb-4">🛒</div>
          <h3 className="text-lg font-bold text-white mb-2">B2C Retail Fashion Stores</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Fast, beautiful interfaces matching your branding with elegant animation effects and instant checkout capabilities.</p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-lg mb-4">📊</div>
          <h3 className="text-lg font-bold text-white mb-2">B2B Bulk Wholesale Engines</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Complex tiered volume discounts configurations, bulk product catalogs variations matrices, and real-time ledger records.</p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-lg mb-4">⚡</div>
          <h3 className="text-lg font-bold text-white mb-2">Real-time Telemetry</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Live customer data capturing systems, streaming messaging logs feeds, dynamic carts storage without backend server lags.</p>
        </div>
      </section>

      {/* 4. SELECTION PORTFOLIO CASE STUDIES */}
      <section id="portfolio" className="max-w-6xl mx-auto px-4 py-16 border-t border-slate-900 relative z-10">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">Recent Client Deployments</h2>
          <p className="text-slate-500 text-sm mt-1">Explore some production architectures deployed globally across online industries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 relative aspect-video">
              <img src={RETAIL_IMAGE} alt="Retail Design" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80" />
            </div>
            <h4 className="text-lg font-bold text-white mt-4 group-hover:text-teal-400 transition-colors">VogueThread Apparel Portal</h4>
            <p className="text-slate-400 text-sm mt-1">High-end retail apparel responsive platform utilizing cached product asset layers.</p>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 relative aspect-video">
              <img src={WHOLESALE_IMAGE} alt="Wholesale Logistics Panel" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80" />
            </div>
            <h4 className="text-lg font-bold text-white mt-4 group-hover:text-teal-400 transition-colors">FabricMatrix Hub Systems</h4>
            <p className="text-slate-400 text-sm mt-1">B2B bulk wholesale management application mapping structured relational volume accounts.</p>
          </div>
        </div>
      </section>

      {/* 5. SIMPLIFIED INTERACTION FOOTER FOOTPRINT */}
      <footer id="contact" className="border-t border-slate-900 bg-slate-950/40 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold text-white tracking-tight">Ready to build your system framework?</h3>
          <p className="text-slate-400 text-sm mt-2 max-w-sm mx-auto">Get connected today. Our solutions optimize store loading metrics to scale sales structures safely.</p>
          <div className="mt-6">
            <a href="mailto:info@devfixx.com" className="text-sm font-semibold text-teal-400 hover:text-teal-300 underline underline-offset-4">
              info@devfixx.com
            </a>
          </div>
          <div className="mt-8 text-xs text-slate-600 font-mono">
            &copy; {new Date().getFullYear()} DevFixx Technology Labs. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  )
}
