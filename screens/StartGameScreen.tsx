import React, { useRef, useState } from "react";
import { TextInput, Button, StyleSheet, View, Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/color";

interface StartGameScreenProps {
  setUserNumber: (num: number) => void;
}

function StartGameScreen({ setUserNumber }: StartGameScreenProps) {
  const [number, setNumber] = useState("");

  function numberInputHandler(text: string) {
    setNumber(text);
  }

  function resetInputHandler() {
    setNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show dialog that the number is not valid
      Alert.alert("Invalid number!", "Number has to be a number between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    setUserNumber(chosenNumber);
  }

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.inputField}
        maxLength={2}
        keyboardType="numeric"
        value={number}
        onChangeText={numberInputHandler}
      />
      <View style={{ flexDirection: "row", justifyContent: "center", display: "flex" }}>
        <PrimaryButton title="Reset" onPress={resetInputHandler} />
        <PrimaryButton title="Confirm" onPress={confirmInputHandler} />
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputField: {
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    padding: 10,
    color: Colors.secondary500,
    height: 55,
    fontSize: 32,
    width: 60,
    textAlign: "center",
    marginBottom: 16,
  },
  view: {
    backgroundColor: Colors.primary500,
    marginHorizontal: 16,
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
