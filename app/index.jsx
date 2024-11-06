import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';
import { styled } from 'nativewind';
import appleLogo from './Components/Assets/Apple-white.png'
import google from './Components/Assets/Google.png'
import facebook from './Components/Assets/facebook.png'
import { TouchableOpacity } from 'react-native'
import { Link, router } from 'expo-router'
const StyledImageBackground = styled(ImageBackground);
const OnBoarding = () => {
  const toSignUpPage = () => {
    router.push('/Screens/SignUp')
  }
  return (

    <View className='bg-black h-full'>
      <StyledImageBackground
        source={require('./Components/Assets/Ellipse.png')}
        className="flex-1 justify-center items-center bg-cover"
      >
        <View className='px-5'>
          <Text className='text-white text-center text-lg tracking-wider font-bold'>Quick Talk</Text>
          <Text className='text-white text-left text-7xl pt-16 mx-auto'>Connect friends <Text className='font-semibold'>easily & quickly</Text> </Text>
          <Text className='text-white text-left text-[16px] px-4 py-10 mx-auto '>Our Chat app is the perfect way to stay connected with friends and family.</Text>
          <View className='flex-row justify-center items-center gap-3'>
            <Link href=''><View className='border border-white rounded-full p-2'><Image source={facebook} /></View></Link>
            <Link href=''><View className='border border-white rounded-full p-2'><Image source={google} /></View></Link>
            <Link href=''><View className='border border-white rounded-full p-2 px-[10px]'><Image source={appleLogo} /></View></Link>
          </View>
          <View className='flex-row items-center justify-center my-10'>
            <View className='border-b border-[#cdd1d0] w-4/12' />
            <Text className='mx-2 text-white text-sm'>OR</Text>
            <View className='border-b border-[#cdd1d0] w-4/12' />
          </View>
          <View className='mx-auto'>
            <TouchableOpacity className='bg-white py-2 px-16 rounded-xl' onPress={toSignUpPage}>
              <Text className='text-sm'>Sign Up With Email</Text>
            </TouchableOpacity>
          </View>
          <View className='flex-row justify-center items-center my-10'><Text className='text-[#b9c1be]'>Existing Account? </Text><Link href='/Screens/Login'><Text className='text-white font-medium'>Login</Text></Link></View>
        </View>
      </StyledImageBackground>
    </View>






  )
}

export default OnBoarding