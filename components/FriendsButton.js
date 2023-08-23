import React, { useState } from 'react';
import { Text, Pressable } from 'react-native'
import createStyles, { colors, padding, dimensions } from '../styles';

export const FriendsButton = (props) => {
  const [active, setActive] = useState(true);

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
};

const styles = createStyles({
  contactButton: {
    backgroundColor: colors.secondary,
    padding: padding.sm,
    borderRadius: 15,
    margin: 5,
    alignItems: 'center',
    width: dimensions.fullWidth * 0.5,
  },
  contactButtonPressed: {
    backgroundColor: colors.primary,
    padding: padding.sm,
    borderRadius: 15,
    margin: 5,
    alignItems: 'center',
    width: dimensions.fullWidth * 0.5,
  },
});
