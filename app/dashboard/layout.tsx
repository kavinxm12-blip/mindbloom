'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Home, BookOpen, Smile, BarChart3, Calendar, Zap, Heart, User } from 'lucide-react'

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/dashboard/journal', label: 'Journal', icon: BookOpen },
  { href: '/dashboard/mood', label: 'Mood', icon: Smile },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/dashboard/breathing', label: 'Breathing', icon: Zap },
  { href: '/dashboard/profile', label: 'Profile', icon: User },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900">
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 lg:hidden z-40" onClick={() => setSidebarOpen(false)} />}
      <motion.aside className="fixed lg:relative w-64 h-full bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 overflow-y-auto z-50 lg:z-0" initial={{ x: -256 }} animate={{ x: sidebarOpen ? 0 : -256 }}>
        <div className="p-6 space-y-8">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
            MindBloom
          </Link>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-slate-700 transition">
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </motion.aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 px-4 py-4 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg">
            {sidebarOpen ? <X /> : <Menu />}
          </button>
          <div className="ml-auto text-sm font-medium">Welcome back! 👋</div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}