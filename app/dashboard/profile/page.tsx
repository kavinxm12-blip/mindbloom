'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Globe } from 'lucide-react'

export default function ProfilePage() {
  const [formData, setFormData] = useState({ name: 'John Doe', email: 'john@example.com', timezone: 'UTC', language: 'English' })

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-2">Profile</h1>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-slate-800 rounded-lg p-8">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl font-bold">JD</div>
          <div>
            <h2 className="text-2xl font-bold">{formData.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">{formData.email}</p>
          </div>
        </div>
        <div className="space-y-6">
          {[{icon: User, title: 'Account', fields: [{label: 'Name', key: 'name'}, {label: 'Email', key: 'email'}]}, {icon: Globe, title: 'Preferences', fields: [{label: 'Timezone', key: 'timezone'}, {label: 'Language', key: 'language'}]}].map((section, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 + i * 0.1 }} className="border-t border-gray-200 dark:border-slate-700 pt-6 first:border-0 first:pt-0">
              <div className="flex items-center gap-2 mb-4">
                <section.icon className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold">{section.title}</h3>
              </div>
              <div className="space-y-3">
                {section.fields.map(f => (
                  <div key={f.key}>
                    <label className="block text-sm font-medium mb-1">{f.label}</label>
                    <input type="text" value={formData[f.key as keyof typeof formData]} onChange={(e) => setFormData({...formData, [f.key]: e.target.value})} className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold">Save Changes</button>
    </div>
  )
}