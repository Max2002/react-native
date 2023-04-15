import { View, Text, Button } from "react-native";
import Layout from "../components/layout";
import Container from "../components/Container";
// import { styles } from "./styles";

export default function Create({ navigation }) {
  // const { header } = styles;
  // const onPress = () => {};

  return (
    <Layout navigation={navigation}>
      <Container>
        <Text>Create</Text>
        <Button
          title='back'
          onPress={() => navigation.navigate('Home')} />
      </Container>
    </Layout>
  );
}
