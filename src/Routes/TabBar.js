import * as React from 'react';

import RecordDaily from '../Screens/DailyRecord/Record';
import DailyHumorModal from '../Screens/DailyRecord/teste'
import Cards from '../Screens/Cards/index';
import Profile from '../Screens/Profile/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator();

 export default function TabBar(){
  return(
    <Tab.Navigator initialRouteName='DailyHumorModal'
    screenOptions={{
      tabBarShowLabel:false,
      tabBarStyle:{
        position:'absolute',
        backgroundColor:'#fff',
        height:72,
        
      },
        tabBarActiveTintColor:"#304FFE",
        tabBarInactiveTintColor:'grey',
      
    }}>
      <Tab.Screen 
       options={{
        tabBarIconStyle:{
        margin:15,
        width:40,
        height:32,
        backgroundColor:'#E5E5E5',
        borderRadius:15,
        },
        title: '',
        headerTransparent:true,
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" color={color} size={20}/>
        ),
      }}
      name='cardsRegistration'
      component={Cards}
      />

        <Tab.Screen 
          options={{
              title: '',
              headerTransparent:true,
              headerShown: false,
          tabBarIcon: ({ color, size }) => (
              <AntDesign name="pluscircle" color={'#304FFE'} size={45} />
          ),      
        }} 
          name='DailyHumorModal'
          component={DailyHumorModal}
      />

      <Tab.Screen 
         options={{
            tabBarIconStyle:{
              margin:15,
              width:40,
              height:32,
              backgroundColor:'#E5E5E5',
              borderRadius:15,   
          }, 
            title: '',
            headerTransparent:true,
            headerShown: false,
         tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-ul" color={color} size={20} />
          ),
        }} 
         name='Profile'
         component={Profile}
      />
       
    </Tab.Navigator>
  )
}




