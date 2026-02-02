import { View } from "react-native-web";
import { newsletterStyles as styles } from "../newsletterStyles";

type Props = {
  image: string;
};

export default function BigMomentSection({ image }: Props) {
  return (
    <View style={styles.heroWrap}>
      <img
        src={image}
        style={{
          height: "100%",
          borderRadius: 32, // optional rounded corners
        }}
      />
    </View>
  );
}
