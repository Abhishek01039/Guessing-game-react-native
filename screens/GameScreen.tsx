import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { randomNumberGenerator } from "../businessRule/randomNumberGenerator";
import GameScreenButtons from "../components/GameScreenButtons";
import LogList from "../components/Logs/LogList";
import RnadomNumber from "../components/RnadomNumber";
import Title from "../components/Title";
import VerticalSpace from "../components/VerticalSpace";
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
      <RnadomNumber generatedNumber={generatedNumber} />
      <VerticalSpace height={16} />
      {/* <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 16 }}>
        <PrimaryButton
          title="-"
          onPress={() =>
            handleRandomNumberGenerator({
              min: RandomNumber.min,
              max: generatedNumber - 1,
              direction: "lower",
            })
          }
          size={24}
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
          size={24}
        />
      </View> */}
      <GameScreenButtons
        handleRandomNumberGenerator={handleRandomNumberGenerator}
        generatedNumber={generatedNumber}
        RandomNumber={RandomNumber}
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
