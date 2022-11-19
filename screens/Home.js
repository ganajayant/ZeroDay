import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from './Cards';
import Search from './Search';


export default function Home() {
    return(
        <View style={{flex: 1 , backgroundColor:"black"}}>
        <SafeAreaView>
            <ScrollView>
                <Search />
                <Card />
            </ScrollView>
        </SafeAreaView>
        </View>
    )
}
