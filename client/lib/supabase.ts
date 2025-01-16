import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ovcftsvtesrwvqfdgirw.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92Y2Z0c3Z0ZXNyd3ZxZmRnaXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5ODQxNTksImV4cCI6MjA1MjU2MDE1OX0.565fYwoOkI6TTFM7EF_e5pUU2kWVAnHhXfKZjUSoeb0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})