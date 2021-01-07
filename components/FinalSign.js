import React, { useState, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import styles from '../styles'

export const FinalSign = (props) => {
  useKeepAwake();

  const [size, setSize] = useState(225);
  const [viewHeight, setViewHeight] = useState(0);
  const [textHeight, setTextHeight] = useState(0);

  useEffect(() => {
    if (textHeight > viewHeight) {
      setSize(size - 0.5); // <<< May adjust 1 to a smaller value so the text can be shrink more precisely?
    }
  }, [textHeight]);

  let tapped = false;
  const [fadeAnim] = useState(new Animated.Value(1));

  const flashSign = () => {
    tapped = !tapped
    if(tapped){
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
          }),
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
          })
        ])
      ).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      }).start();
    }
  }

  return (
    <View style={styles.view}
      onLayout={(event) => {
        var { height } = event.nativeEvent.layout;
        setViewHeight(height);
      }}
    >
      <Animated.View
        style={{
          ...styles.view,
          opacity: fadeAnim,
        }}
      >
        <Text
          style={{
            fontSize: size,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
          onLayout={(event) => {
            var { height } = event.nativeEvent.layout;
            setTextHeight(height);
          }}
          onPress={() => flashSign()}
        >

          {props.route.params.value}

        </Text>
      </Animated.View>
    </View>
  );
}
