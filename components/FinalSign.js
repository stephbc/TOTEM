import React, { useState } from 'react';
import { View, Text, Animated } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import styles from '../styles'

export const FinalSign = (props) => {
  useKeepAwake();

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

  const [fontSize, setFontSize] = useState(225);
  const numberOfLines = 3

  return (
    <View style={styles.view}>
      <Animated.View
        style={{
          ...styles.view,
          opacity: fadeAnim }}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={numberOfLines}
          textBreakStrategy={'simple'}
          style={{
            fontSize: fontSize,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center' }}
          onTextLayout={(event) => {
            const { lines } = event.nativeEvent;
            if (lines.length > numberOfLines && fontSize > 100) {
              setFontSize(fontSize - 1);
            }}}
          onPress={() => flashSign()} >
          {props.route.params.value}
        </Text>
      </Animated.View>
    </View>
  );
}
