import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const MessageLsit = ({item, navigation}) => {
  return (
    <TouchableOpacity 
        style={styles.messageContainer}
        onPress={() => navigation.navigate('MessageDetails', {item})}
    >
        <Image 
            source={{ 
                uri: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            }} 
            style={styles.messageImg}
        />
        <View style={styles.messageInfo}>
            <View style={styles.date_name}>
                <Text style={styles.name}>{item.fullname}</Text>
                <Text>{dayjs(item.date).fromNow(true)}</Text>
            </View>
            <Text>{item.last_message}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default MessageLsit