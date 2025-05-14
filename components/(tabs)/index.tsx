import { Text, View } from 'react-native';
import { Link } from "expo-router";

export default function Index(){
    return (
        <View className='flex-1 items-center justify-center bg-white'>
            <Text className='text-3xl font-bold text-blue-500'>Hello, Expo!</Text>
            <Text className='text-lg text-gray-700'>this is the addition of text to the app.</Text>
       
        </View>

    );
}