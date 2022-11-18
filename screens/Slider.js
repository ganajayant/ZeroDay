import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
);

export const Slider = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: 'black',
                    // image: <Image source={require('../assets/onboarding-img1.png')} />,
                    title: 'Connect with Your ALUMNI',
                    subtitle: 'A New Way To Connect With The Alumni Of Your College',
                },
                {
                    backgroundColor: 'black',
                    // image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Share Your Favorites',
                    subtitle: 'Share Your Thoughts With Similar Kind of People',
                },
                {
                    backgroundColor: 'black',
                    // image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'Become The Star',
                    subtitle: "Let The Spot Light Capture You",
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});