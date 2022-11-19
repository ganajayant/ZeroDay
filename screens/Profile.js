import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import ViewEdit from './ViewEdit';

// This the the profile view page where the user can view his/her profile
// The user can also edit his/her profile from this page by clicking a button to navigate to the edit page
// User Image is shown on the top along with his details and a button to edit the profile and a logout button
// Refer to the ViewEdit.js file for the edit page

// OnLogout function to logout the user
const onLogout = () => {
    auth().signOut();
}

const Profile = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, padding: 20 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.imageContainer}>
                        <Text style={styles.imageText}>User Image</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsText}>Name: </Text>
                        <Text style={styles.detailsText}>Email: </Text>
                        <Text style={styles.detailsText}>Institute: </Text>
                        <Text style={styles.detailsText}>Department: </Text>
                        <Text style={styles.detailsText}>Year of passing: </Text>
                        <Text style={styles.detailsText}>Current Job: </Text>
                        <Text style={styles.detailsText}>Bio: </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
                            <Text style={styles.buttonText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
                            <Text style={styles.buttonText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    imageText: {
        color: '#fff',
        fontSize: 20
    },
    detailsContainer: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 20
    },
    detailsText: {
        fontSize: 20,
        marginBottom: 10
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    editButton: {
        width: 100,
        height: 50,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    logoutButton: {
        width: 100,
        height: 50,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 20
    }
})

export default Profile;
