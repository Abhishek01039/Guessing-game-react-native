import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/color";

interface GameOverScreenProps {
  userNumber: number | undefined;
  startNewGame: () => void;
}

function GameOverScreen({ userNumber, startNewGame }: GameOverScreenProps) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>

      <Text style={styles.finalText}>
        You <Text style={styles.guessedText}>Guessed</Text> the number!!!!
      </Text>

      <Text style={styles.finalText}>
        The number was <Text style={styles.guessedText}>{userNumber}</Text>
      </Text>

      <View style={{ marginTop: 44 }} />

      <PrimaryButton title="Reset Game" onPress={startNewGame} size={32} />
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: 24,
  },
  finalText: {
    fontSize: 18,
    textAlign: "center",
  },
  guessedText: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
    color: Colors.secondary500,
  },
});
