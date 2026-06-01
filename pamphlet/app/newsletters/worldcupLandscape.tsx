import { ImageBackground, View } from "react-native";
import { useState, useEffect } from "react";
import TableSection from "../templates/newsletter/sections/TableSection";
import { useTheme } from "../../contexts/ThemeContext";
import { Image } from "react-native-web";
import HoverableCard from "../../components/cards/hoverableCard";
import HoverableButton from "../../components/visual/hoverableButton";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function worldcup() {
  const { colours, setScheme } = useTheme();

  const withOpacity = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  const [activeGroup, setActiveGroup] = useState<"A" | "B" | "C" | "D">("A");
  const globeIcon = (
    <Ionicons name="globe-outline" size={24} color={colours.textPrimary} />
  );

  const groupA = [
    { name: "Rodkip", nat: "Mexico", w: 4, d: 0, l: 0, pts: 12 },
    { name: "Jindrak", nat: "Finland", w: 3, d: 0, l: 1, pts: 9 },
    { name: "Chopper", nat: "Wales", w: 2, d: 0, l: 2, pts: 6 },
    { name: "Gabriel Kade", nat: "Canada", w: 1, d: 1, l: 2, pts: 4 },
    { name: "Ryan Rizal", nat: "Philippines", w: 1, d: 1, l: 2, pts: 4 },
    { name: "Flint McDagger", nat: "Scotland", w: 0, d: 0, l: 4, pts: 0 },
  ];

  const groupB = [
    { name: "Emerson Rivers", nat: "", w: 3, d: 1, l: 0, pts: 10 },
    { name: "Russell", nat: "United States", w: 2, d: 2, l: 0, pts: 8 },
    { name: "Tyler Frost", nat: "Libya", w: 2, d: 2, l: 0, pts: 8 },
    { name: "Caleb Blaze", nat: "Greece", w: 1, d: 0, l: 3, pts: 3 },
    { name: "Ahmed", nat: "Egypt", w: 1, d: 0, l: 3, pts: 3 },
    { name: "Luc", nat: "Vietnam", w: 0, d: 1, l: 3, pts: 1 },
  ];

  const groupC = [
    {
      name: "Filthy Flame Shadow",
      nat: "South Korea",
      w: 3,
      d: 0,
      l: 1,
      pts: 9,
    },
    { name: "Aku Suzuki", nat: "Japan", w: 3, d: 0, l: 1, pts: 9 },
    { name: "Harry Hale", nat: "England", w: 3, d: 0, l: 1, pts: 9 },
    { name: "Big Papi L", nat: "Dominican Rep.", w: 1, d: 0, l: 3, pts: 3 },
    { name: "Ultimo Macho", nat: "Puerto Rico", w: 1, d: 0, l: 3, pts: 3 },
    { name: "Lizard Boy", nat: "Madagascar", w: 1, d: 0, l: 3, pts: 3 },
  ];

  const groupD = [
    { name: "Nyatikali", nat: "Kenya", w: 4, d: 0, l: 0, pts: 12 },
    { name: "Eoin", nat: "Ireland", w: 3, d: 0, l: 1, pts: 9 },
    { name: "Luke Mercer", nat: "Germany", w: 2, d: 0, l: 2, pts: 6 },
    { name: "Vittorio Grau", nat: "Switzerland", w: 2, d: 0, l: 2, pts: 6 },
    { name: "Paz", nat: "Australia", w: 1, d: 0, l: 3, pts: 3 },
    { name: "Aussie Avatar", nat: "New Zealand", w: 0, d: 0, l: 4, pts: 0 },
  ];

  const groups = {
    A: {
      title: "Group A",
      wrestlers: groupA,
      source: require("../../assets/WorldCupA.png"),
      review:
        "Group A has provided that classic tournament feel, where the early-round form has started to seperate the true contenders from those barely scraping through. Despite an early loss to Rodkip, Jindrak has returned to form and is now level on points." +
        "\n" +
        "\n" +
        "With 2 weeks left, Ryan Rizal is making a late recovery, but is going to have to try to draw or better in his last two matchups against Jindrak and Rodkip to have a chance at qualifying. But hearing of his commitment to the Phillipines, I wouldn&apos;t be surprised if he pulls through." +
        "\n" +
        "\n" +
        "Rodkip is all but qualified and is looking like the Freezler favourite to win the whole tournament.",
    },
    B: {
      title: "Group B",
      wrestlers: groupB,
      source: require("../../assets/WorldCupB.png"),
      review:
        "Group B has been defined by balance, consistency, and the kind of in-ring storytelling that makes me a fan of round robin formats. Russell and Tyler have been the centerpiece acts, and their match was the match of the tournament so far, with the timing, pacing, and tension giving it the kind of big-match feel that fit the fourth week. Their draw was a fitting end to a match that could have gone either way, and has left the group wide open with 2 weeks to go." +
        "\n" +
        "\n" +
        "Emerson has been the most consistent performer in the group, and is in a strong position to qualify, but with a tough matchup against Russell coming up in the final week, nothing is guaranteed. Caleb and Ahmed have both had their moments, but are going to require some wins to qualify each other, and Luc is going to have to win out and hope for both to make mistakes to have a chance at qualifying.",
    },
    C: {
      title: "Group C",
      wrestlers: groupC,
      source: require("../../assets/WorldCupC.png"),
      review:
        "Group C has become the tournament’s great pendulum, constantly swinging from one direction to the next, with the top of the block changing hands so often that stability has become a luxury nobody seems able to afford." +
        "\n" +
        "\n" +
        "Harry Hale, Filthy Flame Shadow, and Aku Suzuki have all taken turns looking like the man to beat, but every time one of them starts to separate, the group snaps back into chaos and drags everyone into the same messy, compelling scramble for positioning." +
        "\n" +
        "\n" +
        "That same volatility has made it hard to predict who will qualify, with all three of the bottom 3 having tough matchups in the final two weeks." +
        "\n" +
        "\n" +
        "I, personally am rooting for Lizard Boy.",
    },
    D: {
      title: "Group D",
      wrestlers: groupD,
      source: require("../../assets/WorldCupD.png"),
      review:
        "Group D has had a different kind of heat, one driven by outrage, momentum, and a clear top-end force in Nyatikali." +
        "\n" +
        "Nyati, in his debut in Shock, has done more than simply win, scoring knockout wins, including over the previously undefeated Eoin, and has set a precedent for the group noone appears to be able to match." +
        "\n" +
        "Vittorio however has managed to perform well and calmly collect points, looking set to qualify, but with the points spread so evenly, there is still a chance for Paz and Luke Mercer to qualify, and with the way the group has been going, I wouldn't be surprised if they pull it off." +
        "\n" +
        "And then there is the traitorous Aussie Avatar, who has got what he deserved for betraying his country and joining the New Zealanders, losing all 3 of his matches and being the only wrestler in the tournament to not score a single point. I hope he is ashamed of himself.",
    },
  } as const;

  useEffect(() => {
    setScheme("dark");
  }, [setScheme]);

  const current = groups[activeGroup];

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#280A35",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "40%",
          height: "10%",
          paddingTop: 16,
        }}
      >
        {(["A", "B", "C", "D"] as const).map((group) => (
          <HoverableCard
            style={[
              activeGroup === group && { backgroundColor: colours.surface },
              {
                borderColor: colours.textPrimary,
                borderWidth: 2,
              },
            ]}
          >
            <HoverableButton
              key={group}
              onPress={() => setActiveGroup(group)}
              label={`Group ${group}`}
              icon={globeIcon}
            ></HoverableButton>
          </HoverableCard>
        ))}
      </View>

      <View style={{ width: "100%", left: "10%" }}>
        <TableSection wrestlers={current.wrestlers} title={current.title} />
      </View>
    </View>
  );
}
