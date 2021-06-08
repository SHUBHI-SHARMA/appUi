// import React, {Component} from "react";
// import { TouchableOpacity,Image, StyleSheet, View,Text, ImageBackground } from "react-native";
// import { Button } from "react-native-elements";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import LoginScreen from './LoginScreen';











// const getStarted = () => (
//   <View style={styles.container}>
//     <ImageBackground source={require('./ii.gif')} 
//     style={{width: '90%', resizeMode: 'contain', margin: 30}}
// >
// <Image
//     source={require('./log.png')}
//     style={{width: '60%', resizeMode: 'contain', margin: 30}}
// />
// <TouchableOpacity style={styles.appButtonContainer}>
//     <Text style={styles.appButtonText}>Get Started
//     <Icon
//       name="arrow-right"
//       size={15}
//       color="white"
//     />
//     </Text>
//   </TouchableOpacity>
//   </ImageBackground>
//   </View>
// );




// const styles = StyleSheet.create({
//   container:{
//       backgroundColor:"#00b3ff"
//   },
//   appButtonContainer: {
   
//     backgroundColor: "#00b3ff",
//     padding: 20,
//     borderRadius: 10
    
//   },
//   appButtonText: {
//     fontSize: 18,
//     color: "white",
//     fontWeight: "bold",
//     alignSelf: "center",
//     textTransform: "uppercase"
//   }
// });

// export default getStarted;

import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import SignUpScreen from './SignUpScreen';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View >
       <View style={styles.footer}>

       <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="2000"
            source={require('./log.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
            <Text style={styles.title}>Store Your Files Faster and Easily In One Place !</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                <LinearGradient
                    colors={['#05e395', '#00b3ff']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </View>

</View>
<Image source={require('./img.png')} 
    style={{top:-820,left:-40,height:Dimensions.get("screen").height/1.7,width:Dimensions.get("screen").width+100}}/>           
    <StatusBar backgroundColor='#00b3ff' barStyle="light-content" translucent={true}/>
       
       
           
       
      </View>
    
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.14;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#00b3ff'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      backgroundColor: '#00b3ff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      height:790,
      width:410,
      bottom:-400
  },
  logo: {
      top:-160,
      width: (height_logo*1.7)*1.3,
      height: height_logo*1.0
  },
  title: {
      color: 'white',
      fontSize: 25,
      top:-110,
      fontWeight:'bold',
      textAlign:'center',
  },
  text: {
      color: 'white',
      textAlign:'center',
      fontSize:15,
      fontFamily: 'sans-serif-thin',
      top:-135
      },
  button: {
      alignItems: 'center',
      height:100,
      top:-65
      
  },
  signFooter: {
    width: 350,
    height: 180,
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    marginTop:-180
},
signFooterSub: {
    width: 350,
    height: 180,
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    marginTop:-120
},
  signIn: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7,
      flexDirection: 'row',
      marginTop:-30
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold',
  }
});
