import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://dnwgqvnceturvwbecdan.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRud2dxdm5jZXR1cnZ3YmVjZGFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NDY3NzksImV4cCI6MjA3NjAyMjc3OX0.bg-G84EfJiURmIUSLb5Mo5k63jD3dlcL02NyLJoRFZA"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);