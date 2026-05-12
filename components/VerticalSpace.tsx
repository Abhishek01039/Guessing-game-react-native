import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface VerticalSpaceProps {
  height?: number;
}

const VerticalSpace = ({ height = 20 }: VerticalSpaceProps) => {
  return <View style={{ height }} />;
};

export default VerticalSpace;
