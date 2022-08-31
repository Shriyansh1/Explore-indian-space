import React,{Component} from 'react';
import {View,ScrollView,Text,TouchableOppacity,StyleSheet,SafeAreaView,Platform,StatusBar,Image,ImageBackground} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class PSLVScreen extends Component{

  render(){
    return(
      <ScrollView style={styles.container}>
      <SafeAreaView style={styles.Safeareastyle}/>
      <ImageBackground style ={styles.ImageStyle}
            source={require('../assets/pslv-c49.jpg')}>
        <Text style={styles.Title}>
         PSLV-C49
        </Text>
        <View>
          <Text style ={{marginTop:20,fontSize:20,color:'black'}}>
           India’s Polar Satellite Launch Vehicle, in its fifty first flight (PSLV-C49), successfully launched EOS-01 along with nine international customer satellites from Satish Dhawan Space Centre (SDSC) SHAR, Sriharikota on November 07, 2020. PSLV-C49 is the 2nd flight of PSLV in 'DL' configuration (with 2 solid strap-on motors).

PSLV-C49 lifted-off at 1511 Hrs (IST) from the First Launch Pad of SDSC SHAR, Sriharikota . After 15 minutes and 20 seconds, EOS-01 was successfully injected into its orbit. Subsequently, nine commercial satellites were injected into their intended orbits. After separation, the two solar arrays of EOS-01 were deployed automatically and the ISRO Telemetry Tracking and Command Network at Bengaluru assumed control of the satellite. In the coming days, the satellite will be brought to its final operational configuration.

EOS-01 is an earth observation satellite, intended for applications in agriculture, forestry and disaster management support.
          </Text>
        </View>
        </ImageBackground>
      </ScrollView>
    )
  }
}
var styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#0b22a8',
  },
  Title:{
    fontSize:RFValue(40),
    color:'black',
    fontFamily:'Monaco',
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:RFValue(20),
  },
  ImageStyle:{
    width:'100%',
    height:'100%'
  },
   Safeareastyle:{
    marginTop:Platform.OS==='android'?StatusBar.currentHeight:RFValue(40)
  }
})