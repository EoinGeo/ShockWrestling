import Newsletter from "../templates/newsletter/Newsletter";
import MomentsSection from "../templates/newsletter/sections/MomentsSection";
import MatchesSection from "../templates/newsletter/sections/MatchesSection";
import MatchOfTheNightSection from "../templates/newsletter/sections/MatchOfTheNightSection";
import BigMomentSection from "../templates/newsletter/sections/BigMomentSection";

import { strikeBigMoment, topStrikeMoments, strikeData } from "../data";
import { ImageBackground, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function StrikeNewsletter() {
  const { setScheme } = useTheme();

  useEffect(() => {
    setScheme("dark");
  }, []);
  return (
    <ImageBackground
      source={require("../../assets/STRIKEBG.png")}
      style={styles.background}
    >
      <Newsletter>
        <BigMomentSection image={strikeBigMoment} />

        <MatchOfTheNightSection
          matches={strikeData}
          logo={require("../../assets/STRIKE.png")}
        />

        <MatchesSection matches={strikeData} />
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
