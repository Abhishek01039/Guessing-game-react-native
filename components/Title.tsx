import { StyleSheet, Text, ViewStyle } from "react-native";
import Colors from "../constants/color";

interface TitleProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Title = ({ children, style }: TitleProps) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
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
