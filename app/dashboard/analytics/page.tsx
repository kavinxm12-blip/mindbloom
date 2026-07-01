'use client'
import { motion } from 'framer-motion'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const moodData = [
  { week: 'W1', happy: 7, calm: 8, stressed: 2 },
  { week: 'W2', happy: 8, calm: 7, stressed: 2 },
  { week: 'W3', happy: 9, calm: 8, stressed: 1 },
  { week: 'W4', happy: 8.5, calm: 8.5, stressed: 1.5 },
]

const emotionData = [
  { name: 'Happy', value: 35 },
  { name: 'Calm', value: 30 },
  { name: 'Excited', value: 20 },
  { name: 'Stressed', value: 10 },
  { name: 'Other', value: 5 },
]

const COLORS = ['#FFD700', '#A8E6CF', '#FF1493', '#FF6B6B', '#9370DB']

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-2">Analytics</h1>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Avg Mood', value: '8.2/10', change: '+0.5' },
          { label: 'Top Emotion', value: 'Happy', change: '35%' },
          { label: 'Stress', value: 'Low', change: '-20%' },
        ].map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }} className="bg-white dark:bg-slate-800 rounded-lg p-6">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{m.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold">{m.value}</p>
              <p className="text-green-600 text-sm">{m.change}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-slate-800 rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Monthly Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={moodData}>
              <CartesianGrid />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="happy" stroke="#FFD700" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white dark:bg-slate-800 rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={emotionData} cx="50%" cy="50%" outerRadius={80}>
                {emotionData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  )
}