import Newsletter from "../templates/newsletter/Newsletter";
import MomentsSection from "../templates/newsletter/sections/MomentsSection";
import MatchesSection from "../templates/newsletter/sections/MatchesSection";
import MatchOfTheNightSection from "../templates/newsletter/sections/MatchOfTheNightSection";
import BigMomentSection from "../templates/newsletter/sections/BigMomentSection";

import { ImageBackground, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { topProvingGroundsMoments } from "../data";
export const topMoments = [
  {
    Header: "Blue Bird Lays Out Challenge",
    Desc: "Blue Bird comes down to the ring and shares her frustration with having no challenger for Mayhem IV and proclaims that the Strike women's roster is scared of her. She lays out an open challenge for Mayhem IV. ",
    Rating: 5,
  },
];
export const BigMoment = "../images/SNLN110425.jpg";
export const Data = [
  {
    Header:
      "'The Spoiler' Mack vs Jessie Dixon - Women's Scary Box Qualifier - 0:57",
    Desc: "Mack pins Jessie Dixon and punches her ticket into the Womens Scary Box match at Mayhem IV. ",
    Rating: 4,
  },
  {
    Header:
      "Dawn Holloway vs Adrien Nemeth - Women's Scary Box Qualifier - 13:37",
    Desc: "Dawn Holloway hits an Iconic Elbow and earns her spot in the womens scary box. ",
    Rating: 4.5,
  },
  {
    Header: "Mariposa vs Relka - Women's TV Title Tournament - 25:07",
    Desc: "Relka moves on in the Womens TV Title tournament after planting Mariposa into the mat. ",
    Rating: 3.5,
  },
  {
    Header: "Sunflower vs Taylor Clark - Women's TV Title Tournament - 33:52",
    Desc: "Sunflower gets the win after hitting a Sunsault and moves on in the tournament.",
    Rating: 3.5,
  },
  {
    Header:
      "AJ Evans vs La Llorona Figureroa - Women's TV Title Tournament - 40:37",
    Desc: "La Llorona gets the pinfall victory and moves on in the tournament. ",
    Rating: 4,
  },
  {
    Header: "Sam Hudson vs Dizzy - Women's TV Title Tournament - 51:37",
    Desc: "Dizzy wins in an impressive debut and moves on in the tournament.",
    Rating: 3.5,
  },
  {
    Header:
      "Michelle Martinez vs Nebulosa - Women's TV Title Tournament - 59:28",
    Desc: "Michelle Martinez defeats the Rodkip trainee Nebuloso to move on in the tournament.",
    Rating: 2.5,
  },
  {
    Header:
      "Belladonna vs Reina De Fuego - Women's TV Title Tournament - 1:05:40",
    Desc: "Reina De Fuego gets the win in her debut after hitting a split legged moonsault and moves on in the TV Title tournament. ",
    Rating: 4,
  },
  {
    Header:
      "MadzTV vs SkullGalaxy (c) - Women's European Championship - 1:16:25",
    Desc: "Skull retains the European Championship after putting Madz through the announcers table and hitting a Galacta Bomb onto tacks. However earlier in the match it did look like Relka cost Madz the match…",
    Rating: 5,
  },
];
export default function StrikeNewsletter() {
  const { setScheme } = useTheme();

  useEffect(() => {
    setScheme("dark");
  }, []);
  return (
    <ImageBackground
      source={require("../../assets/SNLNBG.png")}
      style={styles.background}
    >
      <Newsletter>
        <BigMomentSection image={BigMoment} />

        <MatchOfTheNightSection matches={Data} />
        <MomentsSection
          logo={require("../../assets/SNLN.png")}
          moments={topMoments}
        />
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
