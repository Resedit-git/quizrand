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

                <Image
                    style={{width: 200, height: 200, marginBottom:30}}
                    source={require('./image/start.png')}
                />

                <View style={styles.countContainer} >

                    <TouchableOpacity
                        style={[styles.button]}
                        color="royalblue"
                        onPress={goToComplexity}
                    >
                        <Text style={[styles.baseText, {margin: 5, paddingLeft: 20, paddingRight: 20}]}>START</Text>
                    </TouchableOpacity>


                </View>

            </View>

        </LinearGradient>

    )
};

const styles = StyleSheet.create({

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    baseText: {
        fontFamily: "Cochin",
        color: "white",
        fontSize: 20,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },

    logoText: {
        color: '#FFFFFF',
        fontFamily: 'GoogleSans-Bold',
        fontSize: 30,
        marginTop: 29.1,
        fontWeight: '300',
    },

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    countContainer: {
        alignItems: "center",
        padding: 10,
        marginBottom: 80,
        marginTop: 30
    }
});

export default Home
