import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import api from './src/services/Api'
import Routes from "./src/Routes/Routes";

export default function App(){
  return(
  <NavigationContainer>
      <Routes/>
  </NavigationContainer>
 );
}





