import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import * as Contacts from 'expo-contacts';
import * as SMS from 'expo-sms';
import * as Location from 'expo-location';
import styles from '../styles';
import { FriendsButton } from './FriendsButton';

export const FriendsList = () => {
  const [nameNum, setNameNum] = useState([])
  const [SOScontacts, setSOSContacts] = useState([])
  const [location, setLocation] = useState(null)

  const getNameNums = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [
          Contacts.Fields.Name,
          Contacts.Fields.PhoneNumbers
        ],
      });
      const hasPhoneNum = data.filter(contact => contact.phoneNumbers);

      setNameNum(
        hasPhoneNum.map(contact => {
          let contObj = {};
          contObj.name = contact.name;
          contObj.number = contact.phoneNumbers[0].number;
          return contObj;
        })
      );
    } else {
        alert("Permission to access Contacts is required.");
        return;
    }
  }

  const getLocationAsync = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location)
    } else {
        alert("Permission to access Location is required.");
        return;
      }
  };

  useEffect(() => {
    getNameNums()
    getLocationAsync()
  }, [])

  const sendSOS = async () => {
    if (location) {
      await SMS.sendSMSAsync(
        SOScontacts,
        `SOS! PLEASE COME FIND ME! GPS location:
        https://www.google.com/maps/search/?api=1&query=${location.coords.latitude},${location.coords.longitude}`
      )
    } else {
        alert("Current GPS location not found!");
        return;
    }
  }

  if(nameNum.length) {
    return (
      <View style={styles.view}>
        <Text style={styles.Text}>SEND GPS LOCATION TO:</Text>
        <ScrollView>
          {nameNum.map(contact => {
            return (
              <FriendsButton
                key={contact.number}
                contact={contact}
                onPress={() => {
                  if(SOScontacts.includes(contact.number)){
                    setSOSContacts(SOScontacts.filter(number => contact.number !== number))
                  } else {
                    setSOSContacts([...SOScontacts, contact.number])
                  }
                }}
              />
            )
          })}
        </ScrollView>
        <Pressable
            style={({pressed}) => pressed ? styles.pressedButton : styles.button}
            onPress={() => sendSOS()}>
          <Text style={styles.buttonText}>SEND SOS!</Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={styles.view}>
        <Text style={styles.Text}>
          Sorry, no contacts found :(
        </Text>
      </View>
    )
  }
}
