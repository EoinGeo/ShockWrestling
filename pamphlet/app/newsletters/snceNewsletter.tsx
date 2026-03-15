import Newsletter from "../templates/newsletter/Newsletter";
import MomentsSection from "../templates/newsletter/sections/MomentsSection";
import MatchesSection from "../templates/newsletter/sections/MatchesSection";
import MatchOfTheNightSection from "../templates/newsletter/sections/MatchOfTheNightSection";
import BigMomentSection from "../templates/newsletter/sections/BigMomentSection";

import { ImageBackground, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
export const topMoments = [
  {
    Header: "TJ Baker Makes His Choice - 1:04:19",
    Desc: "TJ Baker announced that after some reflection, that he wanted to remain on Friday Night Strike and would be challenging for The Global Championship at Mayhem IV, whether it be his former best friend Animus, or his current best friend Emerson Rivers. ",
    Rating: 5,
  },
];
export const BigMoment = "../images/SNCE080325.jpg";
export const Data = [
  {
    Header:
      "Eoin (c) vs Cameron Barker (Perkin attacks Cameron and challenges Eoin) - European Championship - 1:08",
    Desc: "Eoin gets his 61st straight win and retained the European Championship after facing an unexpected returning Perkin that attacked Cameron Barker and stole his spot in the match",
    Rating: 4,
  },
  {
    Header:
      "Flyboy DJ Holmes (c) vs All Mighty Tundra - Zoom Championship - 13:22",
    Desc: "All Mighty Tundra successfully captured his first championship in Shock Wrestling after pinning DJ Holmes.",
    Rating: 4,
  },
  {
    Header:
      "Payne & Poison (c) vs The Hammer Bros - World Tag Team Championships - 22:24",
    Desc: "Payne & Poison were able to keep the peace amongst themselves long enough to overcome the reunited Hammer Bros. and retain their championships.",
    Rating: 5,
  },
  {
    Header:
      "Delilah Shields (c) vs SkullGalaxy - Belt of Artemis and European Championship Merger Match - Extreme Rules - 37:15",
    Desc: "Skull Galaxy continues taking the Shock Universe by storm after defeating Delilah Shields and unifying the Belt Of Artemis with the Women's European Championship.",
    Rating: 4.5,
  },
  {
    Header:
      "Filthy Flame Shadow vs Jacob Hendry (c) - Blockbuster Championship - 50:32",
    Desc: "'Filthy' Flame Shadow proved why he was the dirtiest guy in the locker room by capturing the Blockbuster World Championship for a 2nd time when Vittorio Grau assisted him in defeating Jacob Hendry.",
    Rating: 3.5,
  },
  {
    Header: "(Impromptu) TJ Baker (c) vs Jay Wolf - PWF Championship - 1:11:13",
    Desc: "Jay Wolf made his way out and challenged TJ Baker to a match for the PWF Championship. TJ Baker retained via pinfall.",
    Rating: 4,
  },
  {
    Header: "Emerson Rivers vs Animus (c) - Shockwave Global Title - 1:20:59",
    Desc: "Animus retained the Global Championship but Emerson Rivers looked to have had the champ reeling until he was disqualified due to accidentally attacking the referee. Post match Rivers unhappy with the result brutalized Animus with a steel chair. ",
    Rating: 3.5,
  },
  {
    Header: "Robert (c) vs Ziggy Danger - World Championship - 1:32:48",
    Desc: "Robert Ballantyne retained the ShockWrestling World Championship after being taken to his limits in what was a career defining match for the challenger Ziggy Danger. Post Match Ziggy and Rob shake hands and afterwards Nicholas makes his return and attacks Rob.",
    Rating: 6,
  },
];
export default function StrikeNewsletter() {
  const { setScheme } = useTheme();

  useEffect(() => {
    setScheme("dark");
  }, []);
  return (
    <ImageBackground
      source={require("../../assets/SNCEBG.png")}
      style={styles.background}
    >
      <Newsletter>
        <BigMomentSection image={BigMoment} />

        <MatchOfTheNightSection matches={Data} />

        <MatchesSection matches={Data} />
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
