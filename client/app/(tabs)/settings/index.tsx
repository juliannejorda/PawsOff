import { View } from "react-native";
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase";
import Account from "../../../components/Account";
import { Session, User } from "@supabase/supabase-js";
import { Stack } from "expo-router";
import React from "react";

export default function IndexSettings() {
  const [session, setSession] = useState<Session | null>(null);

  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
     supabase.auth.getUser().then(({ data: { user }}) => {
      if (user) {
        setUser(user)
      } else {
        // no user
      }
     })
     
     supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
   })

  return (
    <>
    <Stack.Screen  options={{headerShown : false}} />
    <View className="flex-1 justify-center">
      {session && session.user ? <Account key={session.user.id} session={session} />  : null}
    </View>
    </>
  );
}
