import React, { useState } from 'react';
import { View, Text, Animated } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import createStyles, { dimensions } from '../styles';

export const FinalSign = (props) => {
  useKeepAwake();
  const signText = props.route.params.value;

  const [fadeAnim] = useState(new Animated.Value(1));
  let tapped = false;

  const flashSign = () => {
    tapped = !tapped;
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

  const [currentFont, setFontSize] = useState(500);

  return (
    <View style={styles.view}>
      <Animated.View
        style={{
          ...styles.view,
          opacity: fadeAnim,
          transform: [{ rotate: '90deg'}] }}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          allowFontScaling
          style={{
            fontSize: currentFont,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center' }}
          // onTextLayout={() => {
          //   if (currentFont > 75) {
          //     const rotatedWidth = dimensions.fullHeight * 0.9;
          //     const rotatedHeight = dimensions.fullWidth * 0.9;
          //     const fontSize = Math.sqrt(rotatedHeight * rotatedWidth / signText.length) - 1
          //     console.log(fontSize)
          //     setFontSize(fontSize);
          //   }}}
          onPress={() => flashSign()}>
          {signText}
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = createStyles();
