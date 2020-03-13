import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  Text: {
    color: 'white'
  },
  TextInput: {
    color: 'white',
    flex: 1,
    fontSize: 75,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#e75480',
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
    fontSize: 150,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cameraButtons: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  cameraIcons: {
    color: "#fff",
    fontSize: 40
  }
});
