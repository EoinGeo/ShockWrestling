import { alignContent } from "@mui/system";
import { StyleSheet } from "react-native-web";

export const newsletterStyles = StyleSheet.create({
  /* ───── VIEWPORT ───── */
  viewport: {
    justifyContent: "center",
    alignItems: "center",
    
  },

  /* ───── FIXED CANVAS ───── */
  canvas: {
    width: 1080,
    height: 1920,
    overflow: "auto", // allow scrolling instead of clipping
    paddingHorizontal: 64,
    paddingTop: 48,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },

  /* ───── STACK ───── */
  stack: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    flexShrink: 0,
  },

  /* ───── MASTHEAD ───── */
  masthead: {
    paddingBottom: 8,
    marginBottom: 16,
    borderBottomWidth: 1,
    flexShrink: 0,
  },

  logo: {
    width: 1080,
    height: 120,
    alignSelf: "center",
  },

  /* ───── HERO ───── */
  heroWrap: {
    width: "100%",
    height: 280,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  /* ───── SECTION HEADERS ───── */
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
  },

  brandLogo: {
    height: 80,
    width: 120,
    resizeMode: "contain",
  },

  headline: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },

  body: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: "center",
  },

  /* ───── MOMENTS & MATCHES GRID ───── */
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },

  card: {
    flex: 1,              // allow card to grow
    minWidth: 300,        // prevents shrinking too small
    maxWidth: "33%",      // caps at 1/3 of row
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 12,     // spacing between rows
  },

  momentHeadline: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },

  article: {
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
  },

  matchOfNight: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
    textAlign: "center",
  },
  momentsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start", // left-align, we'll use margins for spacing
    marginTop: 24,
  },

  momentCard: {
    width: "32%",         // 3 per row
    minWidth: 300,        // prevents shrinking too small
    marginRight: "2%",    // spacing between cards horizontally
    marginBottom: 24,     // spacing between rows
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    flexShrink: 0,
  },

});
