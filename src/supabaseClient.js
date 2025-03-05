import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hpcccnigdnlusykqirvc.supabase.co';  // Replace with your actual Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwY2NjbmlnZG5sdXN5a3FpcnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MzYxMjQsImV4cCI6MjA1NjUxMjEyNH0.xZk6yfa5aCk0xRgA0M7rCQ28nV82FgTDx073O3NkvO0';  // Replace with your actual anon key


//const supabaseUrl_ = 'https://nmddffdndgincdaifdqr.supabase.co';  // Replace with your actual Supabase URL
//const supabaseAnonKey_ = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tZGRmZmRuZGdpbmNkYWlmZHFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyNDM1MDYsImV4cCI6MjA1NTgxOTUwNn0.A2iJgxUK2gOoOZCn00gupMMoIwSNMF3C_Ycbdl6QZ50';  // Replace with your actual anon key


export const supabase = createClient(supabaseUrl, supabaseAnonKey);
