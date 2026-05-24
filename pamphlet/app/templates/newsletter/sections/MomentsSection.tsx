import { View, Image, Text } from "react-native-web";
import HoverableCard from "../../../../components/cards/hoverableCard";
import { useTheme } from "../../../../contexts/ThemeContext";
import StarRating from "../../../../components/visual/Radio";
import { newsletterStyles as styles } from "../newsletterStyles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { border } from "@mui/system";

type MomentItem = {
  Header: string;
  Desc: string;
  Rating?: number;
};

type Props = {
  title?: string;
  logo: any;
  moments: MomentItem[];
};

export default function MomentsSection({ logo, moments }: Props) {
  const { colours } = useTheme();
  // Decide Grid size and card max width based on number of items
  const getLayout = (count: number) => {
    switch (count) {
      case 1:
        return { gridSize: 12, maxWidth: 600 };
      case 2:
        return { gridSize: 6, maxWidth: 400 };
      case 3:
        return { gridSize: 4, maxWidth: 300 };
      case 4:
        return { gridSize: 3, maxWidth: 200 };
      case 5:
        return { gridSize: 2.4, maxWidth: 175 };
      default:
        // Fallback for any other number of items
        return {
          gridSize: Math.max(12 / count, 3),
          maxWidth: 300,
        };
    }
  };
  const { gridSize, maxWidth } = getLayout(moments.length);
  return (
    <View>
      <View
        style={[
          styles.sectionHeader,
          { borderBottomColor: colours.textPrimary },
        ]}
      >
        <Text style={[styles.headline, { color: colours.textPrimary }]}>
          This week on
        </Text>
        <Image source={logo} style={styles.brandLogo} />
      </View>

      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {moments.map((item, index) => (
          <Grid
            item
            size={gridSize}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <HoverableCard
              style={{
                padding: 8,
                borderRadius: 16,
                height: "100%",
                width: "100%",
                maxWidth: maxWidth,
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
                  marginBottom: 1,
                  minHeight: 64,
                  maxHeight: 64,
                  textAlign: "center",
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
                  fontSize: "0.875rem",
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
