import { ImageBackground, StyleSheet } from "react-native";
import Newsletter from "../templates/newsletter/Newsletter";
import MomentsSection from "../templates/newsletter/sections/MomentsSection";
import MatchesSection from "../templates/newsletter/sections/MatchesSection";
import MatchOfTheNightSection from "../templates/newsletter/sections/MatchOfTheNightSection";
import BigMomentSection from "../templates/newsletter/sections/BigMomentSection";

import { cawBigMoment, topCawMoments, cawData } from "../data";
import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function CawNewsletter() {
  const { setScheme } = useTheme();

  useEffect(() => {
    setScheme("light");
  }, []);
  return (
    <ImageBackground
      source={require("../../assets/CAWBG2.png")}
      style={styles.background}
    >
      <Newsletter>
        <BigMomentSection image={cawBigMoment} />

        <MatchOfTheNightSection matches={cawData} />

        <MomentsSection
          logo={require("../../assets/CAW.png")}
          moments={topCawMoments}
        />

        <MatchesSection matches={cawData} />
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
