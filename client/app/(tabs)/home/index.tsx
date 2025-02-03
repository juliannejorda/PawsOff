import { View } from "react-native";
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase";
import { Session } from "@supabase/supabase-js";
import Camera from "@/components/Camera";
import { Stack } from "expo-router";
import React from "react";

export default function IndexHome() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
    <Stack.Screen options={{headerShown : false}} />
    <View className="flex-1 justify-center">
      {/* {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />} */}
      <Camera />
    </View>
    </>
  );
}
