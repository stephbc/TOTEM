import React from 'react';
import { View, Image, Animated } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

import {
  PanGestureHandler,
  PinchGestureHandler,
  RotationGestureHandler,
  State,
} from 'react-native-gesture-handler';

import styles from '../styles';

export const PhotoSign = (props) => {
  useKeepAwake();

  let panRef = React.createRef();
  let rotationRef = React.createRef();
  let pinchRef = React.createRef();

  /* Pinching */
  let baseScale = new Animated.Value(1);
  let pinchScale = new Animated.Value(1);
  let scale = Animated.multiply(baseScale, pinchScale);
  let lastScale = 1;
  let onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: pinchScale } }],
    { useNativeDriver: true }
  );

  /* Rotation */
  let rotate = new Animated.Value(0);
  let rotateStr = rotate.interpolate({
    inputRange: [-100, 100],
    outputRange: ['-100rad', '100rad'],
  });
  let lastRotate = 0;
  let onRotateGestureEvent = Animated.event(
    [{ nativeEvent: { rotation: rotate } }],
    { useNativeDriver: true }
  );

  /* Tilt */
  let tilt = new Animated.Value(0);
  let tiltStr = tilt.interpolate({
    inputRange: [-501, -500, 0, 1],
    outputRange: ['1rad', '1rad', '0rad', '0rad'],
  });
  let lastTilt = 0;
  let onTiltGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: tilt } }],
    { useNativeDriver: true }
  );

  const onRotateHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastRotate += event.nativeEvent.rotation;
      rotate.setOffset(lastRotate);
      rotate.setValue(0);
    }
  };
  const onPinchHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastScale *= event.nativeEvent.scale;
      baseScale.setValue(lastScale);
      pinchScale.setValue(1);
    }
  };
  const onTiltGestureStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastTilt += event.nativeEvent.translationY;
      tilt.setOffset(lastTilt);
      tilt.setValue(0);
    }
  };

  return (
    <PanGestureHandler
      ref={panRef}
      onGestureEvent={onTiltGestureEvent}
      onHandlerStateChange={onTiltGestureStateChange}
      minDist={10}
      minPointers={2}
      maxPointers={2}
      avgTouches>
      <Animated.View style={styles.wrapper}>
      <RotationGestureHandler
        ref={rotationRef}
        simultaneousHandlers={pinchRef}
        onGestureEvent={onRotateGestureEvent}
        onHandlerStateChange={onRotateHandlerStateChange}>
        <Animated.View>
        <PinchGestureHandler
          ref={pinchRef}
          simultaneousHandlers={rotationRef}
          onGestureEvent={onPinchGestureEvent}
          onHandlerStateChange={onPinchHandlerStateChange}>
          <Animated.View collapsable={false}>
            <Animated.Image
              style={[
                styles.pinchableImage,
                {
                  transform: [
                    { perspective: 200 },
                    { scale: scale },
                    { rotate: rotateStr },
                    { rotateX: tiltStr },
                  ],
                },
              ]}
              source={{ uri: props.route.params.pic.localUri }}
              // style={styles.photo}
            />
          </Animated.View>
        </PinchGestureHandler>
        </Animated.View>
      </RotationGestureHandler>
      </Animated.View>
    </PanGestureHandler>
  )

  // return (
  //   <View style={styles.view}>
  //     <ReactNativeZoomableView
  //         maxZoom={3}
  //         minZoom={0.5}
  //         zoomStep={0.5}
  //         initialZoom={1}
  //         bindToBorders={true}
  //         style={styles.view}
  //       >
  //         <Image
  //           source={{ uri: props.route.params.pic.localUri }}
  //           style={styles.photo}
  //         />
  //       </ReactNativeZoomableView>
  //   </View>
  // )
}
