import React from 'react';
import { TextInput, View, Text, Pressable, Keyboard } from 'react-native';
import styles from '../styles';

export const Input = ({ navigation }) => {
  const [value, onChangeText] = React.useState('');

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
          }
        }}>
        <Text style={styles.buttonText}>MAKE TOTEM</Text>
      </Pressable>
    </View>
  );
}
