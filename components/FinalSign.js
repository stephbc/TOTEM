import React, { useState, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import styles from '../styles'

export const FinalSign = (props) => {
  useKeepAwake();

  const [size, setSize] = useState(225)
  const [viewHeight, setViewHeight] = useState(0)
  const [textHeight, setTextHeight] = useState(0)
  // const [viewWidth, setViewWidth] = useState(0)
  // const [textWidth, setTextWidth] = useState(0)

  useEffect(() => {
    if (textHeight > viewHeight) {
      setSize(size - 0.5) // <<< You may adjust value 1 to a smaller value so the text can be shrink more precisely
    }
  }, [textHeight])

  // useEffect(() => {
  //   if (textWidth > viewWidth && textHeight > viewHeight) {
  //     setSize(size - 0.5) // <<< You may adjust value 1 to a smaller value so the text can be shrink more precisely
  //   }
  // }, [textWidth, textHeight])

  // const [flashStart] = useState(new Animated.Value(styles.view))

  // const flashSign = async () => {
  //   Animated.loop(
  //     Animated.sequence([
  //       Animated.timing(flashStart, {
  //         toValue: styles.flashView,
  //         duration: 500,
  //         // delay: 1000
  //       }),
  //       Animated.timing(styles.flashView, {
  //         toValue: flashStart,
  //         duration: 500
  //       })
  //     ]),
  //     {
  //       iterations: 4
  //     }
  //   ).start()
  // }

  return (
    <View style={styles.view}
      onLayout={(event) => {
        var { x, y, width, height } = event.nativeEvent.layout;
        setViewHeight(height);
        // setViewWidth(width);
      }}>

        {/* <Animated.View
          style={[
            { transform: [{backgroundColor: 'white'}] }
          ]}
        /> */}

      <Text
        style={{
          fontSize: size,
          color: 'white',
          fontWeight: 'bold',
          // alignSelf: 'center',
        }}
        onLayout={(event) => {
          var { x, y, width, height } = event.nativeEvent.layout;
          setTextHeight(height);
          // setTextWidth(width);
        }}
        onPress={() => {
          // flashSign();
          props.navigation.goBack()
        }}
      >
        {props.route.params.value}
      </Text>
    </View>
  );
}
