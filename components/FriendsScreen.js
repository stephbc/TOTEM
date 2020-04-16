import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
// import { FBLoginButton } from './FBLoginButton'

export const FriendsScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FriendsList')}>
        <Text style={styles.buttonText}>SEND SOS TEXT</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TOTEM')}>
        <Text style={styles.buttonText}>CONNECT FACEBOOK</Text>
      </TouchableOpacity> */}

      {/* <FBLoginButton /> */}
    </View>
  );
}

// AppRegistry.registerComponent('Totem', () => Totem);
