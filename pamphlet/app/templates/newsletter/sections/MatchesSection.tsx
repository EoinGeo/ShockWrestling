import { View, Text } from "react-native-web";
import HoverableCard from "../../../../components/cards/hoverableCard";
import { useTheme } from "../../../../contexts/ThemeContext";
import StarRating from "../../../../components/visual/Radio";
import { newsletterStyles as styles } from "../newsletterStyles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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

  if (!matches || matches.length === 0) return null;

  const highest = Math.max(...matches.map((m) => m.Rating || 0));

  return (
    <View style={styles.sideStack}>
      {/* Section Header */}
      <View
        style={[
          styles.sectionHeader,
          { borderBottomColor: colours.textPrimary },
        ]}
      >
        <Text style={[styles.headline, { color: colours.textPrimary }]}>
          Full Matchcard Review
        </Text>
      </View>

      {/* Matches Grid */}
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {matches.map((item, index) => (
          <Grid
            item
            size={4}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <HoverableCard
              style={{
                padding: 16,
                borderRadius: 16,
                width: "100%",
                maxWidth: 300,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderColor: colours.textPrimary,
                borderWidth: 2,
              }}
            >
              <Typography
                variant="h7"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: 1,
                  color: colours.textPrimary,
                }}
              >
                {item.Header}
              </Typography>

              <StarRating rating={item.Rating || 0} />

              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  marginTop: 2,
                  color: colours.textSecondary,
                  fontSize: item.Rating === highest ? 12 : 10,
                }}
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
