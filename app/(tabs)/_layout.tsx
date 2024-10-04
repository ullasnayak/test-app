import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: colorScheme === "dark" ? "#0f172a" : "white",
            shadowColor: "transparent",
          },
          // headerRight: (props) => <Profile {...props} />,
          // headerTitle: (props) => <Logo {...props} />,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="event" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="movies"
        options={{
          title: "Movies",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: colorScheme === "dark" ? "#0f172a" : "white",
            shadowColor: "transparent",
          },
          // headerRight: (props) => <Profile {...props} />,
          // headerTitle: (props) => <Logo {...props} />,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: colorScheme === "dark" ? "#0f172a" : "white",
            shadowColor: "transparent",
          },
          // headerRight: (props) => <Profile {...props} />,
          // headerTitle: (props) => <Logo {...props} />,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="face-grin-wide" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
