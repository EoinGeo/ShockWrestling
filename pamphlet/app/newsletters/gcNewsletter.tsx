import { ImageBackground, StyleSheet } from "react-native";
import Newsletter from "../templates/newsletter/Newsletter";
import MomentsSection from "../templates/newsletter/sections/MomentsSection";
import MatchesSection from "../templates/newsletter/sections/MatchesSection";
import MatchOfTheNightSection from "../templates/newsletter/sections/MatchOfTheNightSection";
import BigMomentSection from "../templates/newsletter/sections/BigMomentSection";
import { View, Text, Image } from "react-native-web";
import { gcBigMoment, gcData } from "../data";
import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function GCNewsletter() {
  const { setScheme, colours } = useTheme();

  const withOpacity = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  useEffect(() => {
    setScheme("dark");
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
        <View
          style={{
            backgroundColor: withOpacity(colours.surface, 0.4),
            padding: 20,
            borderRadius: 36,
          }}
        >
          <MatchesSection matches={gcData} />
        </View>
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
