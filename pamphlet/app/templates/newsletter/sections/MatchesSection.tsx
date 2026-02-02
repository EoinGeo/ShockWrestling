import { View, Image, Text } from "react-native-web";
import HoverableCard from "../../../../components/cards/hoverableCard";
import { useTheme } from "../../../../contexts/ThemeContext";
import StarRating from "../../../../components/visual/Radio";
import { newsletterStyles as styles } from "../newsletterStyles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { alignContent, height, justifyContent, minHeight } from "@mui/system";

type MatchItem = {
  Header: string;
  Desc: string;
  Rating?: number;
};

type Props = {
  matches: MatchItem[];
};

export default function MatchesSection({ matches }: Props) {
  const { colours } = useTheme();
  const highest = Math.max(...matches.map((m) => m.Rating || 0));

  return (
    <View style={styles.sideStack}>
      <View style={styles.sectionHeader}>
        <Text style={[styles.headline, { color: colours.textPrimary }]}>
          Full Matchcard Review
        </Text>
      </View>

      <Grid container spacing={3}>
        {matches.map((item, index) => (
          <Grid item size={4} key={index}>
            <HoverableCard
              style={{
                backgroundColor: colours.card,
                padding: 12,
                borderRadius: 16,
                minHeight: 150,
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                {item.Header}
              </Typography>
              {/**{item.Rating === highest && (
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    marginBottom: 1,
                  }}
                >
                  SWI's Match of the Night
                </Typography>
              )}**/}
              <StarRating rating={item.Rating || 0} />
              {/** **/}
              <Typography
                variant="body1"
                sx={{ textAlign: "center", marginTop: 2, fontSize: 11 }}
              >
                {item.Desc}
              </Typography>
            </HoverableCard>
          </Grid>
        ))}
      </Grid>
    </View>
  );
}
