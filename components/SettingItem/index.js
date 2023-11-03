import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../../utils/constantes'
import styles from './style'

const SettingItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{item.libelle}</Text>
      <AntDesign name='arrowright' size={20} color={COLORS.main}  />
    </TouchableOpacity>
  )
}

export default SettingItem