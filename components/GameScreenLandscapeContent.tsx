import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import RandomNumber from "../constants/randomNumber";
import GameScreenButtons from "./GameScreenButtons";
import PrimaryIconButton from "./PrimaryIconButton";
import RnadomNumber from "./RnadomNumber";
import VerticalSpace from "./VerticalSpace";

interface GameScreenLandscapeContentProps {
  generatedNumber: number;
  handleRandomNumberGenerator: (options: {
    min: number;
    max: number;
    direction: "lower" | "greater";
  }) => void;
}

const GameScreenLandscapeContent = ({
  generatedNumber,
  handleRandomNumberGenerator,
}: GameScreenLandscapeContentProps) => {
  const { height, width } = useWindowDimensions();

  const landscapeContent = (
    <>
      <View style={{ display: "flex", flexDirection: "row", gap: 16 }}>
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
        <RnadomNumber generatedNumber={generatedNumber} />
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
    </>
  );

  const potraitContent = (
    <>
      <RnadomNumber generatedNumber={generatedNumber} />
      <VerticalSpace height={16} />
      <GameScreenButtons
        handleRandomNumberGenerator={handleRandomNumberGenerator}
        generatedNumber={generatedNumber}
        RandomNumber={RandomNumber}
      />
    </>
  );

  if (width > 500) {
    return landscapeContent;
  }

  return potraitContent;
};

export default GameScreenLandscapeContent;

const styles = StyleSheet.create({});
