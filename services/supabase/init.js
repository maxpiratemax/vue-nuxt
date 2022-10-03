import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://diexyiybszginxbavvnf.supabase.co'
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpZXh5aXlic3pnaW54YmF2dm5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ3ODE0NjYsImV4cCI6MTk4MDM1NzQ2Nn0.u1cJu7BgD6QrnUrU5kLHNg0WyK3pO4OIbwhJA-sZ8oo'

export const supabase = createClient(supabaseUrl, supabaseKey)