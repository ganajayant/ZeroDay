import auth from '@react-native-firebase/auth';
import { Text, View, TouchableOpacity } from "react-native";

const AppStack = () => {
    return (
        <>
            <Text>AppStack</Text>
            <View>
                <TouchableOpacity onPress={() => {
                    auth().signOut();
                }} >
                    <Text >Logout</Text>
                </TouchableOpacity>
            </View>
        </>

    );
};

export default AppStack;