import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { CameraRoll } from "@react-native-community/cameraroll";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
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

  let openCameraAsync = async () => {
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
    if (!result.cancelled) {
      setSelectedImage({ localUri: result.uri });
    }
    // if(result.uri){
    //   savePic(result.uri)
    // }
  }

  // let savePic = async (uri) => {
    // console.log(selectedImage)
    // let saved = await CameraRoll.saveToCameraRoll(uri);
    // console.log(saved)
    // if(saved){
    //   selectedImage({localUri: saved})
    // }
  // }

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

      <TouchableOpacity onPress={openCameraAsync} style={styles.button}>
        <Text style={styles.buttonText}>TAKE A TEMPORARY PHOTO</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => navigation.navigate('CAMERA')} style={styles.button}>
        <Text style={styles.buttonText}>TAKE A TEMPORARY PHOTO</Text>
      </TouchableOpacity> */}

    </View>
  );
}
