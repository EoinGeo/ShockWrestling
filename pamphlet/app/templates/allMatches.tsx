import { View, Text, Image, StyleSheet } from "react-native-web";
import HoverableCard from "../../components/cards/hoverableCard";
import { ThemeProvider, useTheme } from "../../contexts/ThemeContext";
import StarRating from "../../components/visual/Radio";
import { cawData, provingGroundsData, strikeData } from "../data";

export default function allMatches() {
  const { colours } = useTheme();

  return (
    <ThemeProvider>
      <View style={styles.page}>
        <View style={styles.pageBreak}>
          <View style={styles.masthead}>
            <Text style={[styles.title, { color: colours.textPrimary }]}>
              Full Match Review
            </Text>
          </View>
          <View style={styles.featureRow}>
            {/* ───── CAW ROW ───── */}
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
              {cawData.map((item, index) => (
                <HoverableCard key={index} style={styles.article}>
                  <Text style={styles.headline}>{item.Header}</Text>
                  <Text style={styles.body}>{item.Desc}</Text>
                  <StarRating rating={item.Rating || 0} />
                </HoverableCard>
              ))}
            </View>

            {/* ───── STRIKE ROW ───── */}
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
              {strikeData.map((item, index) => (
                <HoverableCard key={index} style={styles.article}>
                  <Text style={styles.headline}>{item.Header}</Text>
                  <Text style={styles.body}>{item.Desc}</Text>
                  <StarRating rating={item.Rating || 0} />
                </HoverableCard>
              ))}
            </View>

            {/* ───── PROVING GROUNDS ROW ───── */}
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
                  This Week on Proving Grounds
                </Text>
                <Image
                  source={require("./images/PG.png")}
                  style={styles.strikeImage}
                />
              </View>
              {provingGroundsData.map((item, index) => (
                <HoverableCard key={index} style={styles.article}>
                  <Text style={styles.headline}>{item.Header}</Text>
                  <Text style={styles.body}>{item.Desc}</Text>
                  <StarRating rating={item.Rating || 0} />
                </HoverableCard>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ThemeProvider>
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
    marginBottom: 40,
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
    width: "33%",
    justifyContent: "space-between",
    gap: 24,
  },

  columns: {
    columnCount: 3,
    columnGap: 32,
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
