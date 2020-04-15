import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import CameraRoll from "@react-native-community/cameraroll";
import styles from '../styles.js';
import { PhotoSign } from './PhotoSign.js';

export const SelectPhoto = ({ navigation }) => {
  let [selectedImage, setSelectedImage] = React.useState(null);

  const openImagePickerAsync = async () => {
    const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  }

  const openCameraAsync = async () => {
    const { status } = await Permissions.getAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    if (status !== 'granted') {
      alert("Permission to access camera is required!");
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      allowEditing: false,
      exif: true
    });
    if(result.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: result.uri });
    // CameraRoll.saveToCameraRoll(result.uri);
  }

  if (selectedImage !== null) {
    return (
      <PhotoSign pic={selectedImage}></PhotoSign>
    );
  }

  return (
    <View style={styles.view}>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>CHOOSE FROM GALLERY</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={openCameraAsync} style={styles.button}>
        <Text style={styles.buttonText}>TAKE A TEMPORARY PHOTO</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => navigation.navigate('CAMERA')} style={styles.button}>
        <Text style={styles.buttonText}>TAKE A TEMPORARY PHOTO</Text>
      </TouchableOpacity> */}

    </View>
  );
}
