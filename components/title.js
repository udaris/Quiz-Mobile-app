/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const Title = () => {
  return(
    <View style={styles.container}>
    <Text style={styles.title}>Quizzes </Text>
  </View>
  );
 
};

export default Title;

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    paddingHorizontal: 16,
  },
title:{
    fontSize:36,
    fontWeight:'800',
    color:'#22223b'
}
});