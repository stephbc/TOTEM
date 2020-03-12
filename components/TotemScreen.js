import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export const TotemScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('SIGN')}>
        <Text style={styles.buttonText}>TYPE A SIGN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PHOTO')}>
        <Text style={styles.buttonText}>PICTURE MODE</Text>
      </TouchableOpacity>
    </View>
  );
}
