import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

import * as Levels from '../levels';


const Game = (props) => {

    const levelID = props.level;
    const complexity = props.complexity;
    const level = Levels[complexity][levelID];
    let letters = level.letters;
    let [disabledLetter, setDisabledLetter] = useState([]);
    let [answer, setAnswer] = useState([]);


    function createLetters(letter, index) {
        if (disabledLetter.includes(index)) {
            return (
                <Text style={[styles.letters, styles.textCenter, styles.lettersTextDisable, {flexWrap: 'nowrap'}]}
                      disabled
                >
                    {letter}
                </Text>
            );
        } else {
            return (
                <Text style={[styles.letters, styles.textCenter, styles.lettersText, {flexWrap: 'nowrap'}]}
                      onPress={() => validate(letter, index)}
                >
                    {letter}
                </Text>
            );
        }
    }


    function validate(e, index) {
        answer = [...answer, e];
        setAnswer(answer);
        disabledLetter = setDisabledLetter([...disabledLetter, index]);


        if (answer.length === level.answer.length) {
            Actions.complexity();
        }

    }

    const rows = letters.map((letter, index) =>
        <View key={index}>
            {createLetters(letter, index)}
        </View>,
    );

    return (
        <LinearGradient
            start={{x: 0, y: 1}} end={{x: 1, y: 0}}
            colors={['#2c5aff', '#0076ff', '#008cff', '#009fff', '#43a1ff', '#5fa2ff', '#74a4ff', '#a494f6', '#cc82e1']}
            style={{flex: 1}}
        >

            <View style={[styles.container]}>

                <View style={styles.questionContainer}>

                    <Text style={[styles.questionText, styles.textCenter]}>
                        {level.question}
                    </Text>

                </View>

                <View style={styles.answerContainer}>
                    <Text style={[styles.answerText, styles.textCenter]}>
                        {answer}
                    </Text>
                </View>

                <View style={[styles.lettersContainer]}>
                    <View style={[styles.lettersSpace]}>
                        {rows}
                    </View>
                </View>

            </View>

        </LinearGradient>
    );

};

const styles = StyleSheet.create({

    questionText: {
        fontFamily: 'GoogleSans-Bold',
        color: 'white',
        fontSize: 18,
        fontWeight: '100',
    },
    lettersText: {
        fontFamily: 'GoogleSans-Bold',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    lettersTextDisable: {
        fontFamily: 'GoogleSans-Bold',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        opacity: 0.5,

    },
    textCenter: {
        paddingTop: 5,
        textAlign: 'center',
        justifyContent: 'space-evenly',
    },
    questionContainer: {
        width: 280,
        marginTop: 50,
        padding: 10,
        paddingBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'white',
        borderBottomWidth: 1,

    },
    letters: {
        borderRadius: 50,
        width: 55,
        height: 55,
        margin: 5,
        marginTop: 10,
        borderColor: 'white',
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 16.84,
        elevation: 2,
        backgroundColor: '#009fff',

    },
    lettersContainer: {
        width: 280,
        height: 150,
        marginTop: 60,
    },
    lettersSpace: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    answerContainer: {
        alignItems: "center",
        borderColor: 'white',
        borderBottomWidth: 1,
        width: 200,
        marginTop: 60,
        paddingBottom: 10,
    },
    answerText: {
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        paddingTop: 20,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
    buttonContainer: {
        marginBottom: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 25,
    },
});

export default Game;
