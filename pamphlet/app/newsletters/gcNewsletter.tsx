import { ImageBackground, StyleSheet } from "react-native";
import Newsletter from "../templates/newsletter/Newsletter";
import MomentsSection from "../templates/newsletter/sections/MomentsSection";
import MatchesSection from "../templates/newsletter/sections/MatchesSection";
import MatchOfTheNightSection from "../templates/newsletter/sections/MatchOfTheNightSection";
import BigMomentSection from "../templates/newsletter/sections/BigMomentSection";

import { gcBigMoment, gcData } from "../data";
import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function GCNewsletter() {
  const { setScheme } = useTheme();

  useEffect(() => {
    setScheme("light");
  }, []);
  return (
    <ImageBackground
      source={require("../../assets/GCBG.png")}
      style={styles.background}
    >
      <Newsletter>
        <BigMomentSection image={gcBigMoment} />

        <MatchOfTheNightSection
          matches={gcData}
          logo={require("../../assets/Galactic_Conquest_2026_Logo_Bold_Stroke.png")}
        />

        <MatchesSection matches={gcData} />
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
