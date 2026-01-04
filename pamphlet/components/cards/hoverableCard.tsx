import React, { useState } from "react";
import { View, Pressable, StyleSheet, Animated, Platform } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

interface HoverableCardProps {
  children?: React.ReactNode;
  style?: object;
  onPressIn?: () => void;
  onPressOut?: () => void;
}

const HoverableCard: React.FC<HoverableCardProps> = ({
  children,
  style,
  onPressIn,
  onPressOut,
}) => {
  const { colours, scheme } = useTheme();
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scaleAnim = useState(new Animated.Value(1))[0];

  const animateScale = (toValue: number) => {
    Animated.spring(scaleAnim, {
      toValue,
      useNativeDriver: true,
    }).start();
  };

  const handlePressIn = () => {
    setIsPressed(true);
    animateScale(0.98);
    onPressIn?.(); // call optional callback
  };

  const handlePressOut = () => {
    setIsPressed(false);
    animateScale(1);
    onPressOut?.(); // call optional callback
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    animateScale(0.98);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    animateScale(1);
  };

  const glowActive = isPressed || isHovered;

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...(Platform.OS === "web"
        ? {
            onHoverIn: handleMouseEnter,
            onHoverOut: handleMouseLeave,
          }
        : {})}
    >
      <Animated.View
        style={[
          styles.card,
          {
            transform: [{ scale: scaleAnim }],
            borderColor: colours.accent,
            shadowColor: colours.accent,
            shadowOpacity: glowActive ? 0.35 : 0.15,
            shadowRadius: glowActive ? 10 : 18,
            backgroundColor: "transparent",
          },
          style,
        ]}
      >
        <View
          style={[
            styles.content,
            {
              backgroundColor: glowActive
                ? colours.backgroundSecondary
                : colours.backgroundPrimary,
            },
          ]}
        >
          {children}
        </View>
      </Animated.View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    borderWidth: 2,
    elevation: 10,
    width: "100%",
  },
  content: {
    borderRadius: 18,
    padding: 16,
  },
});

export default HoverableCard;
