import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'

const Home = () => {
  const navigation = useNavigation()
  const goAbout = () => {
navigation.navigate('About')
  }
  return (
    <View>
      <Text>This is home</Text>
      <Button title='Go to About' onPress={goAbout} />
    </View>
  )
}

export default Home
