import { View, Image } from "react-native-web";
import { newsletterStyles as styles } from "../newsletterStyles";

type Props = {
  image: string;
};

export default function BigMomentSection({ image }: Props) {
  return (
    <View style={styles.heroWrap}>
      <Image
        source={
          typeof image === "string"
            ? { uri: image } // remote/local string path
            : image // already require(...) or static source
        }
        resizeMode="center"
        style={{
          height: "100%",
          width: "100%",
          borderRadius: 32,
        }}
      />
    </View>
  );
}
