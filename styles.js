import { StyleSheet, Dimensions } from 'react-native';

let width = Dimensions.get('window').width; //full width
let height = Dimensions.get('window').height;

export default StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  Text: {
    color: 'white',
    fontSize: 20
  },
  TextInput: {
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
    width: 450,
    height: 450,
    resizeMode: "cover"
  },
  signtext: {
    color: 'white',
    fontSize: 125,
    // width: width,
    // height: height,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  signview: {
    flex: 1,
    // alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  cameraButtons: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  cameraIcons: {
    color: "#fff",
    fontSize: 40
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
  }
});
