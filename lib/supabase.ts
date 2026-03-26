import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Frontend aur Backend dono ke liye single instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey);