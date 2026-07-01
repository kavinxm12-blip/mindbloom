'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save } from 'lucide-react'
import Link from 'next/link'
import { MOODS } from '@/constants'
import { MoodType } from '@/types'

export default function NewJournalPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [mood, setMood] = useState<MoodType | null>(null)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <Link href="/dashboard/journal" className="text-purple-600 hover:text-purple-700">← Back</Link>
        <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold">
          <Save className="w-5 h-5" />
          Save
        </button>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-slate-800 rounded-2xl p-8 space-y-6">
        <div>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title..." className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg font-semibold" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">How are you feeling?</label>
          <div className="grid grid-cols-5 gap-3">
            {Object.entries(MOODS).map(([key, moodData]) => (
              <button key={key} onClick={() => setMood(key as MoodType)} className={`p-3 rounded-lg ${mood === key ? `bg-gradient-to-r ${moodData.gradient}` : 'bg-gray-100 dark:bg-slate-700'}`}>
                <div className="text-2xl">{moodData.emoji}</div>
              </button>
            ))}
          </div>
        </div>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Your thoughts..." className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none" rows={10} />
      </motion.div>
    </div>
  )
}