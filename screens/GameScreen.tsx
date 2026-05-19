import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { randomNumberGenerator } from "../businessRule/randomNumberGenerator";
import GameScreenLandscapeContent from "../components/GameScreenLandscapeContent";
import LogList from "../components/Logs/LogList";
import Title from "../components/Title";
import Colors from "../constants/color";
import RandomNumber from "../constants/randomNumber";

interface GameScreenProps {
  userNumber: number | undefined;
  setGameIsOver: () => void;
}

const GameScreen = ({ userNumber, setGameIsOver }: GameScreenProps) => {
  const [generatedNumber, setGeneratedNumber] = useState<number>(0);

  useEffect(() => {
    const number = randomNumberGenerator({
      min: RandomNumber.min,
      max: RandomNumber.max,
    });
    setGeneratedNumber(number);
  }, []);

  function handleRandomNumberGenerator({
    min,
    max,
    direction,
  }: {
    min: number;
    max: number;
    direction: "lower" | "greater";
  }) {
    if (!userNumber) return;

    if (
      (direction === "lower" && max < userNumber) ||
      (direction === "greater" && min > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    const number: number = randomNumberGenerator({ min, max });

    console.log(number, userNumber);

    if (number === userNumber) {
      setGameIsOver();
    }

    setGeneratedNumber(number);
  }

  return (
    <View style={styles.view}>
      <Title>Game Screen</Title>
      <GameScreenLandscapeContent
        generatedNumber={generatedNumber}
        handleRandomNumberGenerator={handleRandomNumberGenerator}
      />
      {/* Logs */}
      <LogList />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  view: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.secondary500,
    textAlign: "center",
    marginBottom: 24,
    borderWidth: 2,
    borderColor: Colors.secondary500,
    padding: 12,
  },
});
