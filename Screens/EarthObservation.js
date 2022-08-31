import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,SafeAreaView,Platform,StatusBar,Image,ImageBackground} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class EarthObservationScreen extends Component{

  render(){
    return(
      <View style={styles.container}>
      <SafeAreaView style={styles.Safeareastyle}/>

      <ImageBackground style ={styles.ImageStyle}
            source={require('../assets/EarthObservation.jpg')}>
        <Text style={styles.Title}>
        EarthObservation
        </Text>
     
      <TouchableOpacity style = {styles.ButtonStyle}
              onPress ={()=>{this.props.navigation.navigate('PSLV')}}> 
                <Text style = {styles.ButtonText}> 
                PSLV-C49
                </Text>
             </TouchableOpacity>
        </ImageBackground>      
      </View>
    )
  }
}
var styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#29ded4'
  },
  Title:{
    fontSize:RFValue(40),
    color:'green',
    fontFamily:'Monaco',
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:RFValue(20),
  },
   ButtonText:{
    fontSize:RFValue(30),
    fontWeight:'bold',
    color:'red',
   
  },
  ButtonStyle:{
    
    alignItems:'center',
    justifyContent:'center',
   
  },
  ImageStyle:{
    width:'100%',
    height:'100%'
  },
   Safeareastyle:{
    marginTop:Platform.OS==='android'?StatusBar.currentHeight:RFValue(40)
  }
})