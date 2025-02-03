import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Redirect, router } from "expo-router";

export default function Index() {

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session}}) => {
      if (session) {
        router.replace("/(tabs)/home")
      } else {
        // no user
      }
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.replace("/(tabs)/home/")
      } else {
        // no user
        router.replace("/(auth)/login/")
      }
    })
  })
  
  return (
    <Redirect href={"/(auth)/login"} />
  );
}
