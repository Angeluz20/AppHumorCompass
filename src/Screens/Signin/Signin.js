import React from 'react';
import {View, Text, Image,TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import styleSignin from './styleSignin';


export  function Signin({navigation}){

    return(
    <KeyboardAvoidingView style={styleSignin.fundo}>
    
        <View style={styleSignin.containerInputs}>
          <View style={styleSignin.img}>
            <Image 
             source={require('../../assets/login.png') }style={{width:228,height:228}}//props\
             />
     
         </View>
          <TextInput
          style={styleSignin.input}
          placeholder='e-mail'
          placeholderTextColor={'#969696'}
        
         
          />
           <TextInput
          style={styleSignin.input}
          secureTextEntry={true}
          placeholder="senha"
          placeholderTextColor={'#969696'}
        
          />

          <TouchableOpacity
           style={styleSignin.btnSubmit} 
           onPress={() => navigation.navigate('Registro')}
           >  
          <Text style={styleSignin.submitText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
  </KeyboardAvoidingView>
 
)}

export default Signin;