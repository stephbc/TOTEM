import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export const FriendsScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.Text}>FIND YOUR FRIENDS</Text>
      <TouchableOpacity style={styles.button}
        >
        <Text style={styles.buttonText}>SOS</Text>
      </TouchableOpacity>
    </View>
  );
}
