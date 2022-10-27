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
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#F56960',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 100,
    margin: 20,
  },
  pressedButton: {
    backgroundColor: '#F89690',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 100,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sendButton: {
    backgroundColor: '#F56960',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 100,
    margin: 20,
  },
  disabledSendButton: {
    backgroundColor: '#F89690',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 100,
    margin: 20,
  },
  sendButtonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollText: {
    color: 'white',
    fontSize: 20,
  },
  friendsSearchInput: {
    backgroundColor: 'white',
    color: 'black',
    width: 275,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    margin: 5,
    marginBottom: 15,
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
    height: height,
    resizeMode: "contain",
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  }
});
