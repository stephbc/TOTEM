import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles';

export class FriendsButton extends React.Component {
  state = {
    active: true
  }

  render() {
    return (
      <TouchableOpacity
        style={ this.state.active? styles.contactButton : styles.contactButtonPressed}
        onPress={() => {
          this.setState({ active: !this.state.active })
          this.props.onPress()
        }}
        >
        <Text style={styles.buttonText}>{this.props.contact.name}</Text>
      </TouchableOpacity>
    )
  }
}
