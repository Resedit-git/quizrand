import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet, Button, Image, Alert, Animated} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Dimensions } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const Complexity = () => {

    const goToLevel = (complexity) => {
        Actions.levelsList({complexity: complexity})
    };

    const goToHome = () => {
        Actions.home()
    };

    var deviceWidth = Dimensions.get("window").width;
    var deviceHeight = Dimensions.get("window").height;

    return (

        <LinearGradient

            start={{x: 0, y: 1}} end={{x: 0, y: 0}}
            colors={["#2c5aff", "#0076ff", "#008cff", "#009fff", "#43a1ff", "#5fa2ff", "#74a4ff", "#a494f6", "#cc82e1"]}
            style={{flex: 1}}
        >

            <View style={styles.container}>

                <View style={[styles.countContainer, {marginBottom: 30}]}>

                    <TouchableOpacity
                        style={[styles.button]}
                        color="royalblue"
                        onPress={() => goToTutorial('1')}
                    >
                        <Text style={styles.baseText}>TUTORIAL</Text>
                    </TouchableOpacity>


                </View>

                <View style={styles.countContainer}>

                    <TouchableOpacity
                        style={[styles.button]}
                        color="royalblue"
                        onPress={() => goToLevel('1')}
                    >
                        <Text style={styles.baseText}>EASY</Text>
                    </TouchableOpacity>


                </View>

                <View style={styles.countContainer}>

                    <TouchableOpacity
                        style={[styles.button]}
                        color="royalblue"
                        onPress={() => goToLevel('2')}
                    >
                        <Text style={styles.baseText}>MEDIUM</Text>
                    </TouchableOpacity>


                </View>

                <View style={styles.countContainer}>

                    <TouchableOpacity
                        style={[styles.button]}
                        color="royalblue"
                        onPress={() => goToLevel('3')}
                    >
                        <Text style={styles.baseText}>HARD</Text>
                    </TouchableOpacity>


                </View>

                <View style={[styles.countContainer, {marginTop: 60}]}>

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
        paddingBottom: 30,
    },

    button: {
        borderRadius: 50,
        alignItems: "center",
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 16.84,
        elevation: 3,
    },
    buttonBack: {
        borderRadius: 50,
        alignItems: "center",
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        shadowColor: "purple",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1.25,
        shadowRadius: 5.84,

        elevation: 4,
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
