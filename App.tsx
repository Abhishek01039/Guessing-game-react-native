import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import GameScreen from "./screens/GameScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Colors from "./constants/color";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(false);

  function getScreen() {
    if (gameIsOver && userNumber) {
      return <GameOverScreen />;
    }

    if (userNumber) {
      return <GameScreen userNumber={userNumber} setGameIsOver={() => setGameIsOver(true)} />;
    }

    return <StartGameScreen setUserNumber={setUserNumber} />;
  }

  return (
    <LinearGradient colors={[Colors.primary500, Colors.secondary500]} style={{ flex: 1 }}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaProvider>
          <SafeAreaView edges={["top", "bottom"]}>{getScreen()}</SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </LinearGradient>
  );
}
