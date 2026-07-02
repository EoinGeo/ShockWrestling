import { ImageBackground, StyleSheet } from "react-native";
import Newsletter from "../templates/newsletter/Newsletter";
import MomentsSection from "../templates/newsletter/sections/MomentsSection";
import MatchesSection from "../templates/newsletter/sections/MatchesSection";
import MatchOfTheNightSection from "../templates/newsletter/sections/MatchOfTheNightSection";
import BigMomentSection from "../templates/newsletter/sections/BigMomentSection";

import { aftershockBigMoment, aftershockData } from "../data";
import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function HGNewsletter() {
  const { setScheme } = useTheme();

  useEffect(() => {
    setScheme("light");
  }, []);
  return (
    <ImageBackground
      source={require("../../assets/AftershockBG.png")}
      style={styles.background}
    >
      <Newsletter>
        <BigMomentSection image={aftershockBigMoment} />

        <MatchOfTheNightSection
          matches={aftershockData}
          logo={require("../../assets/Aftershock_2026_Logo.png")}
        />

        <MatchesSection matches={aftershockData} />
      </Newsletter>
    </ImageBackground>
  );
}

export const styles = StyleSheet.create({
  background: {
    width: 1080,
    height: 1920, // important for web
  },
});
