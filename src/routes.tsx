import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Worklets from './pages/Worklets';

const Stack = createStackNavigator()

const MainRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Worklets"
    >
      <Stack.Screen name="Worklets" component={Worklets} />
    </Stack.Navigator>
  );
}

export default MainRoutes;