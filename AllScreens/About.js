import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Button } from 'react-native'

const About = () => {

  const navigation = useNavigation()
  const goBack = () => {
navigation.navigate('Home')
  }

  return (
    <View>
      <Text>This is About</Text>
      <Button title='Go to About' onPress={goBack} />
    </View>
  )
}

export default About
