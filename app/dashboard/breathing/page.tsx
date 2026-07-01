'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'

export default function BreathingPage() {
  const [isBreathing, setIsBreathing] = useState(false)
  const [duration, setDuration] = useState(4)

  return (
    <div className="max-w-2xl mx-auto space-y-8 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <h1 className="text-4xl font-bold mb-2">Breathing Exercise</h1>
      </motion.div>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
        <motion.div animate={isBreathing ? { scale: [1, 1.3, 1] } : { scale: 1 }} transition={{ duration, repeat: Infinity }} className="w-48 h-48 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
          <p className="text-3xl font-bold text-purple-600">Breathe</p>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-6 w-full max-w-sm">
        <button onClick={() => setIsBreathing(!isBreathing)} className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold flex items-center justify-center gap-2">
          {isBreathing ? <><Pause className="w-6 h-6" /> Pause</> : <><Play className="w-6 h-6" /> Start</>}
        </button>
        <div>
          <label className="block text-sm font-medium mb-2">Duration: {duration}s</label>
          <input type="range" min="3" max="8" value={duration} onChange={(e) => setDuration(Number(e.target.value))} disabled={isBreathing} className="w-full" />
        </div>
      </motion.div>
    </div>
  )
}