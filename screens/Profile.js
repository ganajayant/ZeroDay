import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

export default function Profile() {
    return(
        <SafeAreaView>
            <ScrollView>
                <Text>Your Profile</Text>
                <TouchableOpacity onPress={() => {
                    auth().signOut();}} >
                    <Text >Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
