import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, Animated, ActivityIndicator,} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from './image/Logo.png';

const goToHome = () => {
    Actions.home()
};

class LoadingScene extends Component {
    state = {
        LogoAnimate: new Animated.Value(0),
        LogoText: new Animated.Value(0),
        loadingSpinner: false,
    };

    componentDidMount() {
        const {LogoAnimate, LogoText} = this.state;
        Animated.parallel([
            Animated.spring(LogoAnimate, {
                toValue: 1,
                tension: 10,
                friction: 2,
                duration: 1000,
            }).start(),

            Animated.timing(LogoText, {
                toValue: 1,
                duration: 1200,
            }),
        ]).start(() => {
            this.setState({
                loadingSpinner: true,
            });

            setTimeout(goToHome, 1500);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={{
                        opacity: this.state.LogoAnimate,
                        top: this.state.LogoAnimate.interpolate({
                            inputRange: [0, 1],
                            outputRange: [80, 0],
                        }),
                    }}>
                    <Image source={Logo} />

                    {this.state.loadingSpinner ? (
                        <ActivityIndicator
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            size="large"
                            color="#5257f2"
                        />
                    ) : null}
                </Animated.View>
                <Animated.View style={{opacity: this.state.LogoText}}>
                    <Text style={styles.logoText}> LogoText </Text>
                </Animated.View>
            </View>
        );
    }
}

export default LoadingScene;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoText: {
        color: '#FFFFFF',
        fontFamily: 'GoogleSans-Bold',
        fontSize: 30,
        marginTop: 29.1,
        fontWeight: '300',
    },
});
