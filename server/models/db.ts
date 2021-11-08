import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env['NEXT_PUBLIC_SUPABASE_URL'] || 'https://knudwvrywpwaculqjzer.supabase.co'
const supabaseAnonKey = process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjIzMDYyNCwiZXhwIjoxOTUxODA2NjI0fQ.7IgfsTtQ89SCULcalyyeMflC3dKbOcnP-Lod4-BB9OI'

export default createClient(supabaseUrl, supabaseAnonKey)