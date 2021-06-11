import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Worklets from './pages/Worklets';

const Stack = createStackNavigator()

const MainRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Worklets" component={Worklets} />
    </Stack.Navigator>
  );
}

export default MainRoutes;