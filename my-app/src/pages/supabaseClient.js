// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xtbodvixmmejxnfcwllo.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0Ym9kdml4bW1lanhuZmN3bGxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNjQ0NzAsImV4cCI6MjA2MjY0MDQ3MH0.P6Kz6Dmso_shi21o6gIdbj73UCFTEFIieOtLhUErEME";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
