import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignContent: 'center',
  },
  Text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  textInput: {
    color: 'white',
    flex: 1,
    fontSize: 75,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#F56960',
    padding: 25,
    borderRadius: 15,
    margin: 45,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  photo: {
    flex: 1,
    width: width,
    // height: 450,
    resizeMode: "contain",
  },
  scrollText: {
    color: 'white',
    fontSize: 20,
  },
  contactButton: {
    backgroundColor: '#B3B3B3',
    padding: 10,
    borderRadius: 15,
    margin: 5,
    alignItems: 'center'
  },
  contactButtonPressed: {
    backgroundColor: '#F56960',
    padding: 10,
    borderRadius: 15,
    margin: 5,
    alignItems: 'center'
  },
  // flashView: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: 'white',
  //   alignContent: 'center',
  // },
});
