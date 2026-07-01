'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MOODS } from '@/constants'
import { MoodType } from '@/types'

const moods: MoodType[] = ['happy', 'sad', 'calm', 'angry', 'anxious', 'excited', 'loved', 'lonely', 'tired', 'stressed']

export default function MoodTrackerPage() {
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null)
  const [intensity, setIntensity] = useState(5)

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-2">How are you feeling?</h1>
        <p className="text-gray-600 dark:text-gray-400">Track your emotions daily</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-slate-800 rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-6">Select your mood</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {moods.map((mood) => {
            const moodData = MOODS[mood]
            return (
              <motion.button key={mood} onClick={() => setSelectedMood(mood)} whileHover={{ scale: 1.05 }} className={`p-4 rounded-2xl transition ${selectedMood === mood ? `bg-gradient-to-r ${moodData.gradient}` : 'bg-gray-100 dark:bg-slate-700'}`}>
                <div className="text-3xl mb-2">{moodData.emoji}</div>
                <div className="text-sm font-semibold">{moodData.label}</div>
              </motion.button>
            )
          })}
        </div>
        {selectedMood && (
          <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 border-t border-gray-200 dark:border-slate-700 pt-8 mt-8">
            <div>
              <label className="block text-sm font-medium mb-4">Intensity: {intensity}/10</label>
              <input type="range" min="1" max="10" value={intensity} onChange={(e) => setIntensity(Number(e.target.value))} className="w-full" />
            </div>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
              Log Mood
            </button>
          </motion.form>
        )}
      </motion.div>
    </div>
  )
}