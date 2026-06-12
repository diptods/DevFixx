import  { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod.js'
import { z } from 'zod'
import axios from 'axios'
import { supabase } from './supabaseClient'

const schema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  msg: z.string().min(10, "Min 10 chars required")
})

export default function App() {
  const [logs, setLogs] = useState([])
  const [dbOk, setDbOk] = useState('Checking...')
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })

  const addLog = (text, type = 'info') => {
    setLogs(p => [{ id: Math.random(), text, type, time: new Date().toLocaleTimeString() }, ...p])
  }

  useEffect(() => {
    // addLog('System online. Testing database handshake...')
    supabase.from('customer_messages').select('id').limit(1)
      .then(({ error }) => {
        setDbOk(error && error.code !== 'PGRST116' ? 'Error' : 'Connected')
        addLog(error && error.code !== 'PGRST116' ? `DB Error: ${error.message}` : 'DB connected successfully.')
      })
  }, [])

  const onSubmit = async (data) => {
    addLog(`Starting data pipeline for ${data.name}...`)
    try {
      const { error } = await supabase.from('customer_messages').insert([{ customer_name: data.name, customer_email: data.email, message_body: data.msg }])
      addLog(error ? `DB bypass active: ${error.message}` : 'DB row written.', error ? 'warning' : 'success')

      const res = await axios.post('https://typicode.com', { title: data.name, body: data.msg })
      if (res.status === 201) addLog(`Axios success: API status ${res.status}`, 'success')
      
      reset()
    } catch (err) {
      addLog(`Pipeline error: ${err.message}`, 'error')
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 md:p-8 font-sans">
      <main className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Side: Control Form */}
        <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl flex flex-col justify-between">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h1 className="text-xl font-bold tracking-tight">Stack Control Panel</h1>
            <div className="text-xs bg-slate-950 p-2 rounded border border-slate-800 flex justify-between">
              <span>Database Status: <strong className={dbOk === 'Connected' ? 'text-emerald-400' : 'text-amber-400'}>{dbOk}</strong></span>
              <span>Axios/HTTP: <strong className="text-emerald-400">Ready</strong></span>
            </div>

            <div>
              <input {...register('name')} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm focus:border-teal-500 outline-none" placeholder="Company Name" />
              {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <input {...register('email')} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm focus:border-teal-500 outline-none" placeholder="Email Account" />
              {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <textarea { ...register('msg')} rows={3} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm focus:border-teal-500 outline-none resize-none" placeholder="Validation Note (Min 10 characters)" />
              {errors.msg && <p className="text-rose-400 text-xs mt-1">{errors.msg.message}</p>}
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold p-2.5 rounded-lg text-xs tracking-wider uppercase transition-colors disabled:bg-slate-800 disabled:text-slate-500 cursor-pointer">
              {isSubmitting ? 'Processing Network Logs...' : 'Submit Test Transaction'}
            </button>
          </form>
        </section>

        {/* Right Side: Telemetry Terminal Output */}
        <section className="bg-slate-950 border border-slate-800 rounded-xl shadow-xl flex flex-col h-400px md:h-auto overflow-hidden">
          <header className="bg-slate-900 border-b border-slate-800 px-4 py-3 text-xs font-mono font-bold text-slate-300">Live Console Log Monitor</header>
          <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-2">
            {logs.length === 0 ? (
              <p className="text-slate-600 text-center mt-20">Console silent. Trigger the form submission to run pipeline checks.</p>
            ) : (
              logs.map(log => (
                <div key={log.id} className={`p-2 rounded border text-[11px] leading-tight ${
                  log.type === 'success' ? 'bg-emerald-950/40 border-emerald-900/50 text-emerald-300' :
                  log.type === 'error' ? 'bg-rose-950/40 border-rose-900/50 text-rose-300' :
                  log.type === 'warning' ? 'bg-amber-950/40 border-amber-900/50 text-amber-300' : 'bg-slate-900/40 border-slate-800/60 text-slate-300'
                }`}>
                  <span className="text-slate-500 select-none">[{log.time}]</span> {log.text}
                </div>
              ))
            )}
          </div>
        </section>

      </main>
    </div>
  )
}