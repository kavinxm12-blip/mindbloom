export interface User {
  id: string
  email: string
  username?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface UserProfile {
  id: string
  user_id: string
  display_name?: string
  bio?: string
  avatar_url?: string
  theme: string
  language: string
  timezone: string
  notifications_enabled: boolean
  created_at: string
  updated_at: string
}

export type MoodType = 'happy' | 'sad' | 'calm' | 'angry' | 'anxious' | 'excited' | 'loved' | 'lonely' | 'tired' | 'stressed'

export interface MoodEntry {
  id: string
  user_id: string
  mood: MoodType
  intensity: number
  note?: string
  weather?: string
  location?: string
  created_at: string
  updated_at: string
}

export interface Journal {
  id: string
  user_id: string
  title: string
  content: string
  mood?: MoodType
  tags?: string[]
  category?: string
  is_favorite: boolean
  is_archived: boolean
  is_draft: boolean
  weather?: string
  location?: string
  images?: string[]
  created_at: string
  updated_at: string
}

export interface EmotionAnalysis {
  id: string
  journal_id: string
  user_id: string
  emotion: string
  sentiment: 'positive' | 'negative' | 'neutral'
  stress_level: number
  anxiety_level: number
  positivity_score: number
  negativity_score: number
  summary: string
  suggestions: string[]
  created_at: string
}

export interface Goal {
  id: string
  user_id: string
  title: string
  description?: string
  goal_type: 'meditation' | 'water' | 'sleep' | 'exercise' | 'reading' | 'custom'
  target_value: number
  current_value: number
  unit: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Habit {
  id: string
  user_id: string
  name: string
  habit_type: 'sleep' | 'exercise' | 'meditation' | 'water' | 'reading' | 'walking' | 'custom'
  frequency: 'daily' | 'weekly' | 'custom'
  streak: number
  longest_streak: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Achievement {
  id: string
  user_id: string
  badge_name: string
  badge_description: string
  xp_earned: number
  level: number
  unlocked_at: string
}