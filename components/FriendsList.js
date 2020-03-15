import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as Contacts from 'expo-contacts';
import * as SMS from 'expo-sms';
import styles from '../styles';

export class FriendsList extends React.Component {
  state = {
    nameNum: [],
    SOScontacts: [],
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

  sendSOS = async () => {
    await SMS.sendSMSAsync(
      this.state.SOScontacts,
      'SOS! COME FIND ME PLEASE!'
    )
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
                <TouchableOpacity
                  key={contact.number}
                  style={styles.contactButton}
                  onPress={() => {
                    if(this.state.SOScontacts.includes(contact.number)){
                      this.setState({ SOScontacts: this.state.SOScontacts.filter(number => contact.number !== number)})
                    } else {
                      this.setState({ SOScontacts: [...this.state.SOScontacts, contact.number]})
                    }
                  }}
                >
                  <Text style={styles.buttonText}>{contact.name}</Text>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={() => this.sendSOS()}>
            <Text style={styles.buttonText}>Send SOS!</Text>
          </TouchableOpacity>
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
