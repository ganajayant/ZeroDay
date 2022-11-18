import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Chats() {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>She Slide into my DM's</Text>
            </ScrollView>
        </SafeAreaView>
    )
}
