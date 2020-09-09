import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet, Button, Image, Alert, Animated} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

const Separator = () => (
    <View style={styles.separator}/>
);

const Home = () => {

    const goToComplexity = () => {
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
