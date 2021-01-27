import React from 'react';
import { Animated } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';

import {
  PinchGestureHandler,
  RotationGestureHandler,
  State,
} from 'react-native-gesture-handler';

import styles from '../styles';

export const PhotoSign = (props) => {
  useKeepAwake();

  /* Pinching */
  let pinchRef = React.createRef();
  let baseScale = new Animated.Value(1);
  let pinchScale = new Animated.Value(1);
  let scale = Animated.multiply(baseScale, pinchScale);
  let lastScale = 1;
  let onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: pinchScale } }],
    { useNativeDriver: true }
  );

  const onPinchHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastScale *= event.nativeEvent.scale;
      baseScale.setValue(lastScale);
      pinchScale.setValue(1);
    }
  };

  /* Rotation */
  let rotationRef = React.createRef();
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

  const onRotateHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastRotate += event.nativeEvent.rotation;
      rotate.setOffset(lastRotate);
      rotate.setValue(0);
    }
  };

  return (
    <RotationGestureHandler
      ref={rotationRef}
      simultaneousHandlers={pinchRef}
      onGestureEvent={onRotateGestureEvent}
      onHandlerStateChange={onRotateHandlerStateChange}>
      <Animated.View style={styles.wrapper}>
      <PinchGestureHandler
        ref={pinchRef}
        simultaneousHandlers={rotationRef}
        onGestureEvent={onPinchGestureEvent}
        onHandlerStateChange={onPinchHandlerStateChange}>
        <Animated.View collapsable={false} style={styles.wrapper}>
          <Animated.Image
            style={[
              styles.pinchableImage,
              {
                transform: [
                  // { perspective: 200 },
                  { scale: scale },
                  { rotate: rotateStr },
                ],
              },
            ]}
            source={{ uri: props.route.params.pic.localUri }}
          />
        </Animated.View>
      </PinchGestureHandler>
      </Animated.View>
    </RotationGestureHandler>
  )
}
