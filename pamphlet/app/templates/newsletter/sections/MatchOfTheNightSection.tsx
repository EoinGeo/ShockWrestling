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
  colours: overrideColours,
}: Props) {
  const { colours } = useTheme();

  // Find the highest rated match
  const match = matches.reduce(
    (best, curr) => ((curr.Rating || 0) > (best.Rating || 0) ? curr : best),
    matches[0],
  );

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item size={2}>
        <Image
          source={require("../../../../assets/SW_Illustrated_Logo.png")}
          style={{ height: 100, width: "100%" }}
          resizeMode="contain"
        />
      </Grid>
      <Grid item size={2}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            margin: 2,
            color: overrideColours?.textPrimary || colours.textPrimary,
          }}
        >
          SWI's Match of the Night
        </Typography>
      </Grid>
      <Grid item size={8}>
        <HoverableCard
          style={{
            borderRadius: 16,
            minHeight: 100,
            borderColor: colours.textPrimary,
            borderWidth: 2,
          }}
        >
          <Typography
            variant="h5"
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
