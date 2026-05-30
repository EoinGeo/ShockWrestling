import { ImageBackground, StyleSheet } from "react-native";
import Newsletter from "../templates/newsletter/Newsletter";
import MomentsSection from "../templates/newsletter/sections/MomentsSection";
import MatchesSection from "../templates/newsletter/sections/MatchesSection";
import MatchOfTheNightSection from "../templates/newsletter/sections/MatchOfTheNightSection";
import BigMomentSection from "../templates/newsletter/sections/BigMomentSection";

import { hgBigMoment, hgData } from "../data";
import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function HGNewsletter() {
  const { setScheme } = useTheme();

  useEffect(() => {
    setScheme("dark");
  }, []);
  return (
    <ImageBackground
      source={require("../../assets/HGBG.png")}
      style={styles.background}
    >
      <Newsletter>
        <BigMomentSection image={hgBigMoment} />

        <MatchOfTheNightSection
          matches={hgData}
          logo={require("../../assets/High_Ground_2026_Logo.png")}
        />

        <MatchesSection matches={hgData} />
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
