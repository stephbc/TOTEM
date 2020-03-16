import React, { useState, useEffect } from 'react';
import { View, Text, useFocusEffect } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import styles from '../styles'
import { ScreenOrientation } from 'expo';

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}

export const FinalSign = (props) => {
  useKeepAwake();

  // useFocusEffect(
  //   React.useCallback(() => {
  //     const onBackPress = async () => {
  //       const currentScreenOrientation = await ScreenOrientation.getOrientationAsync()
  //       console.log(currentScreenOrientation)
  //       if (currentScreenOrientation.orientation === LANDSCAPE_LEFT) {
  //         await ScreenOrientation.unlockAsync();
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     };
  //     BackHandler.addEventListener('hardwareBackPress', onBackPress);
  //     return () =>
  //       BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  //   }, [ScreenOrientation.unlockAsync(), props.navigation.goBack()])
  // );

  const [size, setSize] = useState(150)
  const [viewHeight, setViewHeight] = useState(0)
  const [textHeight, setTextHeight] = useState(0)

  useEffect(() => {
    if (textHeight > viewHeight) {
      setSize(size - 1) // <<< You may adjust value 1 to a smaller value so the text can be shrink more precisely
    }
  }, [textHeight])

  return (
    <View style={styles.view}
      onLayout={(event) => {
        var { x, y, width, height } = event.nativeEvent.layout;
        setViewHeight(height)
      }}>
      <Text
        style={{
          fontSize: size,
          color: 'white',
          fontWeight: 'bold',
          alignSelf: 'center',
        }}
        onLayout={(event) => {
          var { x, y, width, height } = event.nativeEvent.layout;
          setTextHeight(height)
        }}
        onPress={() => {
          changeScreenOrientation()
          props.navigation.goBack()
          }}
      >
        {props.route.params.value}
      </Text>
    </View>
  );
}
