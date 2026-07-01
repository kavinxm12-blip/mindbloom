'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Heart, Trash2 } from 'lucide-react'
import Link from 'next/link'

const journals = [
  { id: 1, title: 'Great day!', date: '2024-01-15', mood: 'happy', excerpt: 'Amazing meeting...', favorite: true },
  { id: 2, title: 'Peaceful morning', date: '2024-01-14', mood: 'calm', excerpt: 'Morning meditation...', favorite: false },
  { id: 3, title: 'Overwhelmed', date: '2024-01-13', mood: 'stressed', excerpt: 'Too many tasks...', favorite: false },
]

export default function JournalPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Journal</h1>
          <p className="text-gray-600 dark:text-gray-400">Write and reflect</p>
        </div>
        <Link href="/dashboard/journal/new" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold">
          <Plus className="w-5 h-5" />
          New
        </Link>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
        {journals.map((journal, i) => (
          <motion.div key={journal.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.1 }} className="bg-white dark:bg-slate-800 rounded-lg p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-bold">{journal.title}</h3>
                <p className="text-sm text-gray-500">{journal.date}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded">
                  <Heart className={`w-5 h-5 ${journal.favorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded text-gray-400 hover:text-red-500">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{journal.excerpt}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}