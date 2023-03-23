/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';


const App = () => {

  return(
     <NavigationContainer>
      <MyStack/>
     </NavigationContainer>
  );
 
};

export default App;

const styles = StyleSheet.create({
  container:{
paddingTop:40,
paddingHorizontal:16,
  },
});