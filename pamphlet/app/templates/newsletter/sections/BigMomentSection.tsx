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
          width: "100%",
          height: "100%",
          objectFit: "contain", // zooms to fill container, crops excess
          borderRadius: 16, // optional rounded corners
        }}
      />
    </View>
  );
}
