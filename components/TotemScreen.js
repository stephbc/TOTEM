import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export const TotemScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>

      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('SIGN')}>
        <Text style={styles.buttonText}>TEXT SIGN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PHOTO')}>
        <Text style={styles.buttonText}>PICTURE SIGN</Text>
      </TouchableOpacity>

    </View>
  );
};
