import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import './style.js'
import homeStyles from './style.js'

const Home = () => {
  return (
    <ScrollView>
      <View style={homeStyles.header}>
        <Text>John Doe</Text>
        <Image 
        source={require('./../../assets/images/me.jpg')} 
        style={{ width: 150, height: 150}} />
      </View>
    </ScrollView>
  )
}

export default Home