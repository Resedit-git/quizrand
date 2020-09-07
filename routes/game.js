import React from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import System from '../classes/system.class';

import * as Levels from '../levels';

function shuffleArray(array) {
    let i = array.length - 1;
    for (i; i > 0; i--) {
        let index = Math.floor(Math.random() * (i + 1));
        let a = array[index];
        array[index] = array[i];
        array[i] = a;
    }

    return array;
}


const Game = () => {
    let letters = shuffleArray(Levels['1'].letters);
    let test = [];

    function deleteItem (id) {
            return state.filter(el => el.id !== letters)
    }
    const rows = letters.map((letter, index) =>
        <Text key={index} style={styles.letters} onPress={() => { deleteItem(index) }}>
            {letter} {test = index}
        </Text>,
    );


    return (
        <LinearGradient

            start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#4c669f', '#3b5998', '#192f6a']}
            style={{flex: 1}}
        >

            <View style={styles.container}>

                <View style={styles.questionContainer}>
                    <Text>
                        {Levels['1'].question}
                    </Text>
                </View>

                <View style={styles.answerContainer}>
                    <Text>
                        {test}
                    </Text>
                </View>


                <View style={styles.countContainer}>
                    {rows}
                </View>

            </View>

        </LinearGradient>
    );

};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
        color: 'red',
        fontSize: 20,
    },
    questionContainer: {
        flex: 1,
        marginTop: 50,

        backgroundColor: 'red',
    },
    letters: {
        borderRadius: 50,
        width: 22,
        backgroundColor: 'red',

    },
    answerContainer: {
        flex: 1,
        marginTop: 10,
        backgroundColor: 'green',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
        marginBottom: 80,
        marginTop: 30,
    },
});
export default Game;
