import { runOnUI } from 'react-native-reanimated';
import React from 'react';
import { Button, Text, View } from 'react-native';

const handlePress = (who: string) => {
  "worklet";
  console.log("Hello from the UI thread, " + who)
}

const Worklets: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>Worklets example</Text>
      <Button title="Press" onPress={() => runOnUI(handlePress)("Daniel")} />
    </View>
  );
}

export default Worklets;