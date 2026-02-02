import { View, Image } from "react-native-web";
import { useTheme } from "../../../contexts/ThemeContext";
import { newsletterStyles as styles } from "./newsletterStyles";

type Props = {
  children: React.ReactNode;
};

export default function Newsletter({ children }: Props) {
  const { colours } = useTheme();

  return (
    <View style={[styles.canvas, { backgroundColor: colours.background }]}>
      {/* ───── MASTHEAD ───── */}
      <View
        style={[styles.masthead, { borderBottomColor: colours.textPrimary }]}
      >
        <Image
          source={require("../../../assets/SW_illustraded_logo_with_wordmark.png")}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>

      {/* ───── CONTENT STACK ───── */}
      <View style={styles.stack}>{children}</View>
    </View>
  );
}
