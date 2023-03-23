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

const Result = ({ navigation, route }) => {

  const { score } = route.params

  return (
    <View style={styles.container}>

      <View >
        {score > 60 ?
          <View style={{ flex: 0.75, alignItems: 'center', justifyContent: 'center' }}>
            <Lottie style={{ height: '100%', width: '100%' }}
              source={require('../assets/failer.json')} autoPlay />
          </View> :
          <View style={{ flex: 0.75, alignItems: 'center', justifyContent: 'center' }}>
            <Lottie style={{ height: '100%', width: '100%' }}
              source={require('../assets/failer.json')} autoPlay />
          </View>

        }
      </View>

      <View style={styles.result}>
        <Text style={styles.resultText}> RESULTS </Text>
        <View style={styles.screen}>
          <TouchableOpacity style={styles.resultScreen}>
            <Text style={styles.scoreValue}>{score}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View >
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.buttonHome}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>

    </View>
  );

};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#edede9',
    paddingHorizontal: 16,
  },
  imageBackground: {
    height: 300,
    width: 300,
    flex: 0.67,
  },
  buttonHome: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b5838d',
    padding: 20,
    borderRadius: 20,
    marginBottom: 88,
    paddingHorizontal: 40,
  },
  scoreValue: {
    fontSize: 30,
    fontWeight: '800',
    alignSelf: 'center',
  },
  result: {
    paddingTop: 1,
    marginBottom:10,
  },
  resultText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#22223B'
  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 18,
  },
  resultScreen: {
    borderRadius: 50,
    backgroundColor: '#F2E9E4',
    padding: 20,
    margin: 1,
  },
  screen: {
    marginTop: 5,
    borderRadius: 50,
    backgroundColor: '#4A4E69',
    padding: 5,
    marginBottom: 5,
  }
});