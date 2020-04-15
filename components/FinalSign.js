import React, { useState, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import styles from '../styles'

export const FinalSign = (props) => {
  useKeepAwake();

  const [size, setSize] = useState(225)
  const [viewHeight, setViewHeight] = useState(0)
  const [textHeight, setTextHeight] = useState(0)

  useEffect(() => {
    if (textHeight > viewHeight) {
      setSize(size - 0.5) // <<< May adjust 1 to a smaller value so the text can be shrink more precisely?
    }
  }, [textHeight])

  const [flashStart] = useState(new Animated.Value(0))
  // let taps = 0;

  // const flashSign = () => {
    // taps++
    // if(taps%2){
    // console.log(taps)
      // return (
      //   <View style={{backgroundColor: 'white'}}>
      //     <Text style={{ color: 'black' }}>
      //       {props.route.params.value}
      //     </Text>
      //   </View>
      // )
    // }
  //   Animated.timing(flashStart, {
  //     toValue: 1,
  //     duration: 2000,
  //     useNativeDriver: true,
  //   }).start();
  // }

  return (
    <View style={styles.view}
      onLayout={(event) => {
        var { x, y, width, height } = event.nativeEvent.layout;
        setViewHeight(height);
      }}>

      <Text
        style={{
          fontSize: size,
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
        onLayout={(event) => {
          var { x, y, width, height } = event.nativeEvent.layout;
          setTextHeight(height);
        }}
        // onPress={() => flashSign()}
      >
        {props.route.params.value}
      </Text>
    </View>
  );
}
