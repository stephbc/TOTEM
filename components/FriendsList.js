import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';
import styles from '../styles';
import { ScrollView, State } from 'react-native-gesture-handler';

export const FriendsList = () => {
  let [nameNum, setNameNum] = React.useState([]);

  // state = {
  //   nameNum: []
  // }

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.Name,
            Contacts.Fields.PhoneNumbers
          ],
        });
        // console.log(data)
        setNameNum({
          nameNum: data
        })
        // data.forEach(contact => {
        //   let contObj = {}
        //   contObj[contact.name] = contact.phoneNumbers[0].number
        //   // console.log(nameNum)
        //   setNameNum({
        //     nameNum: [...nameNum, contObj]
        //   })
        // })

        console.log(nameNum)

        // console.log(typeof data)
      }
    })();
  }, []);

  return (
    <View style={styles.view}>
      <Text style={styles.Text}>Contacts</Text>
      {/* <ScrollView>
        {nameNum.forEach(contact => {
          return (
            <Text style={styles.Text}>
              hello
            </Text>
          )
        })}
      </ScrollView> */}
    </View>
  );
}
