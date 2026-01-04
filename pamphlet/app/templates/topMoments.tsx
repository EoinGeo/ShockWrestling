import { View, Text, Image, StyleSheet } from "react-native-web";
import HoverableCard from "../../components/cards/hoverableCard";
import { useTheme } from "../../contexts/ThemeContext";
import StarRating from "../../components/visual/Radio";
import {
  topCawMoments,
  topStrikeMoments,
  topProvingGroundsMoments,
  cawBigMoment,
  strikeBigMoment,
  provingGroundsBigMoment,
} from "../data";

export default function topMoments() {
  const { colours } = useTheme();

  return (
    <View style={styles.page}>
      <View style={styles.pageBreak}>
        <View style={styles.masthead}>
          <Text style={[styles.title, { color: colours.textPrimary }]}>
            SW Illustrated Magazine
          </Text>
          <Text style={[styles.subtitle, { color: colours.textSecondary }]}>
            An Official Document from Shock Wrestling
          </Text>
        </View>

        {/* ───── CAW ROW ───── */}
        <View style={styles.featureRow}>
          <View style={styles.sideStack}>
            <View
              style={[
                styles.masthead,
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Text style={[styles.headline, { color: colours.textPrimary }]}>
                Top Moments on CAW
              </Text>
              <Image
                source={require("./images/CAW.png")}
                style={styles.cawImage}
              />
            </View>
            {topCawMoments.map((item, index) => (
              <HoverableCard key={index} style={styles.article}>
                <Text style={styles.headline}>{item.Header}</Text>
                <Text style={styles.body}>{item.Desc}</Text>
                <StarRating rating={item.Rating || 0} />
              </HoverableCard>
            ))}
          </View>
          <View style={styles.heroWrap}>
            <img
              src={cawBigMoment}
              style={{
                height: "100%",
                borderRadius: 12,
                objectFit: "contain",
              }}
            />
          </View>
        </View>

        {/* ───── STRIKE ROW ───── */}
        <View style={styles.featureRow}>
          <View style={styles.heroWrap}>
            <img
              src={strikeBigMoment}
              style={{
                height: "100%",
                borderRadius: 20,
                objectFit: "contain",
              }}
            />
          </View>
          <View style={styles.sideStack}>
            <View
              style={[
                styles.masthead,
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Text
                style={[
                  styles.headline,
                  { color: colours.textPrimary, lineHeight: 50, width: "66" },
                ]}
              >
                This Week on Strike
              </Text>
              <Image
                source={require("./images/STRIKE.png")}
                style={styles.strikeImage}
              />
            </View>
            {topStrikeMoments.map((item, index) => (
              <HoverableCard key={index} style={styles.article}>
                <Text style={styles.headline}>{item.Header}</Text>
                <Text style={styles.body}>{item.Desc}</Text>
                <StarRating rating={item.Rating || 0} />
              </HoverableCard>
            ))}
          </View>
        </View>

        {/* ───── PROVING GROUNDS ROW ───── */}
        <View style={styles.featureRow}>
          <View style={styles.sideStack}>
            <View
              style={[
                styles.masthead,
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Text style={[styles.headline, { color: colours.textPrimary }]}>
                This Week on Proving Grounds
              </Text>
              <Image
                source={require("./images/PG.png")}
                style={styles.cawImage} // reuse sizing or create new style
              />
            </View>
            {topProvingGroundsMoments.map((item, index) => (
              <HoverableCard key={index} style={styles.article}>
                <Text style={styles.headline}>{item.Header}</Text>
                <Text style={styles.body}>{item.Desc}</Text>
                <StarRating rating={item.Rating || 0} />
              </HoverableCard>
            ))}
          </View>
          <View style={styles.heroWrap}>
            <img
              src={provingGroundsBigMoment}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 12,
                objectFit: "contain",
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  page: {
    paddingHorizontal: "6vw",
    paddingTop: 32,
    width: "100vw",
    height: "100vh",
  },

  /* ───── TOP FEATURE ───── */
  masthead: {
    marginBottom: 32,
    borderBottomWidth: 1,
    paddingBottom: 16,
  },

  title: {
    fontSize: 64,
    fontWeight: "900",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 32,
    textAlign: "center",
    marginTop: 8,
  },

  featureRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
  },

  heroWrap: {
    width: "50%",
  },

  cawImage: {
    height: 75,
    width: 125,
  },
  strikeImage: {
    height: 75,
    width: 150,
  },

  sideStack: {
    width: "50%",
    justifyContent: "space-between",
    gap: 24,
  },

  article: {
    width: "100%",
    marginBottom: 32,
    alignItems: "center",
  },

  headline: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },

  body: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
  },
});
