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
  const getLayout = (count: number) => {
    // Maximum of 5 rows
    const rows = Math.min(5, count);

    // Items per row needed to fit within 5 rows
    const itemsPerRow = Math.max(Math.ceil(count / rows), 3);
    // Material UI grid uses 12 columns
    const gridSize = Math.max(12 / itemsPerRow, 1);

    // Optional width scaling
    let maxWidth = 300;

    if (itemsPerRow >= 5) maxWidth = 175;
    else if (itemsPerRow === 4) maxWidth = 225;
    else if (itemsPerRow === 3) maxWidth = 300;
    else if (itemsPerRow === 2) maxWidth = 400;
    else if (itemsPerRow === 1) maxWidth = 600;

    return { gridSize, maxWidth };
  };
  const { gridSize, maxWidth } = getLayout(matches.length);
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
            size={gridSize}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <HoverableCard
              style={{
                borderRadius: 16,
                maxWidth: maxWidth,
                height: "100%",
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
                  marginBottom: 1,
                  color: colours.textPrimary,
                  minHeight: 64,
                  maxHeight: 64,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.Header}
              </Typography>

              <StarRating rating={item.Rating || 0} />
            </HoverableCard>
          </Grid>
        ))}
      </Grid>
    </View>
  );
}
