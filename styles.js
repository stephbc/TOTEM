import { StyleSheet, Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

export const colors  = {
  primary: '#9792e3', // active
  secondary: '#b5b1eb', // inactive
};

export const padding = {
  sm: 10,
  md: 25,
};

export const fonts = {
  sm: 18,
  md: 25,
  lg: 70,
}

const baseStyles = {
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'black',
    padding: padding.sm,
  },
  button: {
    backgroundColor: colors.primary,
    width: dimensions.fullWidth * 0.6,
    height: dimensions.fullHeight * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: padding.md,
    borderRadius: 50,
    margin: 25,
  },
  buttonText: {
    fontSize: fonts.sm,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Text: {
    color: 'white',
    fontSize: fonts.sm,
    fontWeight: 'bold',
    margin: padding.sm,
  },
  // pinchableImage: {
  //   height: fullHeight,
  //   resizeMode: "contain",
  // },
  //   wrapper: {
  //     flex: 1,
  //     justifyContent: 'flex-end',
  //     backgroundColor: 'black',
  //   }
  // },
};

export default function createStyles(overrides = {}) {
  return StyleSheet.create({...baseStyles, ...overrides})
};
