import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://yjqlveikefgcpbgwymva.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqcWx2ZWlrZWZnY3BiZ3d5bXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwOTU0NzYsImV4cCI6MjA5NjY3MTQ3Nn0.mIkpgFEWdX0uNWrc6WFzFLUiaGCx83r3ligZdrdj4hk'
)
