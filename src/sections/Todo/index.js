import { useDispatch } from "react-redux";
import { Text, Image, View, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { deleteTodo } from "../../redux/actions/getTodos";
import Container from "../../components/Container";
import Layout from "../../components/layout";
import { styles } from "./styles";

export default function Todo({ route, navigation }) {
  const { generalBtn, titleTodo, photo, options } = styles;
  const { id, title, img, onEdit } = route.params.todo;
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTodo(id));
    navigation.goBack();
  }

  const createTwoButtonAlert = () =>
    Alert.alert('Видалення посту', 'Ви дійсно хочете видалити данний пост?', [
      { text: 'Ні', style: 'cancel' },
      { text: 'Так', onPress: onDelete },
    ]);

  return (
   <Layout navigation={navigation} back={'Home'}>
     <Container>
       <Text style={titleTodo}>{title}</Text>
       <Image style={photo} source={{ uri: img }} />
       <View style={options}>
         <AntDesign
           name='edit'
           style={generalBtn}
           onPress={onEdit} />
         <AntDesign
           name='delete'
           style={generalBtn}
           onPress={createTwoButtonAlert} />
       </View>
     </Container>
   </Layout>
  );
}
