import { MoodType } from '@/types'

export const MOODS: Record<MoodType, {
  label: string
  color: string
  gradient: string
  emoji: string
  description: string
}> = {
  happy: {
    label: 'Happy',
    color: '#FFD700',
    gradient: 'from-yellow-300 to-yellow-500',
    emoji: '😊',
    description: 'Feeling joyful and positive',
  },
  sad: {
    label: 'Sad',
    color: '#4A90E2',
    gradient: 'from-blue-400 to-blue-600',
    emoji: '😢',
    description: 'Feeling down and melancholic',
  },
  calm: {
    label: 'Calm',
    color: '#A8E6CF',
    gradient: 'from-green-300 to-green-500',
    emoji: '😌',
    description: 'Feeling peaceful and serene',
  },
  angry: {
    label: 'Angry',
    color: '#FF6B6B',
    gradient: 'from-red-400 to-red-600',
    emoji: '😠',
    description: 'Feeling frustrated and upset',
  },
  anxious: {
    label: 'Anxious',
    color: '#FFB347',
    gradient: 'from-orange-400 to-orange-600',
    emoji: '😰',
    description: 'Feeling worried and nervous',
  },
  excited: {
    label: 'Excited',
    color: '#FF1493',
    gradient: 'from-pink-400 to-pink-600',
    emoji: '🤩',
    description: 'Feeling enthusiastic and energized',
  },
  loved: {
    label: 'Loved',
    color: '#FF69B4',
    gradient: 'from-rose-400 to-rose-600',
    emoji: '🥰',
    description: 'Feeling connected and cherished',
  },
  lonely: {
    label: 'Lonely',
    color: '#9370DB',
    gradient: 'from-purple-400 to-purple-600',
    emoji: '😔',
    description: 'Feeling isolated and disconnected',
  },
  tired: {
    label: 'Tired',
    color: '#A9A9A9',
    gradient: 'from-gray-400 to-gray-600',
    emoji: '😴',
    description: 'Feeling exhausted and fatigued',
  },
  stressed: {
    label: 'Stressed',
    color: '#DC143C',
    gradient: 'from-red-500 to-red-700',
    emoji: '😫',
    description: 'Feeling overwhelmed and tense',
  },
}