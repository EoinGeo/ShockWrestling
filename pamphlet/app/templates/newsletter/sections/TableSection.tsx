import { View, Text, Image } from "react-native-web";
import HoverableCard from "../../../../components/cards/hoverableCard";
import Grid from "@mui/material/Grid";
import { StyleSheet } from "react-native";
import { newsletterStyles as styles } from "../newsletterStyles";
import { useTheme } from "../../../../contexts/ThemeContext";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";

/**
 * Flag CDN base (fast + stable + no CSS dependency)
 * 40px is a good balance for newsletters + export
 */
const FLAG_CDN = "https://flagcdn.com/w40";

const FLAGS: Record<string, string> = {
  Mexico: "mx",
  Finland: "fi",
  Canada: "ca",
  Philippines: "ph",
  Wales: "gb-wls",
  Scotland: "gb-sct",
  England: "gb-eng",
  "United States": "us",
  Japan: "jp",
  Ireland: "ie",
  Germany: "de",
  Australia: "au",
  "New Zealand": "nz",
  Switzerland: "ch",
  Greece: "gr",
  Egypt: "eg",
  Vietnam: "vn",
  "South Korea": "kr",
  Libya: "ly",
  Kenya: "ke",
  Madagascar: "mg",
  "Puerto Rico": "pr",
  "Dominican Rep.": "do",
};

const COL_HEADERS = ["", "Wrestler", "Nationality", "W", "D", "L", "Pts"];
const COL_SPANS = [1, 5, 2, 1, 1, 1, 1];

function getFlagUrl(nation: string) {
  const code = FLAGS[nation];
  return `${FLAG_CDN}/${code}.png`;
}

function FlagImage({ src }: { src: string }) {
  const { colours, isVertical } = useTheme();
  return (
    <Image
      source={{ uri: src }}
      style={{
        width: isVertical ? 18 : 72,
        height: isVertical ? 12 : 48,
        resizeMode: "cover",
      }}
    />
  );
}

function DashLine() {
  const { colours, isVertical } = useTheme();

  return (
    <View
      style={[
        styles.sectionHeader,
        {
          borderBottomColor: "#ff6b7a",
          borderBottomStyle: "dashed",
        },
      ]}
    >
      <Text
        style={[
          styles.headline,
          { fontSize: isVertical ? 24 : 32, color: "#ff6b7a" },
        ]}
      >
        Elimination Zone
      </Text>
    </View>
  );
}
function formatNationality(code: string) {
  if (!code) return "";

  if (code.startsWith("gb-")) {
    return code.split("-")[1].toUpperCase();
  }

  return code.toUpperCase();
}
function WrestlerRow({
  wrestler,
  index,
  flagCache,
}: {
  wrestler: any;
  index: number;
  flagCache: Record<string, string>;
}) {
  const { colours, isVertical } = useTheme();
  const isAtRisk = index >= 4;

  const nameBg = isAtRisk ? "#4a1a20" : colours.surface;

  const flagUrl = flagCache[wrestler.nat];

  const cols = [
    {
      content: isAtRisk ? "⚠️" : "Q" + String(index + 1),
      bg: nameBg,
      color: isAtRisk ? "#ff6b7a" : colours.textPrimary,
    },
    {
      content: wrestler.name,
      bg: nameBg,
      color: isAtRisk ? "#ff6b7a" : colours.textPrimary,
    },
    {
      content: (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <FlagImage src={flagUrl} />
          <View style={{ minWidth: 48 }}>
            <Typography
              variant={isVertical ? "h6" : "h4"}
              style={{
                color: colours.textPrimary,
              }}
            >
              {formatNationality(FLAGS[wrestler.nat])}
            </Typography>
          </View>
        </View>
      ),
      bg: nameBg,
    },
    { content: String(wrestler.w), bg: "#133020", color: "#5ddd88" },
    { content: String(wrestler.d), bg: "#1c1c40", color: "#8899ff" },
    { content: String(wrestler.l), bg: "#3a1520", color: "#ff6b7a" },
    { content: String(wrestler.pts), bg: "#352000", color: "#ffbb44" },
  ];

  return (
    <Grid container spacing={1} sx={{ mb: 1 }}>
      {cols.map((col, i) => (
        <Grid item size={COL_SPANS[i]} key={i}>
          <HoverableCard
            style={{
              backgroundColor: col.bg,
              minHeight: isVertical ? 48 : 72,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {typeof col.content === "string" ? (
              <Typography
                variant={isVertical ? "h6" : "h4"}
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: col.color || colours.textPrimary,
                }}
              >
                {col.content}
              </Typography>
            ) : (
              col.content
            )}
          </HoverableCard>
        </Grid>
      ))}
    </Grid>
  );
}

export default function TableSection({ wrestlers, title }) {
  const { colours, isVertical } = useTheme();
  const flagCache = useMemo(() => {
    const cache: Record<string, string> = {};

    for (const w of wrestlers) {
      const nation = w.nat ?? "N/A";
      cache[nation] = getFlagUrl(nation);
    }

    return cache;
  }, [wrestlers]);

  return (
    <View style={{ width: "80%", paddingHorizontal: 16 }}>
      {/* Title */}
      <View
        style={[
          styles.sectionHeader,
          { borderBottomColor: colours.textPrimary },
        ]}
      >
        <Text style={[styles.headline, { color: colours.textPrimary }]}>
          {title}
        </Text>
      </View>

      {/* Header */}
      <Grid container spacing={1} sx={{ mb: 1 }}>
        {COL_HEADERS.map((h, i) =>
          i === 0 ? (
            <Grid item size={COL_SPANS[i]} key={i} />
          ) : (
            <Grid item size={COL_SPANS[i]} key={i}>
              <HoverableCard>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: colours.textPrimary,
                    minHeight: isVertical ? 32 : 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {h}
                </Typography>
              </HoverableCard>
            </Grid>
          ),
        )}
      </Grid>

      {/* Rows */}
      {wrestlers.map((w, i) => (
        <View key={i}>
          {i === 4 && <DashLine />}
          <WrestlerRow wrestler={w} index={i} flagCache={flagCache} />
        </View>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: "#111113",
  },
});
