import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { fakeChats } from '../../data/chat'
import MessageLsit from '../../components/MessageList'
import styles from './style'

const Messages = ({navigation}) => {
  return (
    <FlatList 
      data={fakeChats} 
      keyExtractor={item => item.id} 
      style={styles.root}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return <MessageLsit item={item} navigation={navigation} />
      }}
    />
  )
}

export default Messages