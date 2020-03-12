import React from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles.js'

export const SelectPhoto = ({ navigation }) => {
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  }

  if (selectedImage !== null) {
    return (
      <View style={styles.view}>
          <Image source={{ uri: selectedImage.localUri }} style={styles.photo} />
        <TouchableOpacity onPress={() => setSelectedImage(null)} style={styles.button}>
          <Text style={styles.buttonText}>Remove photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>CHOOSE FROM GALLERY</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CAMERA')} style={styles.button}>
        <Text style={styles.buttonText}>TAKE A NEW PIC</Text>
      </TouchableOpacity>
    </View>
  );
}
