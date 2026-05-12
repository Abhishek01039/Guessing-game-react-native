import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, useWindowDimensions, View } from "react-native";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/color";

interface StartGameScreenProps {
  setUserNumber: (num: number) => void;
}

function StartGameScreen({ setUserNumber }: StartGameScreenProps) {
  const [number, setNumber] = useState("");
  const { height, width } = useWindowDimensions();

  console.log("height", height);
  console.log("width", width);

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
    <View style={[styles.rootContainer, { marginTop: height > 420 ? 0 : 100 }]}>
      <Title>Start Game Screen</Title>
      <Card>
        <Text style={styles.enterNumberText}>
          Enter a <Text style={styles.subText}>number</Text>
        </Text>
        <TextInput
          style={styles.inputField}
          maxLength={2}
          keyboardType="numeric"
          value={number}
          onChangeText={numberInputHandler}
        />
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 16 }}>
          <View style={{ flex: 1 }}>
            <PrimaryButton title="Reset" onPress={resetInputHandler} />
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton title="Confirm" onPress={confirmInputHandler} />
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: 16,
  },
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
  enterNumberText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
    marginBottom: 16,
  },
  subText: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
    color: Colors.secondary500,
  },
});
