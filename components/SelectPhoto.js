import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles.js'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

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
        <ReactNativeZoomableView
            maxZoom={3}
            minZoom={0.5}
            zoomStep={0.5}
            initialZoom={1}
            bindToBorders={true}
            style={styles.view}
          >
            <Image source={{ uri: selectedImage.localUri }} style={styles.photo} />
          </ReactNativeZoomableView>
      </View>
    );
  }

  return (
    <View style={styles.view}>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>CHOOSE FROM GALLERY</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CAMERA')} style={styles.button}>
        <Text style={styles.buttonText}>TAKE A TEMPORARY PHOTO</Text>
      </TouchableOpacity>

    </View>
  );
}
