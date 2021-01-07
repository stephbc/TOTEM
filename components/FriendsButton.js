import React, { useState } from 'react';
import { Text, Pressable } from 'react-native'
import styles from '../styles';

export const FriendsButton = (props) => {
  const [active, setActive] = useState(true)

  return (
    <Pressable
      style={ active ? styles.contactButton : styles.contactButtonPressed}
      onPress={() => {
        setActive(!active)
        props.onPress()
      }}
    >
      <Text style={styles.buttonText}>{props.contact.name}</Text>
    </Pressable>
  )
}
