import { StyleSheet } from "react-native";
import StylingToggle from "../visual/stylingToggle";
import { useTheme } from "../../contexts/ThemeContext";
import MenuButtons from "./menuButtons";
import { View, Text, Image } from "react-native-web";

export default function HeaderMenu() {
  const { colours } = useTheme(); // get theme inside the component
  return (
    <View
      style={[
        styles.containerRow,
        { backgroundColor: colours.backgroundSecondary },
      ]}
    >
      <View style={[styles.buttons]}>
        <MenuButtons />
      </View>
      <StylingToggle />
    </View>
  );
}

export const styles = StyleSheet.create({
  containerRow: {
    width: "100%",
    minHeight: "5%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
    flexWrap: "wrap",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
});
