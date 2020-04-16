import React from 'react';
import { View, Image } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import styles from '../styles'

export const PhotoSign = (props) => {
  useKeepAwake();

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
          <Image
            source={{ uri: props.route.params.pic.localUri }}
            style={styles.photo}
          />
        </ReactNativeZoomableView>
    </View>
  )
}
