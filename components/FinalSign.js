import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles'
import { ScreenOrientation } from 'expo';

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}

export const FinalSign = (props) => {
  console.log(props)
  return (
    <View style={styles.view}>
      <Text style={styles.signtext}
        onPress={() => {
          changeScreenOrientation()
          props.navigation.goBack()
        }}>
          {props.route.params.value}
      </Text>
    </View>
  )
}
