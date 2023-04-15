import { View, Button, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';
import { styles } from './styles';

// const askPermissions = async () => {
//   const { status } = await Permissions.askAsync(
//     Permissions.CAMERA,
//     Permissions.CAMERA_ROLL,
//   );
//
//   if (status !== 'granted') {
//     Alert.alert('Error', 'You do not allow permissions on use camera!');
//     return false;
//   }
//
//   return true;
// };

export default function PhotoPicker({ onPicker }) {
  const { takePhotoBtn } = styles;
  const takePhoto = async () => {
    // const hasPermissions = await askPermissions();
    //
    // if (!hasPermissions) {
    //   return;
    // }

    const { assets: [{ uri }] } = await ImagePicker.launchCameraAsync({
      quality: 1,
      allowsEditing: false,
      aspect: [16, 9],
    });
    onPicker(uri);
  }

  return (
    <View style={takePhotoBtn} >
      <MaterialIcons
        name="monochrome-photos"
        size={32}
        color="black"
        onPress={takePhoto}
      />
    </View>
  );
}
