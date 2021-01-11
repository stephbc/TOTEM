import React from 'react';
import { View, Image, Pressable, Text } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import ImageZoom from 'react-image-zoom-rotate';
import styles from '../styles';

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
        {/* <ImageZoom
          rotate={(clockwise, antiClockwise) => {
            return (
              <View style={styles.view}>
                <Pressable onClick={clockwise} style={{ position: 'absolute', right: 0, zIndex: 1 }}>
                  <Text>clockwise</Text>
                </Pressable>
                <Pressable onClick={antiClockwise} style={{ position: 'absolute', left: 0, zIndex: 1 }}>
                  <Text>anti-clockwise</Text>
                </Pressable>
              </View>
            );
          }}
          src={{ uri: props.route.params.pic.localUri }}
          style={styles.photo}
          width={400}
          zoomWidth={500}
        /> */}
          <Image
            source={{ uri: props.route.params.pic.localUri }}
            style={styles.photo}
          />
        </ReactNativeZoomableView>
    </View>
  )
}
