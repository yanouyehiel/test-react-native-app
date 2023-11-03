import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import { fakeSettings } from '../../data/settings'
import SettingItem from '../../components/SettingItem'

const Settings = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image 
          style={styles.image} 
          source={require('../../assets/images/me.jpg')} 
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Sarah Doe</Text>
          <Text style={styles.userEmail}>sarahdoe@gmail.com</Text>
          <Text>+237 695707732</Text>
        </View>
      </View>

      <FlatList
        data={fakeSettings}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <SettingItem item={item} />
        }}
      />
    </View>
  )
}

export default Settings