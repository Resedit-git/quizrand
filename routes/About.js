import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

const About = () => {
    const goToHome = () => {
        Actions.home()
    };
    return (
        <View style = {{ margin: 128 }} onPress = {goToHome}>
            <Text>This is ABOUT</Text>
        </View>
    )
};
export default About
