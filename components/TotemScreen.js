import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles';

export const TotemScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>

      <Pressable
          style={({pressed}) => pressed ? styles.pressedButton : styles.button}
          onPress={() => navigation.navigate('SIGN')}>
        <Text style={styles.buttonText}>TEXT SIGN</Text>
      </Pressable>

      <Pressable
          style={({pressed}) => pressed ? styles.pressedButton : styles.button}
          onPress={() => navigation.navigate('PHOTO')}>
        <Text style={styles.buttonText}>PICTURE SIGN</Text>
      </Pressable>

    </View>
  );
};
