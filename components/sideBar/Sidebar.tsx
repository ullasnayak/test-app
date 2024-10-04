import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null; // Return null if the sidebar is not visible

  return (
    <>
      <View
        className="absolute mt-16 left-0 w-[135px] h-full bg-white p-4"
        style={{ zIndex: 1 }}
      >
        <Text className="text-black text-xl font-bold mb-4">Menu</Text>
        <TouchableOpacity onPress={onClose}>
          <Text className="text-black text-lg mb-2">Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose}>
          <Text className="text-black text-lg mb-2">Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose}>
          <Text className="text-black text-lg mb-2">New Added</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Sidebar;
