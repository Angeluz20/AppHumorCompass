import React,{Component, useState} from "react";
import { FlatList, Text, View,Image,Dimensions, StyleSheet, TouchableOpacity, InteractionManager } from "react-native";
import { Icon } from "react-native-vector-icons/FontAwesome5";

const numColumns = 3
const width = Dimensions.get('window').width
export default class Activities extends Component{
    constructor(props){
        super(props);
        this.state={
            Activities: [
                {
                   
                    id:'1', 
                    img:require('../../../../assets/atividades/cooking.png'), 
                    nome:'Cozinhar',
                    
                    
                },
               {

                    id:'2', 
                    img:require('../../../../assets/atividades/date.png'), 
                    nome:'Encontro'
                
                },
                {
                
                    id:'3', 
                    img:require('../../../../assets/atividades/games.png'), 
                    nome:'Jogos'
                
                },
                {
                
                    id:'4', 
                    img:require('../../../../assets/atividades/good_meal.png'), 
                    nome:'Comer'
                
                },
                {
                
                    id:'5', 
                    img:require('../../../../assets/atividades/movies.png'), 
                    nome:'Filmes e Séries'
                
                },
                {
                
                    id:'6', 
                    img:require('../../../../assets/atividades/party.png'), 
                    nome:'Cozinhar'
                
                },
                {
                
                    id:'7', 
                    img:require('../../../../assets/atividades/rest.png'), 
                    nome:'Cozinhar'
                
                },
                {
                
                    id:'8', 
                    img:require('../../../../assets/atividades/shopping.png'), 
                    nome:'Cozinhar'
                
                },
                {
                
                    id:'9', 
                    img:require('../../../../assets/atividades/sports.png'), 
                    nome:'Cozinhar'
                
                }
            ]
        }
    }
   
    render(){
        let {container, itemText} = styles
        return(
            <View style={styles.container}>
                <FlatList
                  data={this.state.Activities}
                  keyExtractor={(item, index) => index.toString()}
                  
                    numColumns={numColumns} 
                    renderItem={({item})=> <View style={{
                        height:100,
                        width:130,
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop:30,
                        marginBottom:50,
                       
                       }}> 
                                <View style={styles.styleBorderItem}>
                               <TouchableOpacity>
                                      <Image source={item.img} style={{width:50, height:50}}/>
                                      
                                </TouchableOpacity>
                                </View><Text>{item.nome}</Text>
                       
                </View>}                       
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingTop:40,
        padding:20,
        paddingBottom:40,
        justifyContent:'center',
        
       
    },
    styleBorderItem:{
      
        width:80,
        height:80,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:60,
        borderWidth:1,
        borderColor:'black'
    },
  
    itemText:{
        fontSize:15,
        color:'#fff'
    }
})