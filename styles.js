import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

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

  pinchableImage: {
  //   width: width,
    height: height,
    resizeMode: "contain",
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    // alignContent: 'center',
  }
});
