import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import './style.js'
import homeStyles from './style.js'
import { FakeActivities } from '../../data/activity.js'
import ActivityItem from '../../components/ActivityItem/index.js'
import { fakesSymptomes } from '../../data/symptom.js'
import SymptomItem from '../../components/SymptomItem/index.js'
import { fakeDoctors } from '../../data/doctor.js'

const Home = () => {
  return (
    <ScrollView>
      {/* Header */}
      <View style={homeStyles.header}>
        <Text style={homeStyles.userName}>John Doe</Text>
        <Image 
        source={require('./../../assets/images/me.jpg')} 
        style={homeStyles.userImg} />
      </View>

      {/* Liste des activites */}
      <FlatList 
        data={FakeActivities} 
        keyExtractor={item => item.id} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={homeStyles.scrollableList}
        renderItem={({item}) => {
          return (
            <ActivityItem item={item} />
          )
        }} 
      />

      {/* Liste des symptomes */}
      <View style={homeStyles.title}>
        <Text style={homeStyles.titleBold}>Quel symptôme avez-vous ?</Text>
      </View>

      <FlatList 
        data={fakesSymptomes} 
        keyExtractor={item => item.id} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={homeStyles.scrollableList}
        renderItem={({item}) => {
          return (
            <SymptomItem item={item} />
          )
        }} 
      />

      {/* Liste des docteurs */}
      <View style={homeStyles.title_space_between}>
        <Text style={homeStyles.titleBold}>Nos docteurs</Text>
        <TouchableOpacity>
          <Text style={homeStyles.link}>Afficher tout</Text>
        </TouchableOpacity>
      </View>

      <View style={homeStyles.doctorsContainer}>
        {
          fakeDoctors.map((doctor) => {
            return (
              <TouchableOpacity key={doctor.id} style={homeStyles.doctorCard}>
                <Image 
                  source={{ uri: `${doctor.img}`}}
                  style={homeStyles.doctorImg} 
                />
                <View style={homeStyles.doctorInfo}>
                  <Text style={homeStyles.doctorName}>{doctor.fullname}</Text>
                  <Text style={homeStyles.doctorSpeciality}>{doctor.speciality}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
    </ScrollView>
  )
}

export default Home