import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/color";

const GameScreen = () => {
  return (
    <View style={styles.view}>
      <Title>Game Screen</Title>
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
