import { Text, View } from 'react-native';
import Layout from "../../components/layout";
import { styles } from "./styles";

export default function Home() {
  const { home } = styles;

  return (
    <Layout>
      <View style={home}>
        <Text>Home</Text>
      </View>
    </Layout>
  );
}
