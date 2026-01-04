import { StyleSheet, View, ImageBackground } from "react-native-web";
import { Slot } from "expo-router";
import { useTheme } from "../contexts/ThemeContext";

export default function PageFormat() {
  const { colours } = useTheme();

  return (
    <View style={styles.scrollContainer}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: "center",
    overflow: "scroll", // enable scrolling
    msOverflowStyle: "none", // hide scrollbar on IE/Edge
    scrollbarWidth: "none", // hide scrollbar on Firefox
    WebkitOverflowScrolling: "touch", // smooth scrolling for iOS
  },
});
