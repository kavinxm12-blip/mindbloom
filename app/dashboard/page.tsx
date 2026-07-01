'use client'
import { motion } from 'framer-motion'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Flame, Target, Smile, BookOpen } from 'lucide-react'

const moodData = [
  { date: 'Mon', happy: 8, calm: 7, stressed: 2 },
  { date: 'Tue', happy: 7, calm: 8, stressed: 3 },
  { date: 'Wed', happy: 9, calm: 6, stressed: 2 },
  { date: 'Thu', happy: 8, calm: 9, stressed: 1 },
  { date: 'Fri', happy: 9, calm: 7, stressed: 2 },
  { date: 'Sat', happy: 10, calm: 8, stressed: 1 },
  { date: 'Sun', happy: 9, calm: 9, stressed: 2 },
]

const stats = [
  { label: 'Current Streak', value: '7 days', icon: Flame, color: 'from-red-500 to-orange-500' },
  { label: 'This Week Mood', value: '8.3/10', icon: Smile, color: 'from-yellow-500 to-yellow-600' },
  { label: 'Total Journals', value: '24', icon: BookOpen, color: 'from-blue-500 to-blue-600' },
  { label: 'Goals Done', value: '12', icon: Target, color: 'from-green-500 to-green-600' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8">
        <h1 className="text-4xl font-bold">Welcome back! 👋</h1>
        <p className="text-white/90 mt-2">You're on a 7-day streak. Keep growing!</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white dark:bg-slate-800 rounded-lg p-6">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white dark:bg-slate-800 rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Weekly Mood Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="happy" stroke="#FFD700" />
              <Line type="monotone" dataKey="calm" stroke="#A8E6CF" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white dark:bg-slate-800 rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Mood Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="happy" fill="#FFD700" />
              <Bar dataKey="calm" fill="#A8E6CF" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  )
}