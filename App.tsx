import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { resetUsedNumbers } from "./businessRule/randomNumberGenerator";
import Colors from "./constants/color";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(false);

  function resetState() {
    setUserNumber(undefined);
    setGameIsOver(false);

    // Reset generated number from [randomNumberGenerator]
    resetUsedNumbers();
  }

  function getScreen() {
    if (gameIsOver && userNumber) {
      return <GameOverScreen userNumber={userNumber} startNewGame={resetState} />;
    }

    if (userNumber) {
      return <GameScreen userNumber={userNumber} setGameIsOver={() => setGameIsOver(true)} />;
    }

    return <StartGameScreen setUserNumber={setUserNumber} />;
  }

  return (
    <>
      <StatusBar style="light" animated={true} />
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
    </>
  );
}
