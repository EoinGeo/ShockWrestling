import { ImageBackground, StyleSheet } from "react-native";
import Newsletter from "../templates/newsletter/Newsletter";
import MomentsSection from "../templates/newsletter/sections/MomentsSection";
import MatchesSection from "../templates/newsletter/sections/MatchesSection";
import MatchOfTheNightSection from "../templates/newsletter/sections/MatchOfTheNightSection";
import BigMomentSection from "../templates/newsletter/sections/BigMomentSection";

import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function FNNewsletter() {
  const { setScheme } = useTheme();
  const fightNightData = [
    {
      Header: "JVH (c) vs Gabriel Walker - LAW World Championship - 11:14",
      Desc: "",
      Rating: 3,
    },
    { Header: "TJ Baker vs Capps - 20:31", Desc: "", Rating: 4.5 },
    {
      Header: "Clone 99 vs Blue Bird (c) - Women's Global Championship - 36:36",
      Desc: "",
      Rating: 4,
    },
    {
      Header:
        "Ziggy & Carlos Danger vs Uncle Norrington & Robert Ballantyne - 45:26",
      Desc: "",
      Rating: 3.5,
    },
    {
      Header:
        "BWI (c) vs Vengeance vs Regeneration x vs Evan Stark & Steven Chronicles - Shockwave Tag Team Championships - 1:02:56",
      Desc: "",
      Rating: 4,
    },
    {
      Header:
        "Gavin Belle (c) vs Vittorio Grau - Outer Rim Championship - 1:17:07",
      Desc: "",
      Rating: 5,
    },
    {
      Header:
        "Power Buff Girls vs Pretty Talent Assembly (c) - Women's World Tag Team Championships - 1:38:50",
      Desc: "",
      Rating: 4,
    },
    {
      Header:
        "Sean Payne (c) vs Pat Cross - So Far So Good Television Championship Ladder Match - 1:47:41",
      Desc: "",
      Rating: 6,
    },
    {
      Header:
        "Relka vs Trixie Kaneki (c) - Chaos Championship Underground Match - 2:07:16",
      Desc: "",
      Rating: 5.5,
    },
    {
      Header:
        "Nyatikali vs Emerson Rivers (c) - Men's Global Championship - 2:24:01",
      Desc: "",
      Rating: 3,
    },
    {
      Header:
        "Sunflower (c) vs Killa - Women's World Championship Mack Daddy as Special Guest Referee - 2:37:31",
      Desc: "",
      Rating: 4,
    },
    {
      Header:
        "Johnathan Barker (c) vs Xander Blackwood vs Voss Tonor - European Championship - 2:54:45",
      Desc: "",
      Rating: 5.5,
    },
    {
      Header:
        "Eoin (c) vs Germ Stars - Intercontinental Championship - 3:14:12",
      Desc: "",
      Rating: 5,
    },
    {
      Header:
        "Filthy Flame Shadow vs El Garuda (c) - Zoom Championship - 3:38:15",
      Desc: "",
      Rating: 3.5,
    },
    {
      Header: "50 Person Rumble - United States Championship - 3:47:46",
      Desc: "",
      Rating: 6,
    },
    {
      Header: "Nicholas (c) vs Animus - Shockwave World Championship - 4:50:56",
      Desc: "",
      Rating: 6.5,
    },
  ];
  useEffect(() => {
    setScheme("light");
  }, []);
  return (
    <ImageBackground
      source={require("../../assets/FightNightBG.png")}
      style={styles.background}
    >
      <Newsletter>
        <BigMomentSection image={"../images/FightNight26.jpg"} />

        <MatchOfTheNightSection
          matches={fightNightData}
          logo={require("../../assets/FightNight_2026_Logo.png")}
        />

        <MatchesSection matches={fightNightData} />
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
