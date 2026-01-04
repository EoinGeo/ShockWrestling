import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

interface HoverableButtonProps {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void; // optional callback for press
}

const HoverableButton = ({ icon, label, onPress }: HoverableButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { colours } = useTheme(); // dynamic theme colors

  // only add hover events for web
  const hoverProps =
    Platform.OS === "web"
      ? {
          onMouseEnter: () => setIsHovered(true),
          onMouseLeave: () => setIsHovered(false),
        }
      : {};

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      {...hoverProps} // spread the web-only props
      style={[
        styles.button,
        (isPressed || isHovered) && { backgroundColor: colours.surface },
      ]}
    >
      <View style={styles.iconWrapper}>{icon}</View>
      <Text style={[styles.buttonText, { color: colours.textPrimary }]}>
        {label}
      </Text>
      {(isPressed || isHovered) && (
        <View
          style={[styles.activeIndicator, { backgroundColor: colours.accent }]}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    borderRadius: 4,
    backgroundColor: "transparent",
    position: "relative",
    cursor: Platform.OS === "web" ? "pointer" : undefined, // only web
  },
  buttonText: {
    marginLeft: 5,
  },
  activeIndicator: {
    position: "absolute",
    top: 5,
    left: -10,
    width: 5,
    height: "80%",
    borderRadius: 5,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    alignContent: "center",
    justifyContent: "center",
    flexShrink: 0,
    paddingVertical: 5,
    flexDirection: "column",
  },
});

export default HoverableButton;
