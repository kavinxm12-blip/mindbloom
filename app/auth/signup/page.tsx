'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
            <h1 className="text-3xl font-bold">MindBloom</h1>
            <p className="text-gray-600 dark:text-gray-400">Start your wellness journey</p>
          </div>
          <form onSubmit={handleSignup} className="space-y-4">
            {[{label: 'Full Name', key: 'name', type: 'text'}, {label: 'Email', key: 'email', type: 'email'}, {label: 'Password', key: 'password', type: 'password'}, {label: 'Confirm Password', key: 'confirmPassword', type: 'password'}].map(f => (
              <div key={f.key}>
                <label className="block text-sm font-medium mb-2">{f.label}</label>
                <input type={f.type} value={formData[f.key as keyof typeof formData]} onChange={(e) => setFormData({...formData, [f.key]: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
            ))}
            <button type="submit" disabled={loading} className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50">
              {loading ? 'Creating...' : 'Create Account'}
            </button>
          </form>
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">Have an account? <Link href="/auth/login" className="text-purple-600 font-semibold">Sign in</Link></p>
        </div>
      </motion.div>
    </div>
  )
}