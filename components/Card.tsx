import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/color";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <View style={styles.view}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.primary500,
    borderRadius: 16,
    elevation: 8,
    padding: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 1,
    alignItems: "center",
  },
});
