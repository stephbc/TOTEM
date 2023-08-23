import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './components/HomeScreen';
import { FriendsList } from './components/FriendsList';
import { Input } from './components/Input';
import { FinalSign } from './components/FinalSign';
// import { TotemScreen } from './components/TotemScreen';
// import { SelectPhoto } from './components/SelectPhoto';
// import { PhotoSign } from './components/PhotoSign';

export default App = () => {
  const Stack = createStackNavigator();

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
            // title: 'TOTEM',
            headerShown: false,
          }}/>
        <Stack.Screen name='Input' component={Input}
          options={{
            title: '',
          }}/>
        <Stack.Screen name='FinalSign' component={FinalSign}
          options={{
            headerShown: false,
          }}/>
        {/* <Stack.Screen name='TOTEM' component={TotemScreen}
          options={{
            title: 'MAKE A TOTEM',
          }}/>
        <Stack.Screen name='PHOTO' component={SelectPhoto}
          options={{
            title: 'PICTURE SIGN',
          }}/>
        <Stack.Screen name='PhotoSign' component={PhotoSign}
          options={{
            headerShown: false,
          }}/> */}
        <Stack.Screen name='Friends' component={FriendsList}
          options={{
            title: 'SEND YOUR LOCATION',
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
