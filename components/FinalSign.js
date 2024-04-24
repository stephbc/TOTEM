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

  return (
    <View style={styles.view}>
      <Animated.View
        style={{
          ...styles.view,
          width: dimensions.fullHeight,
          height: dimensions.fullWidth,
          opacity: fadeAnim,
          transform: [{ rotate: '90deg'}] }}>
        <Text
          numberOfLines={signText.length >= 10 ? 2 : 1}
          textBreakStrategy={'balanced'}
          adjustsFontSizeToFit={true}
          style={styles.sign}
          onPress={() => flashSign()}>
          {signText}
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = createStyles({
    sign: {
      fontSize: 500,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
  },
});
