import { View, Image } from "react-native-web";
import { newsletterStyles as styles } from "../newsletterStyles";
import { useTheme } from "../../../../contexts/ThemeContext";

type Props = {
  image: string;
};

export default function BigMomentSection({ image }: Props) {
  const { colours } = useTheme();
  const withOpacity = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  return (
    <View>
      {/* ───── MASTHEAD PILL ───── */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,

          zIndex: 10,
        }}
      >
        <View
          style={{
            width: "33%",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-end",

            borderRadius: 36,

            backgroundColor: withOpacity(colours.textSecondary, 0.5),

            // Blur (web-supported)
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <View
            style={[styles.masthead, { borderBottomColor: colours.border }]}
          >
            <Image
              source={require("../../../../assets/SW_illustraded_logo_with_wordmark.png")}
              resizeMode="contain"
              style={{
                width: "100%",
                height: 128,
              }}
            />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.heroWrap}>
          {/* HERO IMAGE */}
          <Image
            source={typeof image === "string" ? { uri: image } : image}
            resizeMode="cover"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 32,
            }}
          />
        </View>
      </View>
    </View>
  );
}
