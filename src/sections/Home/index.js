import { Text, View, SafeAreaView, FlatList } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Layout from "../../components/layout";
import TodoCard from "../../components/TodoCard";
import Container from "../../components/Container";
import { getTodos } from "../../redux/actions/getTodos";
import { dataSelector } from "../../redux/selectors/getTodos";
import { styles } from "./styles";

export default function Home({ navigation }) {
  const { home, dataOff, info } = styles;
  const dispatch = useDispatch();
  const todos = useSelector(dataSelector);
  useEffect(() => {
    dispatch(getTodos(''));
  }, []);

  return (
    <Layout navigation={navigation}>
      <Container>
        <View style={home}>
          {todos.length === 0 ?
            <View style={dataOff}>
              <MaterialCommunityIcons name="database-off" size={64} />
              <Text style={info}>Поки що даних не має</Text>
            </View> :
              <SafeAreaView>
                <FlatList
                  data={todos}
                  renderItem={({ item: { id, title, img } }) =>
                    <TodoCard id={id} title={title} img={img} navigationTest={navigation} />}
                  keyExtractor={(todo) => todo.id}
                />
              </SafeAreaView>
          }
        </View>
      </Container>
    </Layout>
  );
}
