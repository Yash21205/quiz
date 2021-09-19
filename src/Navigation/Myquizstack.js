

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screens/Profile';
import Home from '../Screens/Home';
import MyquizStackOne from './MyquizStackOne';
import StackQuiz from './StackQuiz';

const Tab = createBottomTabNavigator();
export default function Myquizstack() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="profile" component={Profile} options={{headerShown:false}}/>
    <Tab.Screen  name="Myquiz" component={MyquizStackOne} options={{headerShown:false}} />
    <Tab.Screen  name="StackQuiz" component={StackQuiz} options={{headerShown:false}} />
  </Tab.Navigator>
    
  
  
  );
}

