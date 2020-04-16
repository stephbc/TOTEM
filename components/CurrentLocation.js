// import React from 'react';
// import { Text, View } from 'react-native';
// import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';
// import styles from '../styles'

// export class CurrentLocation extends React.Component {
//   state = {
//     location: null,
//     errorMessage: null,
//   };

//   constructor(props) {
//     super(props);
//     this._getLocationAsync();
//   }

//   _getLocationAsync = async () => {
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== 'granted') {
//       this.setState({
//         errorMessage: 'Permission to access location was denied',
//       });
//     }
//     let location = await Location.getCurrentPositionAsync({});
//     this.setState({ location });
//   };

//   render() {
//     let text = 'Waiting..';
//     if (this.state.errorMessage) {
//       text = this.state.errorMessage;
//     } else if (this.state.location) {
//       text = JSON.stringify(this.state.location);
//     }

//     return (
//       <View style={styles.view}>
//         <Text style={styles.Text}>{text}</Text>
//       </View>
//     );
//   }
// }
