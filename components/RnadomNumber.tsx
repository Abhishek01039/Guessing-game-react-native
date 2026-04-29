import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/color";

interface RandomNumberProps {
  generatedNumber: number;
}

const RnadomNumber = ({ generatedNumber }: RandomNumberProps) => {
  return (
    <View>
      <Text style={styles.text}>{generatedNumber}</Text>
    </View>
  );
};

export default RnadomNumber;

const styles = StyleSheet.create({
  text: {
    fontSize: 42,
    fontWeight: "bold",
    color: Colors.secondary500,
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 16,
    textAlign: "center",
    marginBottom: 24,
  },
});
