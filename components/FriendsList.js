import React from 'react';
import { View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';
import styles from '../styles';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

export class FriendsList extends React.Component {
  state = {
    nameNum: [],
    SOScontacts: []
  }

  async componentDidMount(){
    this.getNameNums()
  }

  getNameNums = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [
          Contacts.Fields.Name,
          Contacts.Fields.PhoneNumbers
        ],
      })
      this.setState({
        nameNum: data.map(contact => {
          let contObj = {}
          contObj.name = contact.name
          contObj.number = contact.phoneNumbers[0].number
          return contObj
        })
      })
    }
  }

  render(){
    console.log(this.state.SOScontacts)
    if(this.state.nameNum.length) {
      return (
        <View style={styles.view}>
          <Text style={styles.Text}>Send SOS to:</Text>
          <ScrollView>
            {this.state.nameNum.map(contact => {
              return (
                <TouchableHighlight
                  key={contact.number}
                  style={styles.contactButton}
                  onPress={() => {
                    if(!this.state.SOScontacts.includes(contact)){
                      this.setState({ SOScontacts: [...this.state.SOScontacts, contact]})
                    }
                  }}>
                  <Text style={styles.buttonText}>{contact.name} {contact.number}</Text>
                </TouchableHighlight>
              )
            })}
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.view}>
          <Text style={styles.Text}>
            You have no friends :(
          </Text>
        </View>
      )
    }
  }
}
