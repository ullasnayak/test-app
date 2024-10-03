import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel-rnna";

const movieData = [
  {
    Poster: require("../../assets/images/Batman Begins.jpg"),
    Title: "Batman Begins",
  },
  {
    Poster: require("../../assets/images/The Dark Knight.jpg"),
    Title: "The Dark Knight",
  },
  {
    Poster: require("../../assets/images/The Dark Knight Rises.webp"),
    Title: "The Dark Knight Rises",
  },
  {
    Poster: require("../../assets/images/Batman vs. Superman.jpg"),
    Title: "Batman vs. Superman",
  },
];

const { width } = Dimensions.get("window");

const App = () => {
  const movies = movieData;

  const renderMovie = ({ item }: { item: any }) => {
    return (
      <View className="items-center">
        <Image
          source={item.Poster}
          style={{ width: width * 0.8, height: 400 }}
          resizeMode="cover"
        />
        <Text className="text-white text-lg mt-2">{item.Title}</Text>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-neutral-800">
      <View className="flex-row items-center justify-between px-4 py-3 mt-10">
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <View className="flex-row items-center">
          <Text className="text-yellow-500 text-2xl font-bold">M</Text>
          <Text className="text-white text-2xl font-bold">ovies</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 justify-center items-center mt-10">
        {movies.length > 0 ? (
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
    </View>
  );
};

export default App;
