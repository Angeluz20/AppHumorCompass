import React,{Component,useState} from "react";
import { FlatList, Image, StyleSheet, Text,Dimensions, TouchableOpacity, View, ScrollView, TextInput } from "react-native";
import DailyModal from './MainModal/Activities'

const Item = ({item, backgroundColor})=> {
    return(
       
            <View style={{
                
                    height:80,
                    width:80,
                    justifyContent:'center',
                    alignItems:'center'
                   }}>
                    
                   <View style={styles.containerHumor}>
                   
                    <TouchableOpacity onPress={() => alert(item.nome)}>
                        <View style={styles.selectHumorColor}>
                             <Image source={item.img} style={{width:47.17, height:47.17}}/>
                         </View> 
                   </TouchableOpacity> 
                    
                    <Text style={styles.nome}>
                        {item.nome}
                    </Text>
                    </View>
                   </View>
       
    )
}
export default class Select extends Component{
  
    constructor(props){
        super(props);
        this.state = {
             DATA: [
                {
                 id:'1',
                 img: require('../../../assets/humores/radiant.png'),
                 nome:'RADIANTE'
                },
                {
                 id:'2',
                 img: require('../../../assets/humores/happy.png'),
                 nome:'FELIZ'
                },
                {
                 id:'3',
                 img: require('../../../assets/humores/ok.png'),
                 nome:'OK'
                },
                {
                  id:'4',
                  img: require('../../../assets/humores/sad.png'),
                   nome:'TRISTE'
                },
                {
                  id:'5',
                  img: require('../../../assets/humores/terrible.png'),
                   nome:'ACABADO'
                }
            ]
         
        }
    }
   
    
    render(){
    const renderItem = ({item}) => {
        return(
            <Item item={item}/>
        )
            } 
        return(
                      
             <ScrollView>
        <View style={styles.conatainer}>
            <View style={styles.title}>
            <Text style={styles.txtTitle}>Como você está?</Text>
            </View>
              <FlatList
               data={this.state.DATA}
               keyExtractor={(item) => String(item.id)}
               horizontal
               renderItem={renderItem}
       
              />
              
              <View style={styles.iconContainer}>
              <DailyModal/>
             </View>

        <View style={styles.CommentUser}>
            <TextInput
            placeholder="Escreva aqui o que aconteceu hoje... ">
                
            </TextInput>
        </View>
        </View>
        </ScrollView>
    )
}}

const styles = StyleSheet.create({
   conatainer:{
    backgroundColor:'white',
    padding:20,
    alignItems:'center'
   },
    containerHumor:{
      
        justifyContent:'center',
        alignItems:'center'
    },   
    nome:{
        color:'#969696',
        textAlign:'center'
    },
    selectHumorColor:{
        borderRadius:25,
        borderWidth:3,
        borderColor:'grey'
    },
    title:{
        alignItems:'center',
        width:400,
        height:150,
         justifyContent:'center',
    },
    txtTitle:{
        color:'#000',
        fontSize:40,
        fontWeight:'700'
    },
    conatainerSelectIcon:{
        width:'80%',
        height:"400"
    },
    iconContainer:{
        marginTop:60,
        marginBottom:55,
        width:'100%',
        height:600,
        borderColor:'black',
        borderWidth:1,
        borderRadius:7
    },
    CommentUser:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
        width:'100%',
        height:100,
        marginBottom:60,
        padding:10
    }
})