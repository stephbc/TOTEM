import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles';

export class FriendsContact extends React.Component {
  constructor(props){
    super(props)
    state = {
      active: true
    }
  }

  render() {
    console.log(this.props)
    return (
      <TouchableOpacity
        style={ this.state.active? styles.contactButton : styles.contactButtonPressed}
        onPress={() => {
          this.setState({active: !this.state.active})
        }}>
        <Text style={styles.buttonText}>{contact.name}</Text>
      </TouchableOpacity>
    )
  }
}
