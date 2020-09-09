import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Button, TouchableOpacity, Alert, Animated} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import System from '../classes/system.class';

import * as Levels from '../levels';



function shuffleArray(array) {
    let i = array.length - 1;
    for (i; i > 0; i--) {
        const index = Math.floor(Math.random() * (i + 1));
        const a = array[index];
        array[index] = array[i];
        array[i] = a;
    }

    return array;
}

const Game = (props) => {
    const goToHome = () => {
        Actions.home()
    };

    const levelID = props.level;
    const complexity = props.complexity;
    const level = Levels[complexity][levelID];
    let letters = shuffleArray(level.letters);
    let [answer, setAnswer] = useState([]);

    function validate(e) {
        answer = setAnswer(`${answer}${e}`);


        const index = letters.indexOf(e);
        letters.splice(index, 1);
    }

    const rows = letters.map((letter, index) =>

        <View key={index}>
            <Text style={[styles.letters, styles.textCenter, styles.lettersText, {flexWrap: 'nowrap'}]}
                  onPress={() => validate(letter)}
            >
                {letter}
            </Text>
        </View>
    );

    return (
        <LinearGradient
            start={{x: 0, y: 1}} end={{x: 0, y: 0}}
            colors={["#2c5aff", "#0076ff", "#008cff", "#009fff", "#43a1ff", "#5fa2ff", "#74a4ff", "#a494f6", "#cc82e1"]}
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

            <View style={styles.buttonContainer}>

                <Button
                    size={15}
                    color="royalblue"
                    title="Menu"
                    onPress={goToHome}
                />

            </View>

        </LinearGradient>
    );

};

const styles = StyleSheet.create({

    questionText: {
        fontFamily: 'Cochin',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },

    lettersText: {
        fontFamily: 'Cochin',
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
    },

    textCenter: {
        textAlign: 'center',
    },

    questionContainer: {
        width: 280,
        marginTop: 50,
        padding: 20,
        borderRadius: 25,
        backgroundColor: 'royalblue',
        flexDirection: 'row',
        alignItems: 'center',
    },

    letters: {
        borderRadius: 50,
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: 'white',
        margin: 10,
    },
    lettersContainer: {
        width: 280,
        height: 150,
        marginTop: 50,
    },
    lettersSpace: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    answerContainer: {
        borderRadius: 25,
        width: 200,
        height: 60,
        marginTop: 80,
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: 20,
    },
    answerText: {
        fontFamily: 'Cochin',
        color: 'black',
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
    buttonContainer:{
        marginBottom: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 25,
    },
});
export default Game;
