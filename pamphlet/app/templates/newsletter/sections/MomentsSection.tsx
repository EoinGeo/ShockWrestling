import { View, Image, Text } from "react-native-web";
import HoverableCard from "../../../../components/cards/hoverableCard";
import { useTheme } from "../../../../contexts/ThemeContext";
import StarRating from "../../../../components/visual/Radio";
import { newsletterStyles as styles } from "../newsletterStyles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function MomentsSection({ title, logo, moments }: Props) {
  const { colours } = useTheme();

  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={[styles.headline, { color: colours.textPrimary }]}>
          This week on
        </Text>
        <Image source={logo} style={styles.brandLogo} />
      </View>

      {/* Moments Grid */}
      <Grid container spacing={2}>
        {moments.map((item, index) => (
          <Grid item size={4} key={index}>
            <HoverableCard
              style={{
                backgroundColor: colours.card,
                padding: 12,
                borderRadius: 16,
                height: 225,
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                {item.Header}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  marginBottom: 1,
                  fontSize: "clamp(8px, 11px)",
                }}
              >
                {item.Desc}
              </Typography>
              <StarRating rating={item.Rating || 0} />
            </HoverableCard>
          </Grid>
        ))}
      </Grid>
    </View>
  );
}
