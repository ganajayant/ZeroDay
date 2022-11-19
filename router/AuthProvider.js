import React, { createContext, useState } from 'react';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                googleLogin: async () => {
                    try {
                        await GoogleSignin.hasPlayServices();
                        const userInfo = await GoogleSignin.signIn();
                        console.log(userInfo.idToken);
                        const googleCredential = auth.GoogleAuthProvider.credential(
                            userInfo.idToken,
                        );
                        console.log(userInfo);
                        await auth().signInWithCredential(googleCredential).then(() => {
                            firestore().collection('users').doc(auth().currentUser.uid).get().then((doc) => {
                                if (!doc.exists) {
                                    firestore().collection('users').doc(auth().currentUser.uid).set({
                                        name: auth().currentUser.displayName,
                                        email: auth().currentUser.email,
                                        photo: auth().currentUser.photoURL,
                                    }).then(() => {
                                        console.log('User added!');
                                    }).catch((e) => {
                                        console.log(e);
                                    })
                                }
                            }
                            );
                        })
                            // Use it only when user Sign's up, 
                            // so create different social signup function
                            // .then(() => {
                            //   //Once the user creation has happened successfully, we can add the currentUser into firestore
                            //   //with the appropriate details.
                            //   // console.log('current User', auth().currentUser);
                            //   firestore().collection('users').doc(auth().currentUser.uid)
                            //   .set({
                            //       fname: '',
                            //       lname: '',
                            //       email: auth().currentUser.email,
                            //       createdAt: firestore.Timestamp.fromDate(new Date()),
                            //       userImg: null,
                            //   })
                            //   //ensure we catch any errors at this stage to advise us if something does go wrong
                            //   .catch(error => {
                            //       console.log('Something went wrong with added user to firestore: ', error);
                            //   })
                            // })
                            //we need to catch the whole sign up process if it fails too.
                            .catch(error => {
                                console.log('Something went wrong with sign up: ', error);
                            });
                    } catch (error) {
                        console.log({ error });
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log(e);
                    }
                },
            }
            } >
            {children}
        </AuthContext.Provider >
    );
};


export default AuthProvider;