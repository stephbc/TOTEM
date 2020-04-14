import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles.js'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

export class TakePhoto extends React.Component {
  state = {
    hasPermission: null,
    cameraType: Camera.Constants.Type.back,
    photo: null
  }

  async componentDidMount() {
    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasPermission: status === 'granted'
    })
  }

  handleCameraType = () => {
    const { cameraType } = this.state
    this.setState({
      cameraType:
        cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    })
  }

  takePicture = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      this.setState({
        photo
      })
    }
  }

  render(){
    if (this.state.photo !== null) {
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
            <Image source={{ uri: this.state.photo.uri }} style={styles.photo} />
          </ReactNativeZoomableView>
        </View>
      );
    }
    const { hasPermission } = this.state
    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        // <View style={{ flex: 1 }}>
          <Camera
            ratio={'16:9'}
            style={{ flex: 1 }}
            type={this.state.cameraType}
            ref={ref => {this.camera = ref}} >
            <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", margin:30}}>
              <TouchableOpacity
                style={styles.cameraButtons}
                onPress={() => this.props.navigation.goBack()}>
                <FontAwesome name="arrow-left" style={styles.cameraIcons} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cameraButtons}
                onPress={()=> {
                  this.takePicture()
                  // this.props.navigation.navigate('PHOTO', { selectedImage: this.state.photo })
                }}>
                <FontAwesome name="camera" style={styles.cameraIcons} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cameraButtons}
                onPress={()=>this.handleCameraType()}>
                <MaterialCommunityIcons name="camera-switch" style={styles.cameraIcons} />
              </TouchableOpacity>
            </View>
          </Camera>
        // </View>
      );
    }
  }
}
