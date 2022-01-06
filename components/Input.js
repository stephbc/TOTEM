import React from 'react';
import { TextInput, View, Text, Pressable, Keyboard } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useFocusEffect } from '@react-navigation/native';
import styles from '../styles';

const changeToPortrait = async () => {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}

const changeToLandscape = async () => {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
}

export const Input = ({ navigation }) => {
  const [value, onChangeText] = React.useState('');

  useFocusEffect(
    React.useCallback(() => {
      changeToPortrait();
      return () => {
        ScreenOrientation.removeOrientationChangeListeners();
      };
    }, [])
  );

  return (
    <View style={styles.view}>
        <TextInput
          style={styles.textInput}
          placeholder="TAP HERE TO START TYPING"
          placeholderTextColor="#555555"
          onChangeText={text => onChangeText(text)}
          value={value}
          autoCapitalize="characters"
          multiline={true}
          maxLength={40}
        />

      <Pressable
        style={({pressed}) => pressed ? styles.pressedButton : styles.button}
        onPress={() => {
          Keyboard.dismiss();
          if (value) {
            navigation.navigate('FinalSign', { value: value });
            changeToLandscape();
          }
        }}>
        <Text style={styles.buttonText}>MAKE TOTEM</Text>
      </Pressable>
    </View>
  );
}
