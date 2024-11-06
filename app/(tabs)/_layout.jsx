import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons' 

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='Home' options={{
                headerShown: false,
                title: 'Messages',
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name='chat-processing-outline' size={size} color={color} />
                )
            }} />
            <Tabs.Screen name='Calls' options={{
                headerShown: false,
                title: 'Calls',
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name='phone-outline' size={size} color={color} />
                )
            }} />
            <Tabs.Screen name='Contacts' options={{
                headerShown: false,
                title: 'Contacts',
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name='account-circle-outline' size={size} color={color} />
                )
            }} />
            <Tabs.Screen name='Settings' options={{
                headerShown: false,
                title: 'Settings',
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name='cog-outline' size={size} color={color} />
                )
            }} />
        </Tabs>
    )
}

export default _layout