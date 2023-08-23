import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import createStyles, { colors } from '../styles';

export const HomeScreen = ({ navigation }) => {
  const [sound, setSound] = useState();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/airhorn.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

  const buttonStyling = (pressed) => ([
    styles.button,
    { backgroundColor: pressed ? colors.secondary : colors.primary }
  ]);

  return (
    <View style={styles.view}>
      <Pressable
          style={({pressed}) => buttonStyling(pressed)}
          onPress={() => navigation.navigate('Input')}>
        <Text style={styles.buttonText}>MAKE A SIGN</Text>
      </Pressable>
      <Pressable
          style={({pressed}) => buttonStyling(pressed)}
          onPress={() => navigation.navigate('Friends')}>
        <Text style={styles.buttonText}>FIND FRIENDS</Text>
      </Pressable>
      <Pressable
          style={({pressed}) => buttonStyling(pressed)}
          onPress={() => playSound()}>
        <Text style={styles.buttonText}>PLAY AIR HORN</Text>
      </Pressable>
    </View>
  );
};

const styles = createStyles();
