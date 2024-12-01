import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cgpibaqdxmtncqnbjyup.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNncGliYXFkeG10bmNxbmJqeXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4NjQwOTUsImV4cCI6MjA0ODQ0MDA5NX0.AfVqMgEl9zbZR1gRI5E19YnxXL1EgRhOSv860kmI1dI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})