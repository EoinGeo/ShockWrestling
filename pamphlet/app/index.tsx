import React from "react";
import { View, Text, StyleSheet } from "react-native-web";
import HoverableButton from "../components/visual/hoverableButton";
import { useTheme } from "../contexts/ThemeContext";
import StylingToggle from "../components/visual/stylingToggle";

const IndexPage: React.FC = () => {
  const { colours } = useTheme();

  // Redirect functions
  const goToAllMatches = () => {
    window.location.href = "/templates/allMatches"; // full page redirect
  };

  const goToTopMoments = () => {
    window.location.href = "/templates/topMoments";
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colours.backgroundPrimary }]}
    >
      <View style={styles.buttonRow}>
        <StylingToggle />
        <HoverableButton
          icon={<Text></Text>}
          label="All Matches"
          onPress={goToAllMatches}
        />
        <HoverableButton
          icon={<Text></Text>}
          label="Top Moments"
          onPress={goToTopMoments}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default IndexPage;
