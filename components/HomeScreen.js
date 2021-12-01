import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import styles from '../styles';

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

  return (
    <View style={styles.view} >

      <Pressable style={styles.button} onPress={() => navigation.navigate('TOTEM')}>
        <Text style={styles.buttonText}>MAKE A TOTEM</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate('FRIENDS')}>
        <Text style={styles.buttonText}>FIND FRIENDS</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => playSound()}>
        <Text style={styles.buttonText}>PLAY AIR HORN</Text>
      </Pressable>

    </View>
  );
}
