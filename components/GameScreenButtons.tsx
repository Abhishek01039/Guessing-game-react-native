import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import PrimaryIconButton from "./PrimaryIconButton";
import VerticalSpace from "./VerticalSpace";

interface GameScreenButtonsProps {
  handleRandomNumberGenerator: (options: {
    min: number;
    max: number;
    direction: "lower" | "greater";
  }) => void;
  generatedNumber: number;
  RandomNumber: {
    min: number;
    max: number;
  };
}

const GameScreenButtons = ({
  handleRandomNumberGenerator,
  generatedNumber,
  RandomNumber,
}: GameScreenButtonsProps) => {
  return (
    <Card>
      <Text style={styles.text}>Heigher or Lower?</Text>
      <VerticalSpace height={8} />
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 16 }}>
        <PrimaryIconButton
          title="remove"
          onPress={() =>
            handleRandomNumberGenerator({
              min: RandomNumber.min,
              max: generatedNumber - 1,
              direction: "lower",
            })
          }
          size={18}
        />
        <PrimaryIconButton
          title="add"
          onPress={() =>
            handleRandomNumberGenerator({
              min: generatedNumber + 1,
              max: RandomNumber.max,
              direction: "greater",
            })
          }
          size={18}
        />
      </View>
    </Card>
  );
};

export default GameScreenButtons;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
