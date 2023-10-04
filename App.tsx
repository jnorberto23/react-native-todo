import React from 'react';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useAuthStore } from './src/store/AuthStore';
import Notes from './src/pages/Notes';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const isLogged = useAuthStore(state => state.isLogged);

  return (
    <NavigationContainer>
      {isLogged ? (
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Notes" component={Notes} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator initialRouteName="Login">
          <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
