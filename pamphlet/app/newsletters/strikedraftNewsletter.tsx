import Newsletter from "../templates/newsletter/Newsletter";
import { ImageBackground, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { View, Text, Image } from "react-native-web";
import HoverableCard from "../../components/cards/hoverableCard";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
export default function StrikeNewsletter() {
  const { setScheme } = useTheme();
  const { colours } = useTheme();
  const withOpacity = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  const Round1Picks = [
    "TJ Baker - Global Champion",
    "Robert Ballantyne - BWI Champion",
    "Capps",
    "Sean Payne",
    "Bluebird - Global Champion",
    "Skull - European Champion",
    "Emerson Rivers",
    "Gavin Belle",
    "Ziggy Danger",
    "Cameron Barker - Shock Tag Team Champion",
    "Cameron Jones - Shock Tag Team Champion",
    "Johnathon Barker - European Champion",
    "Gabriel Walker",
    "Vittorio Grau ",
    "Big H",
  ];
  const Round2Picks = [
    "Zacko",
    "Voss Tonor",
    "The Hammer Bros Trio",
    "Beau King",
    "Jacob",
    "Vengeance's Tag Team - Andre Knight & Aiden Albright",
    "Flyboy DJ Holmes",
    "Xander Blackwood",
    "Damian Cruz",
    "Nyatikali",
    "Trixie Kaneki",
    "Max Marshall",
    "The Power Chords - Ricky Pierce & Aiden Travis",
    "Relka",
    "Devil Han",
  ];

  useEffect(() => {
    setScheme("dark");
  }, []);
  return (
    <ImageBackground
      source={require("../../assets/STRIKEBG.png")}
      style={styles.background}
    >
      <Newsletter>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            borderRadius: 36,

            backgroundColor: withOpacity(colours.textSecondary, 0.4),
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <Image
            source={require("../../assets/STRIKE.png")}
            style={{ height: 200, width: "95%" }}
            resizeMode="contain"
          />
        </View>
        <Grid container>
          <Grid item size={6}>
            <View
              style={[
                styles.sectionHeader,
                {
                  borderBottomColor: "#ff6b7a",
                  borderBottomStyle: "dashed",
                },
              ]}
            >
              <Text style={[styles.headline, { color: "#ff6b7a" }]}>
                Round 1
              </Text>
            </View>
            {Round1Picks.map((item, index) => (
              <HoverableCard
                style={{
                  borderRadius: 16,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderColor: colours.textPrimary,
                  borderWidth: 2,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: colours.textPrimary,
                  }}
                >
                  {item}
                </Typography>
              </HoverableCard>
            ))}
          </Grid>
          <Grid item size={6}>
            <View
              style={[
                styles.sectionHeader,
                {
                  borderBottomColor: "#ff6b7a",
                  borderBottomStyle: "dashed",
                },
              ]}
            >
              <Text style={[styles.headline, { color: "#ff6b7a" }]}>
                Round 2
              </Text>
            </View>
            {Round2Picks.map((item, index) => (
              <HoverableCard
                style={{
                  borderRadius: 16,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderColor: colours.textPrimary,
                  borderWidth: 2,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: colours.textPrimary,
                  }}
                >
                  {item}
                </Typography>
              </HoverableCard>
            ))}
          </Grid>
        </Grid>
      </Newsletter>
    </ImageBackground>
  );
}

export const styles = StyleSheet.create({
  background: {
    width: 1080,
    height: 1920, // important for web
  },
  headline: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 8,
    borderBottomWidth: 1,
  },
});
