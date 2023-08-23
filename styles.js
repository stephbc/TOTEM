import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignContent: 'center',
    padding: 10,
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
    backgroundColor: '#8377D1',
    width: 250,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 100,
    margin: 25,
  },
  pressedButton: {
    backgroundColor: '#9b92da',
    width: 250,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 100,
    margin: 25,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sendButton: {
    backgroundColor: '#8377D1',
    width: 150,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 25,
    margin: 20,
  },
  disabledSendButton: {
    backgroundColor: '#9b92da',
    width: 150,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 25,
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
    alignItems: 'center',
    width: 200,
  },
  contactButtonPressed: {
    backgroundColor: '#8377D1',
    padding: 10,
    borderRadius: 15,
    margin: 5,
    alignItems: 'center',
    width: 200,
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
