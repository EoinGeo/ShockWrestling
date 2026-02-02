import Newsletter from "../templates/newsletter/Newsletter";
import MomentsSection from "../templates/newsletter/sections/MomentsSection";
import MatchesSection from "../templates/newsletter/sections/MatchesSection";
import MatchOfTheNightSection from "../templates/newsletter/sections/MatchOfTheNightSection";
import BigMomentSection from "../templates/newsletter/sections/BigMomentSection";
import { ImageBackground, StyleSheet } from "react-native";

import {
  provingGroundsBigMoment,
  topProvingGroundsMoments,
  provingGroundsData,
} from "../data";
import { useTheme } from "../../contexts/ThemeContext";
import { useEffect } from "react";

export default function CawNewsletter() {
  const { setScheme } = useTheme();
  useEffect(() => {
    setScheme("light");
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/PGBG.png")}
      style={styles.background}
    >
      <Newsletter>
        <BigMomentSection image={provingGroundsBigMoment} />

        <MatchOfTheNightSection matches={provingGroundsData} />

        <MomentsSection
          logo={require("../../assets/PG.png")}
          moments={topProvingGroundsMoments}
        />

        <MatchesSection matches={provingGroundsData} />
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
