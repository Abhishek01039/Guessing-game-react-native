import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/color";
import RnadomNumber from "../components/RnadomNumber";
import { useEffect, useState } from "react";
import RandomNumberGenerator from "../businessRule/randomNumberGenerator";
import PrimaryButton from "../components/PrimaryButton";
import RandomNumber from "../constants/randomNumber";

interface GameScreenProps {
  userNumber: number;
  setGameIsOver: () => void;
}

const GameScreen = ({ userNumber, setGameIsOver }: GameScreenProps) => {
  const [generatedNumber, setGeneratedNumber] = useState<number>(0);

  useEffect(() => {
    const number = RandomNumberGenerator({
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
    if (
      (direction === "lower" && max < userNumber) ||
      (direction === "greater" && min > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    const number = RandomNumberGenerator({ min, max });

    console.log(number, userNumber);

    if (number === userNumber) {
      setGameIsOver();
    }

    setGeneratedNumber(number);
  }

  return (
    <View style={styles.view}>
      <Title>Game Screen</Title>
      <RnadomNumber generatedNumber={generatedNumber} />
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 16 }}>
        <PrimaryButton
          title="-"
          onPress={() =>
            handleRandomNumberGenerator({
              min: RandomNumber.min,
              max: generatedNumber - 1,
              direction: "lower",
            })
          }
        />
        <PrimaryButton
          title="+"
          onPress={() =>
            handleRandomNumberGenerator({
              min: generatedNumber + 1,
              max: RandomNumber.max,
              direction: "greater",
            })
          }
        />
      </View>
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
