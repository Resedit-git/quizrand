import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet, Button, Image, Alert, Animated} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import * as L from '../levels';

const LevelsList = (props) => {
    let complexity = props.complexity;
    let levels = Object.keys(L[complexity]);

    const goToGame = (level) => {
        Actions.game({level: level, complexity: complexity})
    };

    return (

        <LinearGradient
            start={{x: 0, y: 1}} end={{x: 0, y: 0}}
            colors={["#2c5aff", "#0076ff", "#008cff", "#009fff", "#43a1ff", "#5fa2ff", "#74a4ff", "#a494f6", "#cc82e1"]}
            style={{flex: 1}}
        >

            <View style={[styles.countContainer]}>
                <View style={[styles.lettersContainer]}>
                    <View style={[styles.lettersSpace]}>
                        {
                            levels.map(function (id, index) {
                                return <View key={index}>

                                    <TouchableOpacity
                                        style={[styles.letters, {flexWrap: 'nowrap'}]}
                                        color="royalblue"
                                        title={id.toString()}
                                        onPress={() => goToGame(id)}
                                    >
                                        <Text style={styles.baseText}>{id.toString()}</Text>
                                    </TouchableOpacity>

                                </View>
                            })
                        }
                    </View>
                </View>
            </View>

        </LinearGradient>

    )
};

const styles = StyleSheet.create({
    countContainer: {
        alignItems: "center",
        margin: 10,
    },
    baseText: {
        fontFamily: 'Cochin',
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
    },
    lettersSpace: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    lettersContainer: {
        width: 280,
        height: 150,
        marginTop: 50,
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
});

export default LevelsList

