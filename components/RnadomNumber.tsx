import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/color";
import Card from "./Card";

interface RandomNumberProps {
  generatedNumber: number;
}

const RnadomNumber = ({ generatedNumber }: RandomNumberProps) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{generatedNumber}</Text>
    </View>
  );
};

export default RnadomNumber;

const styles = StyleSheet.create({
  view: {
    borderWidth: 2,
    borderColor: Colors.white,
  },
  text: {
    fontSize: 42,
    fontWeight: "bold",
    color: Colors.secondary500,
    padding: 32,
    textAlign: "center",
  },
});
