import * as React from 'react';
import {Text,ScrollView,StyleSheet,SafeAreaView,Platform,StatusBar,ImageBackground,TouchableOpacity} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class HomeScreen extends React.Component {

    render(){
         return(
             <ScrollView style = {styles.container}>
                <SafeAreaView style={styles.Safeareastyle}/>

                  <ImageBackground style ={styles.ImageStyle}
            source={require('../assets/bg.jpg')}>
             <Text style = {styles.TextTitle1}> 
                     Welcome to                     
                 </Text>
                  <Text style = {styles.TextTitle2}> 
                  Indian space                     
                 </Text>

             <TouchableOpacity style = {styles.ButtonStyle}
              onPress ={()=>{this.props.navigation.navigate('PlanetaryObservation')}}> 
              
                <Text style = {styles.ButtonText}> 
                PlanetaryObservation
                </Text>
             </TouchableOpacity>

             <TouchableOpacity style = {styles.ButtonStyle}
              onPress ={()=>{this.props.navigation.navigate('EarthObservation')}}> 
                <Text style = {styles.ButtonText}> 
                EarthObservation
                </Text>
             </TouchableOpacity>
  
       
             </ImageBackground>
             </ScrollView>    
         )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundcolor:'blue',  
  },
   TextTitle1:{
     flex:1,
     justifyContent:'center',
     color:'white',
     fontWeight:'bold',
     fontSize:RFValue(50),
     fontFamily:'Brush Script MT',
     textAlign:'center'
   },
     TextTitle2:{
     flex:1,
     justifyContent:'center',
     color:'white',
     fontWeight:'bold',
     fontSize:RFValue(40),
     fontFamily:'Brush Script MT',
     textAlign:'center',
     marginBottom:RFValue(400)
   },
  
  ImageStyle:{
   
    height:'100%',
  },
  ButtonText:{
    fontSize:RFValue(20),
    fontWeight:'bold',
    color:'blue',
  },
  ButtonStyle:{
    width:RFValue(220),
    height:RFValue(50),
    bottom:RFValue(350),
    right:RFValue(-60),
    marginTop:RFValue(50),
    backgroundColor:'yellow',
    borderRadius:RFValue(15),
    alignItems:'center',
    justifyContent:'center',
    fontStyle:'times',
  },
   Safeareastyle:{
    marginTop:Platform.OS==='android'?StatusBar.currentHeight:RFValue(40)
  }
})