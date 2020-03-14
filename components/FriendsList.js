import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';
import styles from '../styles';
import { ScrollView } from 'react-native-gesture-handler';

// export const FriendsList = () => {
//   let [nameNum, setNameNum] = React.useState([]);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Contacts.requestPermissionsAsync();
//       if (status === 'granted') {
//         const { data } = await Contacts.getContactsAsync({
//           fields: [
//             Contacts.Fields.Name,
//             Contacts.Fields.PhoneNumbers
//           ],
//         })
//         setNameNum({
//           nameNum: data.map(contact => {
//             let contObj = {}
//             contObj.name = contact.name
//             contObj.number = contact.phoneNumbers[0].number
//             return contObj
//           })
//         })
//       }
//     })();
//   }, []);

//   console.log(nameNum)

//   if(nameNum.length) {
//     return (
//       <View style={styles.view}>
//         <Text style={styles.Text}>Contacts</Text>
//         <ScrollView>
//           {nameNum.forEach(contact => {
//             return (
//               <Text style={styles.Text}>
//                 {contact.name}
//               </Text>
//             )
//           })}
//         </ScrollView>
//       </View>
//     );
//   } else {
//     return (
//       <View style={styles.view}>
//         <Text style={styles.Text}>
//           You have no friends :(
//         </Text>
//       </View>
//     )
//   }
// }

export class FriendsList extends React.Component {
  state = {
    nameNum: []
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
    // console.log(this.state)
    // return (
    //   <View style={styles.view}>
    //     <Text style={styles.Text}>FRIENDSHIP IS MAGIC</Text>
    //   </View>
    // )

    if(this.state.nameNum.length) {
      return (
        <View style={styles.view}>
          <Text style={styles.Text}>Contacts</Text>
          <ScrollView>
            {this.state.nameNum.map(contact => {
              return (
                <Text style={styles.Text} key={contact.number}>
                  {contact.name}
                </Text>
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
