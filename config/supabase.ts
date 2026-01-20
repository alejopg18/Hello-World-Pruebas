import { createClient } from '@supabase/supabase-js'
import env from '#start/env'

export const supabase = createClient(
  env.get('SUPABASE_URL'),
  env.get('SUPABASE_SERVICE_ROLE_KEY')
)
