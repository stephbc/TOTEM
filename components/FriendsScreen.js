import React from 'react';
import { View } from 'react-native';
import styles from '../styles';
import { FriendsList } from './FriendsList'
// import { FBLoginButton } from './FBLoginButton'

export const FriendsScreen = () => {

  return (
    <View style={styles.view}>
      {/* <FBLoginButton /> */}
      <FriendsList />
    </View>
  );
}

// AppRegistry.registerComponent('Totem', () => Totem);
