// import React, { useEffect } from 'react';
// import { Text, View, Pressable } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as MediaLibrary from 'expo-media-library';
// import { Camera } from 'expo-camera';
// import styles from '../styles.js';

// export const SelectPhoto = ({ navigation }) => {
//   let [selectedImage, setSelectedImage] = React.useState(null);

//   const openImagePickerAsync = async () => {
//     const { status } = await Camera.requestCameraPermissionsAsync();
//     if (status !== 'granted') {
//       alert("Permission to access camera roll is required!");
//       return;
//     }

//     let pickerResult = await ImagePicker.launchImageLibraryAsync();
//     if (pickerResult.cancelled === true) {
//       return;
//     }
//     setSelectedImage({ localUri: pickerResult.uri });
//   }

//   const openCameraAsync = async () => {
//     const { status } = await Camera.requestCameraPermissionsAsync();
//     if (status !== 'granted') {
//       alert("Permission to access camera is required!");
//       return;
//     }

//     let result = await ImagePicker.launchCameraAsync({
//       allowEditing: false,
//       exif: true
//     });
//     if(result.cancelled === true) {
//       return;
//     }

//     const asset = await MediaLibrary.createAssetAsync(result.uri);
//     MediaLibrary.createAlbumAsync('Totem', asset);

//     setSelectedImage({ localUri: result.uri });
//   }

//   useEffect(() => {
//     if (selectedImage !== null) {
//       navigation.navigate('PhotoSign', { pic: selectedImage });
//     }
//   })

//   return (
//     <View style={styles.view}>

//       <Pressable
//           onPress={openImagePickerAsync}
//           style={({pressed}) => pressed ? styles.pressedButton : styles.button}>
//         <Text style={styles.buttonText}>CHOOSE FROM GALLERY</Text>
//       </Pressable>

//       <Pressable
//           onPress={openCameraAsync}
//           style={({pressed}) => pressed ? styles.pressedButton : styles.button}>
//         <Text style={styles.buttonText}>TAKE A PHOTO</Text>
//       </Pressable>

//     </View>
//   );
// }
