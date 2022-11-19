// Make a react-native card component that can be used in the app inspired from instagram but in blavk
//
// Path: screens\Cards.js

import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image source={require('../assets/profile.jpg')} style={styles.profileImage} />
                <View>
                    <Text style={styles.name}>Sai Vinay</Text>
                    <Text style={styles.time}>2 hours ago</Text>
                </View>
            </View>
            <Image source={require('../assets/post.jpg')} style={styles.postImage} resizeMode="cover" />
            <View style={styles.cardFooter}>
                <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                        <Ionicons name="heart" size={25} color="white" />
                    </View>
                    <View style={styles.socialBarSection2}>
                        <Ionicons name="bookmark-outline" size={25} color="white" />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        marginVertical: 8,
        backgroundColor: "#202020",
        borderRadius: 5,
        marginHorizontal: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    cardHeader: {
        paddingVertical: 9,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: "center",
        borderBottomColor: "#EBECF4",
    },
    profileImage: {
        width: 36,
        height: 36,
        borderRadius: 18,
        overflow: "hidden",
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65",
        marginLeft: 10
    },
    time: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 3,
        marginLeft: 10
    },
    postImage: {
        width: Dimensions.get('window').width - 20,
        height: 250,
        alignSelf: 'center',
    },
    cardFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    socialBarContainer: {
        flexDirection: "row",
        flex: 1,
    },
    socialBarSection: {
        flexDirection: "row",
        flex: 1,
    },
    socialBarSection2: {
        flexDirection: "row",
        alignItems: "flex-end",
        flex: 1,
    },
});