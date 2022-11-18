import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';

const Posts = () => {
    const [state, setState] = useState({
        image: null,
        title: '',
        description: ''
    })
    const onChangeTitle = title => {
        setState({ ...state, title })
    }
    const onChangeDescription = description => {
        setState({ ...state, description })
    }

    const onSubmit = async () => {
        try {
            const post = {
                photo: state.image,
                title: state.title,
                description: state.description
            }
            const reference = storage().ref('posts/' + post.photo.fileName);
            console.log(auth().currentUser);
            reference.putFile(post.photo.uri).then(() => {
                reference.getDownloadURL().then((url) => {
                    firestore().collection('posts').add({
                        title: post.title,
                        description: post.description,
                        photo: url,
                        useremail: auth().currentUser.email,
                    }).then(() => {
                        console.log('Post added!');
                    }).catch((e) => {
                        console.log(e);
                    })
                })
            })
            setState({
                image: null,
                title: '',
                description: ''
            })
        } catch (e) {
            console.error(e)
        }
    }

    const selectImage = () => {
        const options = {
            noData: true
        }
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {
                const source = { uri: response.assets[0].uri }
                console.log(source)
                setState({
                    image: source
                })
            }
        })
    }

    return (
        <View style={{ flex: 1, marginTop: 60 }}>
            <View>
                {state.image ? (
                    <Image
                        source={state.image}
                        style={{ width: '100%', height: 300 }}
                    />
                ) : (
                    <Button
                        onPress={selectImage}
                        style={{
                            alignItems: 'center',
                            padding: 10,
                            margin: 30
                        }}
                        title="Select Image"
                    >
                    </Button>
                )}
            </View>
            {/* <Input placeholder='Title' value={state.title} onChangeText={onChangeTitle} /> */}
            <View style={{ marginTop: 80, alignItems: 'center' }}>

                <Text category='h4'>Post Details</Text>
                <TextInput
                    placeholder='Title'
                    value={state.title}
                    onChangeText={onChangeTitle}
                    style={{ width: '80%', height: 40, borderColor: 'gray', borderWidth: 1 }}
                />
                <TextInput
                    placeholder='Description'
                    value={state.description}
                    onChangeText={onChangeDescription}
                    style={{ width: '80%', height: 80, borderColor: 'gray', borderWidth: 1 }}
                />
                <Button status='success' onPress={onSubmit} title="Submit">
                </Button>
            </View>
        </View>
    )
}

export default Posts