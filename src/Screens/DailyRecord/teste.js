import React, { useState } from "react";
import { FlatList, SafeAreaView, TextInput, View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import Activities from "./ModalHumorDaily/MainModal/Activities";
import Exit from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
const DATA = [
  {
    id: "1",
    title: "RADIANTE",
    img:require('../../assets/humores/radiant.png')
  },
  {
    id: "2",
    title: "FELIZ",
    img:require('../../assets/humores/happy.png')
  },
  {
    id: "3",
    title: "OK",
    img:require('../../assets/humores/ok.png')
  },
  {
    id: "4",
    title: "TRISTE",
    img:require('../../assets/humores/sad.png')
  },
  {
    id: "5",
    title: "ACABADO",
    img:require('../../assets/humores/terrible.png')
  },
  
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  
  <View>
   
   
   <View style={styles.containerIcon}>
    
    <View style={[styles.item, backgroundColor]}>
        <TouchableOpacity onPress={onPress} >
        
                <Image source={item.img} style={{width:55, height:55}}/>
        
        </TouchableOpacity>
           
    </View> 
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </View>
  
  </View>
);

const Teste = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    
    const backgroundColor = item.id === selectedId ? "#304FFE" : "white";
    const color = item.id === selectedId ?  '#C801FA':'#969696' ;
 
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
  <ScrollView>
    <SafeAreaView style={styles.container}>  
 
    {/* <TouchableOpacity
        style={styles.styleBtn}
        //onPress={() => {
          //navigation.navigate('DataList')
       // }}>
       >
        <Exit name='x' size={20} color={'#969696'} />
      </TouchableOpacity> */}
        
        <View style={styles.TitleStyle}>
           <Text style={styles.txtTitleTop}>Como você está?</Text>
       </View>

       <View style={styles.timeAnDateView}>
           
             <Text style={styles.date}>
                 <AntDesign name="calendar" size={15} color={'#969696'}/>  HOJE 23 DE JANEIRO
             </Text>

             <Text style={styles.time}>
                 <AntDesign name='clockcircleo' size={15} color={'#969696'} /> 08:35   
             </Text>
       
        </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item) => item.id}
        extraData={selectedId} 
      />
        <View style={styles.activitiesArea}>
            <Activities/>
        </View>
            <KeyboardAvoidingView 
          
            style={styles.CommentUser}>
            <ScrollView style={{width:'100%'}}>
                <TextInput
                    
                    placeholder="Escreva aqui o que aconteceu hoje... ">
                
                 </TextInput>
            </ScrollView>
       </KeyboardAvoidingView>

       <TouchableOpacity 
                 onPress={() => navigation.navigate('ProfileScreee')}
                style={styles.btnSave}
                >
                    <Text style={styles.btnSaveText}>SALVAR</Text>
        </TouchableOpacity>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
  },
  styleBtn:{
    width: 40,
    height:40,
    borderRadius: 10,
    backgroundColor: '#C6CEFF',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight:19.5,
    marginRight:350,
    marginTop:70
    
  },
  TitleStyle:{
    marginTop:80,
    marginBottom:90,
    alignItems:'center'
  },
  txtTitleTop:{
    fontSize:37,
    color:'black',
    fontWeight:'bold'
  },
  timeAnDateView:{
    alignItems:'center',
    marginVertical:-80,
    flexDirection:'row',
    marginBottom:70,
    justifyContent:'space-between',
    width:'50%'
  },
  time: {
    color: '#969696'
  },
  date: {
    color: '#969696'
  },
  containerIcon: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    alignItems:'center',
    padding:7, 

  },
  item: {
   backgroundColor:'white',
   width:65,
   height:65,
   borderRadius:60,
   justifyContent:'center',
   alignItems:'center'
  },
  title: {
    fontSize: 15,
    fontWeight:'bold',
  
  },
  activitiesArea:{
    width:'90%',
    height:600,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    borderWidth:1,
    borderColor:'black',
    marginBottom:25,
    marginTop:60,
    padding:5,

  },
  CommentUser:{
      borderColor:'black',
      borderWidth:1,
      borderRadius:20,
      width:'90%',
      height:100,
      marginBottom:10,
      padding:10
  },
   btnSave:{
       width:'90%',
       backgroundColor:'#304FFE',
       padding:17,
       margin:25,
       borderRadius:3,
       alignItems:'center',
       marginBottom:100,
   },
   btnSaveText:{
    color:'white',
    fontSize:15,
    fontWeight:'bold'
}
 
});

export default Teste;