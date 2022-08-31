import { Text, View, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './Screens/Home';
import PlanetaryObservation from './Screens/PlanetaryObservation';
import EarthObservation from './Screens/EarthObservation';
import PSLVScreen from './Screens/PSLV-C49';
import GSLVScreen from './Screens/Chandryaan-2';


var Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name = 'Home' component ={HomeScreen}/>
      <Stack.Screen name = 'PlanetaryObservation' component ={PlanetaryObservation}/>
      <Stack.Screen name = 'EarthObservation' component ={EarthObservation}/>
      <Stack.Screen name = 'PSLV' component ={PSLVScreen}/>
       <Stack.Screen name = 'GSLV' component ={GSLVScreen}/>
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}

