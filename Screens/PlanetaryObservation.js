import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,SafeAreaView,Platform,StatusBar,ScrollView,ImageBackground} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class PlanetaryObservationScreen extends React.Component{

  render(){
    return(
      <ScrollView style={styles.container}>
      <SafeAreaView style={styles.Safeareastyle}/>
   <ImageBackground style={styles.ImageStyle} source={require('../assets/PlanteryObservation.jpg')}>

        <Text style={styles.Title}>
        Planerary Observation
        </Text>
          
        <View style={styles.container}>
         <TouchableOpacity style = {styles.ButtonStyle}
              onPress ={()=>{this.props.navigation.navigate('GSLV')}}> 
                <Text style = {styles.ButtonText}> 
                Chandrayaan2
                </Text>
             </TouchableOpacity>
            
             </View>
         </ImageBackground>
      </ScrollView>
    )
  }
}
var styles= StyleSheet.create({
  container:{
    flex:1,
  },
  Title:{
    fontSize:RFValue(40),
    color:'green',
    fontFamily:'Monaco',
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:RFValue(100),
  },
    ButtonText:{
    fontSize:RFValue(60),
    fontWeight:'bold',
    color:'red',
  
  },
  ButtonStyle:{
   
  
   
    alignItems:'center',
    justifyContent:'center',
 
  },
  ImageStyle:{
    width:'100%',
    height:'100%',
    flex:1
  },
   Safeareastyle:{
    marginTop:Platform.OS==='android'?StatusBar.currentHeight:RFValue(40)
  }
})