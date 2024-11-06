import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import pfp from '../Assets/pfp.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="Inbox"
        options={{
          headerTitle: '',
          headerLeft: () => (
            <View className='flex-row items-center'>
              <TouchableOpacity onPress={() => router.back()}>
                <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
              </TouchableOpacity>
              <Image
                source={pfp}
                className='w-10 h-10 rounded-full ml-5'

              />
              <Text className='ml-2 text-lg font-bold'>Chat Name</Text>
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', paddingRight: 10 }}>
              {/* Call  */}
              <TouchableOpacity onPress={() => alert('Call')}>
                <MaterialCommunityIcons name="phone" size={24} color="#000" style={{ marginHorizontal: 10 }} />
              </TouchableOpacity>

              {/* Video Call  */}
              <TouchableOpacity onPress={() => alert('Video Call')}>
                <MaterialCommunityIcons name="video" size={24} color="#000" style={{ marginHorizontal: 10 }} />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: { backgroundColor: '#f8f8f8' },
        }}
      />
    </Stack>
  );
};

export default _layout;
