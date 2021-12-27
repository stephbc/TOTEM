import React, { useState } from 'react';
import { View, Text, Animated } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import styles from '../styles'

export const FinalSign = (props) => {
  useKeepAwake();

  const [fadeAnim] = useState(new Animated.Value(1));
  let tapped = false;

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
  };

  const [currentFont, setFontSize] = useState(225);

  return (
    <View style={styles.view}>
      <Animated.View
        style={{
          ...styles.view,
          opacity: fadeAnim }}>
        <Text
          numberOfLines={3}
          // adjustsFontSizeToFit
          style={{
            fontSize: currentFont,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center' }}
          onTextLayout={(event) => {
            const currentLines = event.nativeEvent.lines.length;
            if (currentLines > 3 && currentFont > 75) {
              setFontSize(currentFont - 1);
            }}}
          textBreakStrategy={'simple'}
          onPress={() => flashSign()}>
          {props.route.params.value}
        </Text>
      </Animated.View>
    </View>
  );
}
