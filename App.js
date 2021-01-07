import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './components/HomeScreen';
import { FriendsScreen } from './components/FriendsScreen';
import { TotemScreen } from './components/TotemScreen';
import { Input } from './components/Input';
import { SelectPhoto } from './components/SelectPhoto';
import { FinalSign } from './components/FinalSign';
import { PhotoSign } from './components/PhotoSign';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen}
          options={{
            title: 'TOTEM',
          }}/>
        <Stack.Screen name='TOTEM' component={TotemScreen}
          options={{
            title: 'MAKE A TOTEM',
          }}/>
        <Stack.Screen name='SIGN' component={Input}
          options={{
            headerShown: false,
          }}/>
        <Stack.Screen name='FinalSign' component={FinalSign}
          options={{
            headerShown: false,
          }}/>
        <Stack.Screen name='PHOTO' component={SelectPhoto}
          options={{
            title: 'PICTURE SIGN',
          }}/>
        <Stack.Screen name='PhotoSign' component={PhotoSign}
          options={{
            headerShown: false,
          }}/>
        <Stack.Screen name='FRIENDS' component={FriendsScreen}
          options={{
            title: 'FIND FRIENDS',
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
