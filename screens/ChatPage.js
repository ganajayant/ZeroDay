//  Build a chat ui between two users with firebase
// theui should have text field and send button
// the ui should have a list of messages

// Path: screens\ChatPage.js
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatsIn = ({ navigation, route }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const user = auth().currentUser;
    useEffect(() => {
        firestore().collection('chats').doc(route.params.uid).collection('messages').orderBy('createdAt', 'desc').onSnapshot((querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push(doc.data());
            });
            setMessages(messages);
        })
    }, [])
    const sendMessage = () => {
        firestore().collection('chats').doc(route.params.uid).collection('messages').add({
            uid: user.uid,
            text: message,
            createdAt: firestore.FieldValue.serverTimestamp(),
        })
        setMessage('');
    }
    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>
            <SafeAreaView>
                <FlatList
                    data={messages}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.chat}>
                                <Image source={{ uri: item.photo }} style={styles.image} />
                                <View style={styles.chatInfo}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.message}>{item.text}</Text>
                                </View>
                            </View>
                        )
                    }}
                    keyExtractor={item => item.uid}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        value={message}
                        onChangeText={setMessage}
                        style={styles.input}
                        placeholder="Type message"
                        placeholderTextColor="grey"
                    />
                    <TouchableOpacity onPress={sendMessage}>
                        <Text style={styles.send}>Send</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    chat: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    chatInfo: {
        marginLeft: 15,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    message: {
        fontSize: 16,
        color: 'white'
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 25
    },
    input: {
        flex: 1,
        height: 40,
        marginLeft: 20
    },
    send: {
        marginRight: 15,
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default ChatsIn;