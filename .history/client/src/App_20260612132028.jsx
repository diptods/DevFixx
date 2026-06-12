import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { supabase } from './supabaseClient' // Imports your database client layer

// ==========================================
// 1. INLINE MINIMALIST SVG ICONS
// ==========================================
const DatabaseIcon = () => (
  <svg xmlns="http://w3.org" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
)
const ServerIcon = () => (
  <svg xmlns="http://w3.org" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
)
const SendIcon = () => (
  <svg xmlns="http://w3.org" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
)

// ==========================================
// 2. DATA VALIDATION SCHEMA (ZOD)
// ==========================================
const testFormSchema = z.object({
  clientName: z.string().min(2, "Client Name must be at least 2 characters."),
  contactEmail: z.string().email("Must be a valid business email domain."),
  storeType: z.enum(["retail", "wholesale"], { errorMap: () => ({ message: "Select a valid business module." }) }),
  testMessage: z.string().min(10, "Message stream requires a minimum of 10 characters.")
})

// ==========================================
// 3. MAIN COMPONENT RUNTIME
// ==========================================
export default function App() {
  const mainHeaderRef = useRef(null)
  const [terminalLogs, setTerminalLogs] = useState([])
  const [supabaseStatus, setSupabaseStatus] = useState('checking')

  // Setup form hooks with Zod schema resolution
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(testFormSchema)
  })

  // Append background logging telemetry to our mock console panel
  const appendSystemLog = (text, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString()
    setTerminalLogs(prev => [{ id: Date.now() + Math.random(), text, type, timestamp }, ...prev])
  }

  // Verify external database availability when page initializes
  useEffect(() => {
    appendSystemLog('BOOTSTAGE: Initializing stack diagnostic testing routine...')
    
    async function checkSupabaseHandshake() {
      try {
        const { error } = await supabase.from('customer_messages').select('id').limit(1)
        if (error && error.code === 'PGRST116') {
          setSupabaseStatus('connected')
          appendSystemLog('SUPABASE: Handshake successful! API end-point discovered.')
        } else if (error) {
          throw error
        } else {
          setSupabaseStatus('connected')
          appendSystemLog('SUPABASE: Connection verified. Table schemas available.')
        }
      } catch (err) {
        setSupabaseStatus('error')
        appendSystemLog(`SUPABASE ERROR: API Connection failed. Details: ${err.message}`, 'error')
      }
    }

    checkSupabaseHandshake()

    // Trigger GSAP entrance layout animations
    gsap.fromTo(mainHeaderRef.current,
      { opacity: 0, scale: 0.98, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    )
  }, [])

  // Process the asynchronous pipeline diagnostic stream
  const runDiagnosticPipeline = async (data) => {
    appendSystemLog(`PIPELINE: Commencing diagnostic transaction build for: ${data.clientName}`)
    try {
      appendSystemLog('DATABASE: Writing structural payloads to Supabase tables...')
      const { error: dbError } = await supabase
        .from('customer_messages')
        .insert([{ 
          customer_name: data.clientName, 
          customer_email: data.contactEmail, 
          message_body: `[${data.storeType.toUpperCase()}] ${data.testMessage}` 
        }])

      if (dbError) {
        appendSystemLog(`DB NOTICE: Table row bypass triggered: ${dbError.message}`, 'warning')
      } else {
        appendSystemLog('DB SUCCESS: Row record committed successfully to the database!', 'success')
      }

      appendSystemLog('AXIOS API: Dispatching JSON tokens to test endpoint...')
      const response = await axios.post('https://typicode.com', {
        title: `Dashboard Action Trigger from ${data.clientName}`,
        body: data.testMessage
      })

      if (response.status === 201) {
        appendSystemLog(`AXIOS SUCCESS: API returned HTTP ${response.status} (Verified Mock Endpoint).`, 'success')
      }

      appendSystemLog('CORE CONSOLE RESULT: Stack parameters working cleanly!', 'success')
      reset()
    } catch (error) {
      appendSystemLog(`PIPELINE EXCEPTION: Process interrupted: ${error.message}`, 'error')
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4 md:p-8 font-sans relative overflow-hidden">
      {/* Visual background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <main ref={mainHeaderRef} className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* CONTROL BOARD PANEL (Left Column) */}
        <section className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <h1 className="text-xl font-black tracking-tight text-white flex items-center gap-2">Stack Infrastructure</h1>
              <p className="text-xs text-slate-400 mt-1">Diagnostic portal tracking validation and active state pipelines.</p>
            </div>

            {/* Health Ticker Badges */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <DatabaseIcon />
                  <span className="text-xs font-semibold text-slate-300">Supabase</span>
                </div>
                {supabaseStatus === 'connected' && <span className="w-2 h-2 bg-emerald-500 rounded-full" />}
                {supabaseStatus === 'checking' && <span className="w-2 h-2 bg-amber-500 rounded-full animate-ping" />}
                {supabaseStatus === 'error' && <span className="w-2 h-2 bg-rose-500 rounded-full" />}
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ServerIcon />
                  <span className="text-xs font-semibold text-slate-300">Axios/Http</span>
                </div>
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              </div>
            </div>

            {/* Verification Form */}
            <form onSubmit={handleSubmit(runDiagnosticPipeline)} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Company / Store Identity</label>
                <input 
                  {...register('clientName')}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-all"
                  placeholder="e.g., Dhaka Wholesale Fabrics"
                />
                {errors.clientName && <p className="text-rose-400 text-xs mt-1 font-medium">{errors.clientName.message}</p>}
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Business Email Account</label>
                <input 
                  {...register('contactEmail')}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-all"
                  placeholder="admin@clothstore.com"
                />
                {errors.contactEmail && <p className="text-rose-400 text-xs mt-1 font-medium">{errors.contactEmail.message}</p>}
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Logistics Framework</label>
                <select 
                  {...register('storeType')}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none text-slate-300"
                >
                  <option value="retail">Retail Store Model (B2C)</option>
                  <option value="wholesale">Wholesale Operations Dashboard (B2B)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Validation Telemetry Note</label>
                <textarea 
                {...register('testMessage')}rows={3}className="w-full bg-slate-950 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-all resize-none"placeholder="Type a message (at least 10 characters)..."/>{errors.testMessage && {errors.testMessage.message}}{isSubmitting ? Running System Diagnostics... : (<>Submit Active Test Pipeline</>)}{/* TELEMETRY MONITOR TERMINAL (Right Column) */}Live Telemetry Event Log Monitor{terminalLogs.length === 0 ? (System console silent. Submit the control form to initiate end-to-end framework monitoring.) : (terminalLogs.map(log => (<motion.divkey={log.id}initial={{ opacity: 0, x: -5 }}animate={{ opacity: 1, x: 0 }}exit={{ opacity: 0 }}transition={{ duration: 0.15 }}className={p-3 rounded-lg border flex items-start space-x-2 leading-relaxed ${ log.type === 'success' ? 'bg-emerald-950/40 border-emerald-900/50 text-emerald-300' : log.type === 'error' ? 'bg-rose-950/40 border-rose-900/50 text-rose-300' : log.type === 'warning' ? 'bg-amber-950/40 border-amber-900/50 text-amber-300' : 'bg-slate-900/40 border-slate-800/60 text-slate-300' }}>[{log.timestamp}]{log.text}</motion.div>)))})}