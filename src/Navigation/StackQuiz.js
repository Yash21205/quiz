import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from "../Screens/Home";
import GiveQuiz from '../Screens/Givequiz';
const Stack = createStackNavigator();

export default function StackQuiz() {
  return (
    <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="GiveQuiz" component={GiveQuiz} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}   />
        
    </Stack.Navigator>
  );
}