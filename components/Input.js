import React from 'react';
import { TextInput, View } from 'react-native';
import styles from '../styles'

import { ScreenOrientation } from 'expo';

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
}

export const Input = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.TextInput}
        onChangeText={text => onChangeText(text)}
        value={value}
        autoCapitalize="characters"
        multiline={true}
        // defaultValue="stuff"
        // onContentSizeChange
      />
    </View>
  );
}
