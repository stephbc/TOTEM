import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.view} >

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TOTEM')}>
        <Text style={styles.buttonText}>MAKE A TOTEM</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FRIENDS')}>
        <Text style={styles.buttonText}>FIND FRIENDS</Text>
      </TouchableOpacity>

    </View>
  );
}
