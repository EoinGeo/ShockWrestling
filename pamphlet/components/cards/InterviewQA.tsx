import { View, Text, StyleSheet } from "react-native-web";
import HoverableCard from "../cards/hoverableCard";

type InterviewQAProps = {
  question: string;
  answer: string;
};

export default function InterviewQA({ question, answer }: InterviewQAProps) {
  return (
    <View style={styles.stack}>
      <HoverableCard style={styles.card}>
        <Text style={styles.question}>Q: {question}</Text>
      </HoverableCard>

      <HoverableCard style={styles.card}>
        <Text style={styles.answer}>{answer}</Text>
      </HoverableCard>
    </View>
  );
}

const styles = StyleSheet.create({
  stack: {
    gap: 16,
  },

  card: {
    padding: 16,
  },

  question: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 14,
  },

  answer: {
    fontSize: 17,
    lineHeight: 28,
    textAlign: "justify",
    whiteSpace: "pre-line", // IMPORTANT for multi-line answers
  },
});
