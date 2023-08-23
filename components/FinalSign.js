import React, { useState } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import createStyles from '../styles';

export const FinalSign = (props) => {
  useKeepAwake();
  const signText = props.route.params.value;

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
          // numberOfLines={1}
          adjustsFontSizeToFit
          style={{
            transform: [{ rotate: '90deg'}],
            fontSize: currentFont,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center' }}
          onTextLayout={(event) => {
            // const currentLines = event.nativeEvent.lines.length;
            if (currentFont > 75) {
              const { width, height } = Dimensions.get('window')
              const fontSize = Math.sqrt(height * width / signText.length) - 5
              setFontSize(fontSize);
            }}}
          textBreakStrategy={'simple'}
          onPress={() => flashSign()}>
          {signText}
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = createStyles();
