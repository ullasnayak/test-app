import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel-rnna";
import Sidebar from "@/components/sideBar/Sidebar";
import { useMoviesQuery } from "../services/queries/HomeMovies/HomeMovies";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

const { width } = Dimensions.get("window");

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [query, setQuery] = useState("Superman");
  const [isSearchVisible, setSearchVisible] = useState(false); // Control the search input visibility
  const [searchInput, setSearchInput] = useState(query);

  const { isLoading, isError, data: movies, refetch } = useMoviesQuery(query);

  console.log(movies, "movies from OMDb API");

  const renderMovie = ({ item }: { item: any }) => {
    return (
      <View className="items-center">
        <Image
          source={{ uri: item.Poster }} // Using uri since we get URLs from OMDb API
          style={{ width: width * 0.8, height: 400 }}
          resizeMode="cover"
        />
        <Text className="text-white text-lg mt-2">{item.Title}</Text>
      </View>
    );
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleSearch = () => {
    setQuery(searchInput); // Set the query to the user input
    refetch(); // Refetch the movies based on the new query
  };

  return (
    <View className="flex-1 bg-neutral-800">
      {/* Header Section */}
      <View className="flex-row items-center justify-between px-4 py-3 mt-10">
        <TouchableOpacity onPress={toggleSidebar} style={{ zIndex: -1 }}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>

        <View className="flex-row items-center">
          <Text className="text-yellow-500 text-2xl font-bold">M</Text>
          <Text className="text-white text-2xl font-bold">ovies</Text>
        </View>

        {/* Toggle search input visibility */}
        <TouchableOpacity onPress={toggleSearch}>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search Input Section */}
      {isSearchVisible && (
        <View className="flex-row items-center justify-center px-4">
          <TextInput
            style={{
              backgroundColor: "#fff",
              padding: 10,
              borderRadius: 5,
              width: "80%",
              color: "#000",
            }}
            placeholder="Search for a movie"
            value={searchInput}
            onChangeText={(text) => setSearchInput(text)}
            onSubmitEditing={handleSearch} // Search when the user hits the Enter/Done key
          />
          <TouchableOpacity onPress={handleSearch} style={{ marginLeft: 10 }}>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}

      {/* Movie Carousel Section */}
      <View className="flex-1 justify-center items-center mt-10">
        {isLoading ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : isError ? (
          <Text className="text-white">Failed to fetch movies</Text>
        ) : movies?.length > 0 ? (
          <Carousel
            data={movies}
            renderItem={renderMovie}
            sliderWidth={width}
            itemWidth={width * 0.8}
            loop={true}
          />
        ) : (
          <Text className="text-white">No movies found</Text>
        )}
      </View>

      {/* Sidebar */}
      <Sidebar isVisible={isSidebarVisible} onClose={toggleSidebar} />
    </View>
  );
};

export default App;
