import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: 25,
    marginHorizontal: 25,
    marginVertical: 15,

    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 5
  },
  buttonText: {
    fontSize: 21
  }
});

const Home: React.FC = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={()=>navigation.navigate('Worklets')}
      >
        <Text style={styles.buttonText} >Worklets</Text>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={()=>navigation.navigate('PanGesture')}
      >
        <Text style={styles.buttonText} >PanGesture</Text>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default Home;