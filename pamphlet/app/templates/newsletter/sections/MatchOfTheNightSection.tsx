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
};

export default function MatchOfTheNightSection({ matches }: Props) {
  const { colours } = useTheme();

  // Find the highest rated match
  const match = matches.reduce(
    (best, curr) => ((curr.Rating || 0) > (best.Rating || 0) ? curr : best),
    matches[0],
  );

  return (
    <Grid container spacing={1.5} alignItems="center">
      <Grid item size={2}>
        <Image
          source={require("../../../../assets/SW_Illustrated_Logo.png")}
          style={{ height: 200, width: "100%", objectFit: "contain" }}
          resizeMode="contain"
        />
      </Grid>
      <Grid item size={1.5}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textAlign: "justify", marginTop: 2 }}
        >
          SWI's Match of the Night
        </Typography>
      </Grid>
      <Grid item size={8.5}>
        <HoverableCard
          style={{
            backgroundColor: colours.card,
            padding: 20,
            borderRadius: 16,
            height: 200,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: 1,
              alignSelf: "center",
              textAlign: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {match.Header}
          </Typography>
          {/**<Typography
            variant="body1"
            sx={{ textAlign: "center", marginBottom: 1, fontSize: 16 }}
          >
            {match.Desc}
          </Typography>**/}
          <StarRating rating={match.Rating || 0} />
        </HoverableCard>
      </Grid>
    </Grid>
  );
}
