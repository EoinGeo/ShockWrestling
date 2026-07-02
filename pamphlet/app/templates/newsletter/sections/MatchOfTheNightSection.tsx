import { View, Text, Image } from "react-native-web";
import HoverableCard from "../../../../components/cards/hoverableCard";
import StarRating from "../../../../components/visual/Radio";
import { useTheme } from "../../../../contexts/ThemeContext";
import { newsletterStyles as styles } from "../newsletterStyles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { height } from "@mui/system";

type MatchItem = {
  Header: string;
  Desc: string;
  Rating?: number;
};

type Props = {
  matches: MatchItem[];
  colours?: any;
};

export default function MatchOfTheNightSection({
  matches,
  logo,
  colours: overrideColours,
}: Props) {
  const { colours } = useTheme();
  const withOpacity = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  // Find the highest rated match
  const match = matches.reduce(
    (best, curr) => ((curr.Rating || 0) > (best.Rating || 0) ? curr : best),
    matches[0],
  );

  return (
    <Grid container spacing={1} alignItems="center" justifyContent="center">
      <Grid item min size={4}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            borderRadius: 36,

            backgroundColor: withOpacity(colours.textSecondary, 0.4),

            // Blur (web-supported)
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <Image
            source={logo}
            style={{ height: 250, width: "95%" }}
            resizeMode="contain"
          />
        </View>
      </Grid>
      <Grid item size={8}>
        <View
          style={[
            {
              borderBottomColor: colours.textPrimary,
              marginBottom: 16,
              borderBottomWidth: 1,
              width: "80%",
              left: "10%",
            },
          ]}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              margin: 2,
              color: overrideColours?.textPrimary || colours.textPrimary,
            }}
          >
            SWI's Match of the Night
          </Typography>
        </View>
        <HoverableCard
          style={{
            borderRadius: 16,
            minHeight: 100,
            height: "100%",
            borderColor: colours.textPrimary,
            borderWidth: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 1,
              color: colours.textPrimary,
            }}
          >
            {match.Header}
          </Typography>

          <StarRating rating={match.Rating || 0} />

          {/* Optional description if you re-enable it later */}
          {/* 
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              marginTop: 2,
              color: colours.textSecondary,
            }}
          >
            {match.Desc}
          </Typography>
          */}
        </HoverableCard>
      </Grid>
    </Grid>
  );
}
