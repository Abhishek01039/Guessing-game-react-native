import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { usedNumbers } from "../../businessRule/randomNumberGenerator";
import LogItem from "./LogItem";

const LogList = () => {
  return (
    <View>
      <FlatList
        data={Array.from(usedNumbers).reverse()}
        renderItem={({ item }) => <LogItem guessedNumber={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default LogList;

const styles = StyleSheet.create({});
