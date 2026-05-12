import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/color";

interface LogItemProps {
  guessedNumber: number;
}

const LogItem = ({ guessedNumber }: LogItemProps) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>
        You guessed <Text style={styles.guessedNumber}>{guessedNumber}</Text>!
      </Text>
    </View>
  );
};

export default LogItem;

const styles = StyleSheet.create({
  view: {
    padding: 12,
  },
  title: {
    fontSize: 12,
  },
  guessedNumber: {
    fontSize: 12,
    color: Colors.white,
  },
});
