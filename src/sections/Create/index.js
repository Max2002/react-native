import {
  Text,
  Keyboard,
  TextInput,
  Pressable,
  Image,
  View
} from "react-native";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MaterialIcons } from '@expo/vector-icons';
import { addTodo } from "../../redux/actions/getTodos";
import Layout from "../../components/layout";
import Container from "../../components/Container";
import PhotoPicker from "../../components/PhotoPicker";
import { styles } from "./styles";

export default function Create({ navigation }) {
  const { main, create, btnText, input, photo, emptyNode, info } = styles;
  const [value, setValue] = useState('');
  const [image, setImage] = useState('');
  const [valid, setValid] = useState(false);
  const dispatch = useDispatch();

  const onPress = () => {
    if (value && image) {
      dispatch(addTodo(value, image));
      setValue('');
      Keyboard.dismiss();
      navigation.navigate('Home');
      setValid(false);
    }
    setValid(true);
  }

  useEffect(() => {
    if (value && image) {
      setValid(false);
    }
  }, [value, image]);

  return (
    <Layout navigation={navigation} back='Home'>
      <Container style={{ justifyContent: 'space-between' }}>
        <View style={main}>
          <TextInput
            style={input}
            onChangeText={setValue}
            value={value}
            placeholder='Введіть назву'
          />
          {image ? <Image style={photo} source={{ uri: image }} /> :
            <View style={emptyNode}>
              <MaterialIcons name="no-photography" size={64} color="black" />
              <Text style={info}>Тут буде ваше фото!</Text>
            </View>
          }
          <PhotoPicker onPicker={setImage} />
          {valid && <Text>Зробіть всі обов'язкові дії!</Text>}
        </View>
        <Pressable
          style={create}
          onPress={onPress}>
          <Text style={btnText}>Створити</Text>
        </Pressable>
      </Container>
    </Layout>
  );
}
