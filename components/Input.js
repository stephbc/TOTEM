import React from 'react';
import { TextInput, View, Text, Pressable, Keyboard } from 'react-native';
import createStyles, { colors, fonts } from '../styles';

export const Input = ({ navigation }) => {
  const [value, onChangeText] = React.useState('');

  const buttonStyling = (pressed) => ([
    styles.button,
    { backgroundColor: pressed ? colors.secondary : colors.primary }
  ]);

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.textInput}
        autoFocus={true}
        onChangeText={text => onChangeText(text)}
        value={value}
        autoCapitalize="characters"
        multiline={true}
        maxLength={40}
      />
      <Pressable
        style={({pressed}) => buttonStyling(pressed)}
        onPress={() => {
          Keyboard.dismiss();
          if (value) {
            navigation.navigate('FinalSign', { value: value });
          }
        }}>
        <Text style={styles.buttonText}>TOTEM TIME!</Text>
      </Pressable>
    </View>
  );
};

const styles = createStyles({
  textInput: {
    color: 'white',
    flex: 1,
    fontSize: fonts.lg,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
