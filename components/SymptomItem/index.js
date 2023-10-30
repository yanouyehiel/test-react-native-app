import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native-svg'
import SVG_MEDECINE from '../../assets/images/svg/undraw_medical_care_movn'
import styles from './style'

const SymptomItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View>
        <SVG_MEDECINE width={50} height={50} />
        <Text style={styles.libelle}>{item.libelle}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SymptomItem