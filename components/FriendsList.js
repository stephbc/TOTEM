import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable, TextInput } from 'react-native';
import * as Contacts from 'expo-contacts';
import * as SMS from 'expo-sms';
import * as Location from 'expo-location';
import createStyles, { colors, padding, fonts, dimensions } from '../styles';
import { FriendsButton } from './FriendsButton';

export const FriendsList = () => {
  const [allContacts, setAllContacts] = useState([]);
  const [visibleContacts, setVisibleContacts] = useState([]);
  const [SOScontacts, setSOSContacts] = useState([]);
  const [location, setLocation] = useState(null);
  const [searchTerm] = useState(null);

  const getAllContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [
          Contacts.Fields.Name,
          Contacts.Fields.PhoneNumbers
        ],
      });
      const hasPhoneNum = data.filter(contact => contact.phoneNumbers);
      const formattedContacts = hasPhoneNum.map(contact => {
        let contObj = {};
        contObj.name = contact.name;
        contObj.number = contact.phoneNumbers[0].number;
        return contObj;
      });
      setAllContacts(formattedContacts);
      setVisibleContacts(formattedContacts);
    } else {
      alert("Permission to access Contacts is required.");
      return;
    }
  };

  const handleSearch = (text) => {
    if (text) {
      const searchFiltered = allContacts.filter(contact => contact.name.toLowerCase().includes(text.toLowerCase()));
      setVisibleContacts(searchFiltered);
    } else {
      setVisibleContacts(allContacts);
    }
  };

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } else {
      alert("Permission to access Location is required.");
      return;
    }
  };

  useEffect(() => {
    getAllContacts();
    getLocationAsync();
  }, []);

  const sendSOS = async () => {
    if (location) {
      await SMS.sendSMSAsync(
        SOScontacts,
        `SOS! PLEASE COME FIND ME!
        Timestamp: ${new Date()}
        My Location: https://www.google.com/maps/search/?api=1&query=${location.coords.latitude},${location.coords.longitude}`
      );
    } else {
      alert("Current GPS location not found!");
      return;
    }
  };

  if (!allContacts.length) {
    return (
      <View style={styles.view}>
        <Text style={styles.Text}>
          Sorry, no contacts found :(
        </Text>
      </View>
    )
  } else {
    return (
      <View style={styles.view}>
        <Text style={styles.Text}>SEND GPS LOCATION TO:</Text>
        <TextInput
          style={styles.friendsSearchInput}
          onChangeText={handleSearch}
          value={searchTerm}
          placeholder="Search contacts"
        />
        <ScrollView>
          {visibleContacts.map(contact => {
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
            disabled={!SOScontacts.length}
            style={() => SOScontacts.length ? styles.sendButton : styles.disabledSendButton}
            onPress={() => sendSOS()}>
          <Text style={styles.sendButtonText}>SEND SOS!</Text>
        </Pressable>
      </View>
    )
  }
};

const styles = createStyles({
  friendsSearchInput: {
    backgroundColor: 'white',
    color: 'black',
    width: dimensions.fullWidth * 0.75,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: padding.sm,
    marginBottom: 15,
  },
  sendButton: {
    backgroundColor: colors.primary,
    width: dimensions.fullWidth * 0.33,
    height: dimensions.fullHeight * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: padding.sm,
    borderRadius: 25,
    margin: padding.md,
  },
  disabledSendButton: {
    backgroundColor: colors.secondary,
    width: dimensions.fullWidth * 0.33,
    height: dimensions.fullHeight * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    padding: padding.sm,
    borderRadius: 25,
    margin: padding.md,
  },
  sendButtonText: {
    fontSize: fonts.sm,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
