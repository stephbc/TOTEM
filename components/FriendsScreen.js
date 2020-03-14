import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { FriendsList } from './FriendsList'
import * as SMS from 'expo-sms';
// import { FBLoginButton } from './FBLoginButton'

export const FriendsScreen = ({ navigation }) => {

  const sendSOS = async () => {
    await SMS.sendSMSAsync(
      ['0123456789', '9876543210'],
      'SOS'
    )
  }

  return (
    <View style={styles.view}>
      {/* <FBLoginButton /> */}


      <FriendsList />
      <TouchableOpacity style={styles.button} onPress={() => sendSOS()}>
        <Text style={styles.buttonText}>Send SOS!</Text>
      </TouchableOpacity>
    </View>
  );
}

// AppRegistry.registerComponent('Totem', () => Totem);
