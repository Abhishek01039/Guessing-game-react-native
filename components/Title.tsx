import { StyleSheet, Text } from "react-native";
import Colors from "../constants/color";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
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
