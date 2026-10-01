const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseConfig = {
  url: supabaseUrl || '',
  anonKey: supabaseAnonKey || ''
};

export const supabaseReady = Boolean(supabaseConfig.url && supabaseConfig.anonKey);
