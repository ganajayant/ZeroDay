import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Chats from "../screens/Chats";
import Posts from "../screens/Posts";

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={
            {
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                backgroundColor: 'black'},
                tabBarInactiveTintColor: 'white',
                tabBarActiveTintColor: '#3ad6ab',
            }
        }>
            <Tab.Screen name="Home" component={Home} options={
                {tabBarIcon: ({color, size}) => (
                    <Ionicons name="home" color={color} size={size} />)}
            }/>
            <Tab.Screen name="Chats" component={Chats} options={
                {tabBarIcon: ({color, size}) => (
                    <Ionicons name="chatbox" color={color} size={size} />)}
            }/>
            <Tab.Screen name="Posts" component={Posts} options={
                {tabBarIcon: ({color, size}) => (
                    <Ionicons name="add-circle" color={color} size={size} />)}
            }/>
            <Tab.Screen name="Profile" component={Profile} options={
                {tabBarIcon: ({color, size}) => (
                    <Icons name="user" color={color} size={size} />)}
            } />
        </Tab.Navigator>
    );
}

export default TabNavigator;
