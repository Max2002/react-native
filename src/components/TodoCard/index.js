import { Text, Image, Pressable } from "react-native";
import { styles } from "./styles";

export default function TodoCard({ id, title, img, navigationTest }) {
  const { card, titleCard, image } = styles;
  const todo = { id, title, img };

  return (
    <Pressable
      style={card}
      onPress={() => navigationTest.navigate('Todo', { todo })}
    >
      <Text style={titleCard}>{title}</Text>
      <Image style={image} source={{ uri: img }} />
    </Pressable>
  );
}
