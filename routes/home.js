import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet, ActivityIndicator, Image, Alert, Animated} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {

    const goToComplexity  = () => {
        Actions.complexity()
    };

    return (

        <LinearGradient

            start={{x: 0, y: 1}} end={{x: 0, y: 0}} colors={["#2c5aff","#0076ff", "#008cff", "#009fff", "#43a1ff", "#5fa2ff", "#74a4ff", "#a494f6", "#cc82e1"]}
            style={{flex: 1}}
        >

            <View style={styles.container}>

                <Image
                    style={{width: 300, height: 100, marginBottom:70}}
                    source={require('./image/text.png')}
                />

                <View style={styles.countContainer} >

                    <TouchableOpacity
                        onPress={goToComplexity}
                    >
                        <Image
                            style={{height: 124}}
                            source={require('./image/Logo.png')}
                            onPress={goToComplexity}
                        />

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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        paddingTop: 80,
        paddingHorizontal: 10
    },
    button: {
        borderRadius: 1000,
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
    countContainer: {
        alignItems: "center",
        padding: 10,
        marginBottom: 80,
        marginTop: 30
    }
});

export default Home
