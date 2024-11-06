import { View, Text, Image } from 'react-native'
import React from 'react'
import search from '../Assets/search.png'
import pfp from '../Assets/pfp.png'


const Header = () => {
  return (
    <View className='flex-row justify-between items-center pt-12 pb-3 px-6'>
      <View className='border border-white rounded-full p-2 w-fit' ><Image className='w-4 h-4'source={search}/></View>      
      <View><Text className='text-white text-xl font-medium'>Home</Text></View>      
      <View><Image source={pfp}/></View>      
    </View>
  )
}

export default Header