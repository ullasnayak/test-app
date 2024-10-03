import { Image, View, Text, StyleSheet } from "react-native";
import React from "react";
import { colour } from "../assets/utils/colour";
import {
  TouchableOpacity,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { useNavigation } from "expo-router";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("LOGIN");
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/logo.jpg")}
          style={styles.logo}
        />
        <Image
          source={require("../assets/images/welcomePage.avif")}
          style={styles.banner}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButtonWrapper}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButtonWrapper}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colour.white,
    alignItems: "center",
  },
  logo: {
    height: 50,
    width: 150,
    marginVertical: 40,
  },
  banner: {
    height: 250,
    width: 230,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 20,
  },
  loginButtonWrapper: {
    backgroundColor: colour.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginRight: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 2,
    elevation: 5,
  },
  signUpButtonWrapper: {
    backgroundColor: colour.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: colour.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
