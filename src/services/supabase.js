import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hpxtcgdjvlgqjmwdmmmy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhweHRjZ2RqdmxncWptd2RtbW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA2OTU4MTMsImV4cCI6MjAzNjI3MTgxM30.4v02czyg8Pyv83DeIBHe2b2PGGiKl795ZttBy7SKz5E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
