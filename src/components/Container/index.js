import { View } from "react-native";
import { styles } from "./styles";

export default function Container({ children, style }) {
  const { container } = styles;

  return (
    <View style={{ ...container, ...style }}>
      {children}
    </View>
  );
}
