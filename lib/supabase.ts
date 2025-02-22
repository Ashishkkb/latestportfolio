import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://lyoelihhrlkxezrcidfs.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5b2VsaWhocmxreGV6cmNpZGZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTQ5MTQsImV4cCI6MjA1NTc5MDkxNH0._povQ1dtWuuGp0KlVsM9VUf4448RHT_75EYy_W1VakM"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

