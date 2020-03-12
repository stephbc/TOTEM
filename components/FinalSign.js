import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles'
import { ScreenOrientation } from 'expo';

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
}

export const FinalSign = (props) => {
  return (
  <View>
    <Text>{props.signText}</Text>
  </View>
  )
}
