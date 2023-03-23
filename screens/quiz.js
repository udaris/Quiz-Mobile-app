/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Lottie from 'lottie-react-native';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({ navigation }) => {

  const [questions, setQusetions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getQuiz = async () => {
    setIsLoading(true);
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQusetions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false);
    // console.log(data);
    //console.log(data.results[0])
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPres = () => {
    setQues(ques + 1)
    setOptions(generateOptionsAndShuffle(questions[ques + 1]))
  }

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)

    shuffleArray(options)
    return options
  }

  const handleSelectedOption = (_option) => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10)
    }
    if (ques !== 9) {
      setQues(ques + 1)
      setOptions(generateOptionsAndShuffle(questions[ques + 1]))
      // console.log(_option === questions[ques].correct_answer)
    }
    if (ques === 9) {
      handleShowResult();
    }

  }

  const handleShowResult = () => {
    navigation.navigate('END', {
      score: score
    })
  }

  return (

    <View style={styles.container}>
      {isLoading ? <View style={{ alignContent: 'center', margin: 2, alignItems: 'center' }}><Lottie style={{ height: '100%', width: '100%' }}
        source={require('../assets/qu.json')} autoPlay /></View> : questions && (
          <View style={styles.back}>
            <View style={styles.top}>
              <Text style={styles.questions}>Q. {decodeURIComponent(questions[ques].question)} </Text>
            </View>
            <View style={styles.options}>
              <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[0])}>
                <Text style={styles.optionText}>{decodeURIComponent(options[0])} </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[1])}>
                <Text style={styles.optionText}>{decodeURIComponent(options[1])} </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[2])}>
                <Text style={styles.optionText}>{decodeURIComponent(options[2])} </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[3])}>
                <Text style={styles.optionText}>{decodeURIComponent(options[3])}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
              <TouchableOpacity style={styles.buttonSkip} onPress={handleShowResult}>
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>
              {ques !== 9 &&
                <TouchableOpacity onPress={handleNextPres}
                  style={styles.buttonNext}>
                  <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>}
              {ques === 9 && <TouchableOpacity onPress={handleShowResult}
                style={styles.buttonEnd}>
                <Text style={styles.buttonText}>SHOW RESULTS</Text>
              </TouchableOpacity>}
            </View>
          </View>
        )}

    </View>

  );

};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: 16,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonSkip: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9A8C98',
    padding: 12,
    borderRadius: 16,
    marginBottom: 35,
    paddingHorizontal: 26,
  },
  buttonText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '800',
  },
  buttonNext: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D5BDAF',
    padding: 12,
    borderRadius: 16,
    marginBottom: 35,
    paddingHorizontal: 26,
  },
  buttonEnd: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A4E69',
    padding: 12,
    borderRadius: 16,
    marginBottom: 35,
    paddingHorizontal: 26,
  },
  questions: {
    fontSize: 26,
    color: 'black',
  },
  optionText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500'
  },
  optionButton: {
    paddingVertical: 10,
    marginVertical: 9,
    backgroundColor: '#D6CCC2',
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  back: {
    height: '100%'
  }
});