import React from 'react';
import {Text, View, StyleSheet, Image, Button, TouchableOpacity, Alert, Animated} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

import * as Levels from '../levels';

const goToHome = () => {
    Actions.home()
};

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

export default class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            level: Levels['1'][this.props.level],
            letters: []
        };
    }

    componentDidMount() {
        this.setState({ letters: shuffleArray(this.state.level.letters)});
    }

    render() {
        return (

            <LinearGradient
                start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#4c669f', '#3b5998', '#192f6a']}
                style={{flex: 1}}
            >

                <View style={[styles.container]}>

                    <View style={styles.questionContainer}>

                        <Text style={[styles.questionText, styles.textCenter]}>
                            {this.state.level.question}
                        </Text>

                    </View>

                    <View style={styles.answerContainer}>
                        <Text style={[styles.answerText, styles.textCenter]}>
                            {this.state.letters.length}
                        </Text>
                    </View>

                    <View style={[styles.lettersContainer]}>
                        <View style={[styles.lettersSpace]}>
                            {
                                this.state.letters.map((letter, index) =>
                                    <View key={index}>
                                        <Text
                                            style={[styles.letters, styles.textCenter, styles.lettersText, {flexWrap: 'nowrap'}]}
                                        >
                                            {letter}
                                        </Text>
                                    </View>
                                )
                            }
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
    }
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
        justifyContent: 'center',
        alignItems: 'center',
    },

    textCenter: {
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    questionContainer: {
        width: 280,
        marginTop: 50,
        padding: 20,
        borderRadius: 25,
        backgroundColor: 'royalblue',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },

    letters: {
        borderRadius: 50,
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: 'white',
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
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
        justifyContent: 'space-around',
    },

    answerContainer: {
        borderRadius: 25,
        width: 200,
        height: 60,
        marginTop: 50,
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: 20,
        //shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
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
