import React,{Component} from 'react';
import {View,ScrollView,Text,TouchableOppacity,StyleSheet,SafeAreaView,Platform,StatusBar,Image,ImageBackground} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class GSLVScreen extends Component{

  render(){
    return(
      <ScrollView style={styles.container}>
      <SafeAreaView style={styles.Safeareastyle}/>
      <ImageBackground style ={styles.ImageStyle}
            source={require('../assets/Moon2.jpg')}>
        <Text style={styles.Title}>
         GSLV-Mk 3-M1/Chandrayaan-2
        </Text>
        <View>
          <Text style ={{marginTop:20,fontSize:20,color:'blue'}}>
           
India’s Geosynchronous Satellite Launch Vehicle, GSLV MkIII-M1, successfully launched Chandrayaan-2 spacecraft on July 22, 2019 into its planned orbit with a perigee (nearest point to Earth) of 169.7 km and an apogee (farthest point to Earth) of 45,475 km. The launch took place from the Second Launch Pad at Satish Dhawan Space Centre SHAR, Sriharikota.

Chandrayaan-2 mission is a highly complex mission, which represents a significant technological leap compared to the previous missions of ISRO. It comprised an Orbiter, Lander and Rover to explore the unexplored South Pole of the Moon. The mission is designed to expand the lunar scientific knowledge through detailed study of topography, seismography, mineral identification and distribution, surface chemical composition, thermo-physical characteristics of top soil and composition of the tenuous lunar atmosphere, leading to a new understanding of the origin and evolution of the Moon.

After the injection of Chandrayaan-2, a series of maneuvers were carried out to raise its orbit and on August 14, 2019, following Trans Lunar Insertion (TLI) maneuver, the spacecraft escaped from orbiting the earth and followed a path that took it to the vicinity of the Moon. On August 20, 2019, Chandrayaan-2 was successfully inserted into lunar orbit. While orbiting the moon in a 100 km lunar polar orbit, on September 02, 2019, Vikram Lander was separated from the Orbiter in preparation for landing. Subsequently, two de-orbit maneuvers were performed on Vikram Lander so as to change its orbit and begin circling the moon in a 100 km x 35 km orbit. Vikram Lander descent was as planned and normal performance was observed upto an altitude of 2.1 km. Subsequently communication from lander to the ground stations was lost.

 

The Orbiter placed in its intended orbit around the Moon will enrich our understanding of the moon’s evolution and mapping of the minerals and water molecules in Polar regions, using its eight state-of-the-art scientific instruments. The Orbiter camera is the highest resolution camera (0.3 m) in any lunar mission so far and will provide high resolution images which will be immensely useful to the global scientific community. The precise launch and mission management has ensured a long life of almost seven years instead of the planned one year.
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
    fontSize:40,
    color:'white',
    fontFamily:'Monaco',
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
    textAlign:'center',
    marginTop: RFValue(15),
  },
  ImageStyle:{
    width:RFValue(350),
    height:RFValue(2500)
  },
  Safeareastyle:{
    marginTop:Platform.OS==='android'?StatusBar.currentHeight:RFValue(40)
  }
})