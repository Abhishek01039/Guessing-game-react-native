import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/color";
import Ionicons from "@expo/vector-icons/Ionicons";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

interface PrimaryIconButtonProps {
  title: IoniconName;
  onPress: () => void;
  size?: number;
}

const PrimaryIconButton = ({ title, onPress, size }: PrimaryIconButtonProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.buttonContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.rippleColor, foreground: true }}
      >
        {/* <div style={{ justifyContent: "center" }}> */}
        <Ionicons name={title} size={size} color="white" style={styles.icon} />
        {/* </div> */}
      </Pressable>
    </View>
  );
};

export default PrimaryIconButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    margin: 4,
    overflow: "hidden",
  },
  buttonContainer: {
    backgroundColor: Colors.primary600,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "center",
    alignContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  icon: {
    alignSelf: "center",
  },
});
