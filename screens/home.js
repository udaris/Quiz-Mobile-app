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
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Lottie from 'lottie-react-native';
import Title from '../components/title';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title></Title>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Lottie style={{ height: '100%', width: '100%' }}
          source={require('../assets/image.json')} autoPlay />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Quiz")}
        style={styles.button}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>

    </View>
  );

};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#b5838d',
  },
  imageBackground: {
    height: 300,
    width: 300,
    flex: 0.65,
  },
  button: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5989b',
    padding: 20,
    borderRadius: 26,
    marginBottom: 35,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '800',
  }

});