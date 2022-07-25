import React,{Component, useState} from "react";
import { FlatList, Text, View,Image,Dimensions, StyleSheet, TouchableOpacity } from "react-native";
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
    _renderItem = ({item, index}) =>{
        return (
          <TouchableOpacity style={styles.itemStyle}>
            <View >  
            
                <Image source={item.img} style={{width:50, height:50}}/>
               
          
          </View> 
          <Text>{item.nome}</Text>
            </TouchableOpacity> 
        )
    }
    render(){
        let {container, itemText} = styles
        return(
            <View style={styles.container}>
                <FlatList
                  data={this.state.Activities}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={this._renderItem}
                    numColumns={numColumns}                
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      
        paddingTop:40,
        padding:20,
        paddingBottom:40,
        justifyContent:'center',
        
       
    },
    itemStyle:{
       
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        margin:1,
        height: 125,
        width:10,
        borderRadius:100,
        borderColor:'black',
        borderWidth:1
    },
    itemText:{
        fontSize:15,
        color:'#fff'
    }
})