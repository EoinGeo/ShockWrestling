import { ImageBackground, StyleSheet } from "react-native";
import Newsletter from "../templates/newsletter/Newsletter";
import MomentsSection from "../templates/newsletter/sections/MomentsSection";
import MatchesSection from "../templates/newsletter/sections/MatchesSection";
import MatchOfTheNightSection from "../templates/newsletter/sections/MatchOfTheNightSection";
import BigMomentSection from "../templates/newsletter/sections/BigMomentSection";

import { wildBigMoment, topWildMoments, wildData } from "../data";
import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function WildNewsletter() {
  const { setScheme } = useTheme();
  let matchOverride = {
    Header:
      "Gavin Belle (c) vs Arik Alexander - Wild Rulez Match - Outer Rim Championship",
    Desc: " ",
    Rating: 5,
  };
  useEffect(() => {
    setScheme("dark");
  }, []);
  return (
    <ImageBackground
      source={require("../../assets/WILDBG.png")}
      style={styles.background}
    >
      <Newsletter>
        <BigMomentSection image={wildBigMoment} />

        <MatchOfTheNightSection
          matches={wildData}
          logo={require("../../assets/All_Star_Wild_2026.png")}
        />

        <MatchesSection matches={wildData} />
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
