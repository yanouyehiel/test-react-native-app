import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { fakeConversations } from '../../data/conversation'
import Message from '../../components/Message'
import MessageInput from '../../components/MessageInput'
import styles from '../Messages/style'

const MessageDetails = ({route, navigation}) => {
    const {item} = route.params

    useEffect(() => {
        navigation.setOptions({title: item.fullname})
    })

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={fakeConversations}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return <Message item={item} />
                }}
            />
            
            <MessageInput />
        </View>
    )
}

export default MessageDetails