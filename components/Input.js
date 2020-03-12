import React from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles'

export const Input = ({ navigation }) => {
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
      {/* <TouchableOpacity style={styles.button}
        onPress={navigation.navigate('FinalSign')} signText={value}
      >
        <Text style={styles.buttonText}>MAKE SIGN</Text>
      </TouchableOpacity> */}
    </View>
  );
}
