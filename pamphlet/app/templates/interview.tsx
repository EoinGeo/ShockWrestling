import { View, Text, StyleSheet, Image } from "react-native-web";
import { useTheme } from "../../contexts/ThemeContext";
import InterviewQA from "../../components/cards/InterviewQA";
import { tjBakerInterview } from "./interviewData";
import { strikeBigMoment } from "../data";

export default function Interviews() {
  const { colours } = useTheme();
  const { title, subject, date, qa } = tjBakerInterview;

  return (
    <View style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.masthead}>
          <Image
            source={require("./images/SW_illustraded_logo_with_wordmark.png")}
            style={{
              height: "10vh",
              aspectRatio: 2.63,
              alignSelf: "center",
            }}
            resizeMode="contain"
          ></Image>
        </View>
        <Text style={[styles.subtitle, { color: colours.textSecondary }]}>
          {title} — {subject} — {date}
        </Text>
      </View>

      {/* Interview */}
      <View style={{ width: "100%" }}>
        <View style={styles.row}>
          <View style={styles.heroWrap}>
            <img
              src={strikeBigMoment}
              style={{
                borderRadius: 20,
                objectFit: "contain",
                height: "100%",
              }}
            />
          </View>
          <View
            style={[
              styles.stack,
              {
                width: "50%",
              },
            ]}
          >
            {qa.slice(0, 2).map((item, index) => (
              <InterviewQA
                key={`first-${index}`}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </View>
        </View>
        <View style={styles.stack}>
          {qa.slice(2).map((item, index) => (
            <InterviewQA
              key={`rest-${index}`}
              question={item.question}
              answer={item.answer}
            />
          ))}
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
  masthead: {
    marginBottom: 32,
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  header: {
    marginBottom: 32,
    alignItems: "center",
    width: "100%",
  },

  title: {
    fontSize: 48,
    fontWeight: "900",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 20,
    opacity: 0.75,
  },

  stack: {
    gap: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
    marginBottom: 40,
  },

  heroWrap: {
    width: "50%",
  },
});
