import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
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
  //   if (textWidth > viewWidth || textHeight > viewHeight) {
  //     setSize(size - 1) // <<< You may adjust value 1 to a smaller value so the text can be shrink more precisely
  //   }
  // }, [textWidth, textHeight])

  return (
    <View style={styles.view}
      onLayout={(event) => {
        var { x, y, width, height } = event.nativeEvent.layout;
        setViewHeight(height);
        // setViewWidth(width);
      }}>
      <Text
        style={{
          fontSize: size,
          color: 'white',
          fontWeight: 'bold',
          // alignContent: 'stretch',
          // alignItems: 'stretch',
          // flexDirection: 'row',
          // alignSelf: 'center',
          // justifyContent: 'space-evenly',
        }}
        onLayout={(event) => {
          var { x, y, width, height } = event.nativeEvent.layout;
          setTextHeight(height);
          // setTextWidth(width);
        }}
        // onPress={() => {
        //   props.navigation.goBack()
        //   }}
      >
        {props.route.params.value}
      </Text>
    </View>
  );
}
