import React from 'react';
import { Animated, Dimensions } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';

import {
  PanGestureHandler,
  ScrollView,
  PinchGestureHandler,
  RotationGestureHandler,
  State,
} from 'react-native-gesture-handler';

import styles from '../styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const circleRadius = 30;

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

  /* Tap or Pan */
  let touchX = new Animated.Value(windowWidth / 2 - circleRadius);
  let touchY = new Animated.Value(windowHeight / 2 - circleRadius);
  let translateX = Animated.add(
    touchX,
    new Animated.Value(-circleRadius)
  );
  let translateY = Animated.add(
    touchY,
    new Animated.Value(-circleRadius)
  );
  let onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          x: touchX,
          y: touchY
        },
      },
    ],
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

  const onTapHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      // Once tap happened we set the position of the circle under the tapped spot
      touchX.setValue(nativeEvent.x);
      touchY.setValue(nativeEvent.y);

    }
  };

  return (
    // <ScrollView waitFor={[panRef]}>
    //   <PanGestureHandler
    //     ref={panRef}
    //     activeOffsetX={[-20, 20]}
    //     onGestureEvent={onPanGestureEvent}
    //     shouldCancelWhenOutside>
    //     <Animated.View style={styles.wrapper}>

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
                        { perspective: 200 },
                        { scale: scale },
                        { rotate: rotateStr },
                        // { translateX: translateX },
                        // { translateY: translateY },
                      ],
                    },
                  ]}
                  source={{ uri: props.route.params.pic.localUri }}
                />
              </Animated.View>
            </PinchGestureHandler>
            </Animated.View>
          </RotationGestureHandler>

    //     </Animated.View>
    //   </PanGestureHandler>
    //  </ScrollView>

  )
}
