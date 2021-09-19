import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MyQuizes from '../Screens/MyQuizes';
import CreateQuiz from '../Screens/CreateQuiz';
import AddQuizQstn from '../Screens/AddQuizQstn';
import QuizDetails from '../Screens/QuizDetails'
import GiveQuiz from '../Screens/Givequiz';
const Stack = createStackNavigator();

export default function MyquizStackOne() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Myquiz" component={MyQuizes} options={{headerShown:false}} />
        <Stack.Screen name="CreateQuiz" component={CreateQuiz}  options={{headerShown:false}}   />

        <Stack.Screen name="AddQuizQstn" component={AddQuizQstn}  options={{headerShown:false}}  />
        <Stack.Screen name="QuizDetails" component={QuizDetails}   options={{headerShown:false}}  />
       
        
    </Stack.Navigator>
  );
}