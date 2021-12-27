import React, { useState, useEffect } from 'react';
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
  };

  const [currentFont, setFontSize] = useState(225);
  let numberOfLines = 3;

  useEffect(() => {
    if (numberOfLines > 3 && currentFont > 75) {
      setFontSize(currentFont - 1);
    }
  }, [currentFont]);

  return (
    <View style={styles.view}>
      <Animated.View
        style={{
          ...styles.view,
          opacity: fadeAnim }}>
        <Text
          numberOfLines={3}
          adjustsFontSizeToFit
          textBreakStrategy={'simple'}
          style={{
            fontSize: currentFont,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center' }}
          onTextLayout={(event) => {
            numberOfLines = event.nativeEvent.lines.length;
            if (numberOfLines > 3 && currentFont > 75) {
              setFontSize(currentFont - 1);
            }
          }}
          onPress={() => flashSign()}>
          {props.route.params.value}
        </Text>
      </Animated.View>
    </View>
  );
}
