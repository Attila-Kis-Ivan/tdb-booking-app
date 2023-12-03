import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mtykrrxpbyfhnknqrpyt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10eWtycnhwYnlmaG5rbnFycHl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyODMwMzQsImV4cCI6MjAxNjg1OTAzNH0.yQoBsmR4gEJN2QZ91oyqkuAqzsLcRlyJK30nXClgB4k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
