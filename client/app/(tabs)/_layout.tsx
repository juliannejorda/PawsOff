import {Tabs} from "expo-router"

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{headerShown: true}}>
            <Tabs.Screen name="home" options={{tabBarLabel: "Home", title: "Home"}} />
            <Tabs.Screen name="settings" options={{tabBarLabel: "Settings", title: "Settings"}} />
        </Tabs>
    )
}
