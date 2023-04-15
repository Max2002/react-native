import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "./styles";

export default function Header({ navigation, back }) {
  const { header } = styles;
  const onPress = () => navigation.navigate('Create');

  return (
    <View style={header}>
      {back && <AntDesign
                  name="back"
                  size={24}
                  color="black"
                  onPress={() => navigation.navigate(back)} />}
      <MaterialIcons name="add-a-photo" size={24} color="black" onPress={onPress} />
    </View>
  );
}
