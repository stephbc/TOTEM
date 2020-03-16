import React from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles'
import { ScreenOrientation } from 'expo';

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
}

export const Input = ({ navigation }) => {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.textInput}
        onChangeText={text => onChangeText(text)}
        value={value}
        autoCapitalize="characters"
        multiline={true}
      />
      <TouchableOpacity style={styles.button}
        onPress={() => {
          changeScreenOrientation()
          navigation.navigate('FinalSign', { value: value })
        }}>
        <Text style={styles.buttonText}>MAKE THIS SIGN!</Text>
      </TouchableOpacity>
    </View>
  );
}
