import React from 'react';
import {View, Text, Image,SafeAreaView} from 'react-native';
import styleRecord from './StyleRecord';

export default function Record(){

    return(
      
      <SafeAreaView style={styleRecord.container}>
           
            
          <View style={styleRecord.areaInfo}>
            <View style={styleRecord.imgLogoNeutral}>
             <Image source={require('../../assets/neutral.png')}/>
           </View>
          <Text style={styleRecord.txt}>
           Você ainda não tem nenhum registro
           diário. Para começar, toque no ícone de
           adicionar na tela.
          </Text>
          </View>
      </SafeAreaView>
  
 
)}
