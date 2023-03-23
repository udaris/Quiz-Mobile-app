import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:true,headerStyle:{ backgroundColor: '#b5838d'}}}/>
      <Stack.Screen name="END" component={Result} options={{headerShown:true, headerStyle:{ backgroundColor: '#b5838d'}}}/>
    </Stack.Navigator>
  );
}

export default MyStack;