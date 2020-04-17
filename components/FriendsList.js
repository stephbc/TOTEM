import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as Contacts from 'expo-contacts';
import * as SMS from 'expo-sms';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import styles from '../styles';
import { FriendsButton } from './FriendsButton';

export class FriendsList extends React.Component {
  state = {
    nameNum: [],
    SOScontacts: [],
    location: null,
  }

  async componentDidMount(){
    this.getNameNums();
    this.getLocationAsync();
  }

  getNameNums = async () => {
    const { status } = await Contacts.requestPermissionsAsync();

    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [
          Contacts.Fields.Name,
          Contacts.Fields.PhoneNumbers
        ],
      });

      const hasPhoneNum = data.filter(contact => contact.phoneNumbers);

      this.setState({
        nameNum: hasPhoneNum.map(contact => {
          let contObj = {};
          contObj.name = contact.name;
          contObj.number = contact.phoneNumbers[0].number;
          return contObj;
        }),
      });
    }
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
    } else {
        alert("Permission to access location is required!");
        return;
      }
  };

  sendSOS = async () => {
    if (this.state.location) {
      await SMS.sendSMSAsync(
        this.state.SOScontacts,
        `SOS! PLEASE COME FIND ME! GPS location:
        https://www.google.com/maps/search/?api=1&query=${this.state.location.coords.latitude},${this.state.location.coords.longitude}`
      )
    }
  }

  render(){
    // console.log(this.state.SOScontacts)
    // console.log(this.state.location)
    if(this.state.nameNum.length) {
      return (
        <View style={styles.view}>
          <Text style={styles.Text}>SEND YOUR GPS LOCATION TO:</Text>
          <ScrollView>
            {this.state.nameNum.map(contact => {
              return (
                <FriendsButton
                  key={contact.number}
                  contact={contact}
                  onPress={() => {
                    if(this.state.SOScontacts.includes(contact.number)){
                      this.setState({ SOScontacts: this.state.SOScontacts.filter(number => contact.number !== number)})
                    } else {
                      this.setState({ SOScontacts: [...this.state.SOScontacts, contact.number]})
                    }
                  }}
                />
              )
            })}
          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={() => this.sendSOS()}>
            <Text style={styles.buttonText}>SEND SOS!</Text>
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
