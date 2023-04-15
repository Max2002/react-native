import { View, Button, Image, Alert } from "react-native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
// import { styles } from "./styles";

const askPermissions = async () => {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL,
  );

  if (status !== 'granted') {
    Alert.alert('Error', 'You do not allow permissions on use camera!');
    return false;
  }

  return true;
};

export default function ImagePicker() {
  const [image, setImage] = useState('');
  const takePhoto = () => {};
  // const { card, deleteBtn } = styles;
  const onPress = async () => {
    const hasPermissions = await askPermissions();

    if (!hasPermissions) {
      return;
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 1,
      allowsEditing: false,
      aspect: [16, 9],
    });

    console.log(img);
  }

  return (
    <View >
      <Button title='Take photo' onPress={takePhoto} />
      {image && <Image source={{ uri: image }} />}
    </View>
  );
}
