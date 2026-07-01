'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
            <span className="font-bold text-xl">MindBloom</span>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#features" className="hover:text-purple-600 transition">Features</a>
            <a href="#pricing" className="hover:text-purple-600 transition">Pricing</a>
            <Link href="/auth/login" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              Login
            </Link>
          </nav>
        </div>
      </header>

      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="text-center space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl font-bold tracking-tight"
            variants={item}
          >
            Track Your Emotions.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Understand Yourself.</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={item}
          >
            MindBloom helps you understand your emotional patterns, build healthy habits, and grow every day.
          </motion.p>
          <motion.div className="flex gap-4 justify-center pt-8" variants={item}>
            <Link
              href="/auth/signup"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="px-8 py-3 border border-gray-300 dark:border-slate-600 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-800 transition"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </motion.section>

      <section id="features" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Mood Tracking', desc: 'Track 10+ emotions with beautiful visualizations' },
              { title: 'Smart Journal', desc: 'Rich text editor with voice recording and media uploads' },
              { title: 'AI Insights', desc: 'Personalized recommendations based on your patterns' },
              { title: 'Beautiful Charts', desc: 'Visualize your emotional growth over time' },
              { title: 'Breathing Exercises', desc: 'Guided exercises for relaxation and calm' },
              { title: 'Goal Tracking', desc: 'Build healthy habits and track progress' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-600 rounded-lg glass"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to grow emotionally?</h2>
          <p className="text-xl mb-8 opacity-90">Start your MindBloom journey today and transform your emotional wellness.</p>
          <Link
            href="/auth/signup"
            className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>© 2024 MindBloom. All rights reserved. Made with 💜</p>
          </div>
        </div>
      </footer>
    </div>
  )
}