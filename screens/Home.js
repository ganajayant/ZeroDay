import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Home() {
    return(
        <SafeAreaView>
            <ScrollView>
                <Text>Hello</Text>
            </ScrollView>
        </SafeAreaView>
    )
}
