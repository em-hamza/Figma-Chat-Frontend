import { View, Image, Text } from 'react-native'
import React from 'react'
import pfp from '../Assets/pfp.png'
import { Link } from 'expo-router'

const ChatTitle = () => {
  return (
    <View className='flex-row gap-4 items-center mb-2 pb-2 border-b border-gray-400'>
      <View>
        <Image source={pfp} />
      </View>
      <Link href='Components/Chats/Inbox'>
        <View className='flex-col'>
          <Text className='font-medium text-base tracking-wide'>Chat Name</Text>
          <Text>Recently sent/received message</Text>
        </View>
      </Link>
    </View>
  )
}

export default ChatTitle