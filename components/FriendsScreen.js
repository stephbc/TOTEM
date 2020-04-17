import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { FriendsList } from './FriendsList';

export const FriendsScreen = ({ navigation }) => {
  return (
    <FriendsList />

    // <View style={styles.view}>
    //   <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FriendsList')}>
    //     <Text style={styles.buttonText}>SEND SOS TEXT</Text>
    //   </TouchableOpacity>
    // </View>
  );
}
