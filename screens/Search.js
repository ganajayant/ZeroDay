// Write a simle search screen

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { color } from 'react-native-reanimated';

// Using functional components

const Search = () => {
    const [state, setState] = useState({
        search: '',
        data: []
    })
    const onChangeSearch = search => {
        setState({ ...state, search })
    }
    const onSearch = () => {
        // Search logic
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor={'grey'}
                    value={state.search}
                    onChangeText={onChangeSearch}
                />
                <TouchableOpacity style={styles.searchButton} onPress={onSearch}>
                    <Ionicons name="search" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={state.data}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 3
    },
    searchContainer: {
        marginTop: 10,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 80,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        borderColor: 'grey',
        borderWidth: 2,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    searchInput: {
        flex: 1,
        fontSize: 18,
        padding: 10,
        color: 'white'
    },
    searchButton: {
        padding: 10,
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    itemText: {
        fontSize: 18
    }
})

export default Search;
