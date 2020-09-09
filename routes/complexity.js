import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet, Button, Image, Alert, Animated} from 'react-native';
import {Actions} from 'react-native-router-flux';

import LinearGradient from 'react-native-linear-gradient';


const Complexity = () => {

    const goToLevel = () => {
        Actions.level()
    };

    const goToHome = () => {
        Actions.home()
    };

    return (

        <LinearGradient

            start={{x: 0, y: 1}} end={{x: 0, y: 0}}
            colors={["#2c5aff", "#0076ff", "#008cff", "#009fff", "#43a1ff", "#5fa2ff", "#74a4ff", "#a494f6", "#cc82e1"]}
            style={{flex: 1}}
        >

            <View style={styles.container}>

                <View style={styles.countContainer}>

                    <TouchableOpacity
                        style={[styles.button]}
                        color="royalblue"
                        onPress={goToLevel}
                    >
                        <Text style={styles.baseText}>EASY</Text>
                    </TouchableOpacity>


                </View>

                <View style={styles.countContainer}>

                    <TouchableOpacity
                        style={[styles.button]}
                        color="royalblue"
                        onPress={goToLevel}
                    >
                        <Text style={styles.baseText}>MEDIUM</Text>
                    </TouchableOpacity>


                </View>

                <View style={styles.countContainer}>

                    <TouchableOpacity
                        style={[styles.button]}
                        color="royalblue"
                        onPress={goToLevel}
                    >
                        <Text style={styles.baseText}>HARD</Text>
                    </TouchableOpacity>


                </View>

                <View style={styles.countContainer}>

                    <TouchableOpacity
                        style={[styles.buttonBack]}
                        color="royalblue"
                        onPress={goToHome}
                    >
                        <Text style={styles.baseText}>BACK TO MENU</Text>
                    </TouchableOpacity>


                </View>

            </View>

        </LinearGradient>

    )
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin",
        color: "white",
        fontSize: 20,
    },

    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },

    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 80,
    },
    button: {
        borderRadius: 50,
        alignItems: "center",
        backgroundColor: "royalblue",
        padding: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 16.84,

        elevation: 5,
    },
    buttonBack: {
        borderRadius: 50,
        alignItems: "center",
        backgroundColor: "#B57EDC",
        padding: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,

        elevation: 5,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    countContainer: {
        height: 50,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 30
    }
});

export default Complexity
