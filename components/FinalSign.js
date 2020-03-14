import React from 'react';
import { View, Text, useFocusEffect } from 'react-native';
import styles from '../styles'
import { ScreenOrientation } from 'expo';

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}

export const FinalSign = (props) => {

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

  return (
    <View style={styles.signview}>
      <Text
        // adjustsFontSizeToFit={true}
        // numberOfLines={1}
        style={styles.signtext}
        onPress={() => {
          changeScreenOrientation()
          props.navigation.goBack()
        }}>
          {props.route.params.value}
      </Text>
    </View>
  )
}
