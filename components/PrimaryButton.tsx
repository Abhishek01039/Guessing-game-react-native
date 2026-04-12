import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/color";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
}

const PrimaryButton = ({ title, onPress }: PrimaryButtonProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.buttonContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.rippleColor, foreground: true }}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    margin: 4,
    overflow: "hidden",
  },
  buttonContainer: {
    backgroundColor: "#a50455",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
