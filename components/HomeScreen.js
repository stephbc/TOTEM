import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.view} >

      <Pressable style={styles.button} onPress={() => navigation.navigate('TOTEM')}>
        <Text style={styles.buttonText}>MAKE A TOTEM</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate('FRIENDS')}>
        <Text style={styles.buttonText}>FIND FRIENDS</Text>
      </Pressable>

    </View>
  );
}
