import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet, Button, Image, Alert, Animated} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {floor} from "react-native-reanimated";
import LinearGradient from 'react-native-linear-gradient';
import Header from "react-native/Libraries/NewAppScreen/components/Header";

const Separator = () => (
    <View style={styles.separator}/>
);

const Home = () => {

    const goToAbout = () => {
        Actions.about()
    };

    return (

        <LinearGradient

            start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#4c669f', '#3b5998', '#192f6a']}
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

                <View style={styles.countContainer} style={{marginBottom: 80, marginTop: 30}}>

                    <Button
                        size={15}
                        color="royalblue"
                        title="START GAME"
                        onPress={goToAbout}
                    />

                </View>

            </View>

        </LinearGradient>

    )
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin",
        color: "red",
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
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});

export default Home
