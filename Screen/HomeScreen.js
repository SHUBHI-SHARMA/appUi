import React, {useState} from 'react';
import { Searchbar } from 'react-native-paper';
import {
    StyleSheet,
    TextInput,
    View,
    Image,
    KeyboardAvoidingView,
    Keyboard,
    Button,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Dimensions,
    Text ,
    LogBox                                                   
  } from 'react-native';
  import { Col, Row, Grid } from "react-native-easy-grid";
  import Icon from 'react-native-vector-icons/FontAwesome';
  import CircleButton from 'react-native-circle-button';
  import Feather from 'react-native-vector-icons/Feather';
  import ActionButton from 'react-native-circular-action-menu';
  import * as Animatable from 'react-native-animatable';

 



  const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const [animatePress, setAnimatePress] = useState();

  LogBox.ignoreLogs(['Animated: `useNativeDriver`']);



  return (
    <View style={styles.main}>
    <Animatable.View 
            animation="bounceIn"
            style={styles.footer}
        >
    <Text style={{top:50,color:'black',fontWeight:'bold',fontSize:25,paddingLeft:17}}>Rizky Lancelot</Text>

    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.search}
    />

 <View style={styles.space}>
 <View style={styles.logo_file}>
 <Feather
     name="file-text"
     color="white"
    size={45}
 />
 </View>
<Text style={styles.text_space}>
    Available Space
</Text>
<Text style={styles.text_body}>
    0.00 GB Used of 20 GB
</Text>
   </View>
   <View style={styles.space2}></View>
   </Animatable.View>
   <View style={{flex:1}}>
   <Animatable.View 
            animation="bounceIn"
            style={styles.footer}
        >
    <Text style={{top:58,color:'black',paddingLeft:17, fontWeight:'bold', fontSize:21, fontFamily:'Roboto', textShadowColor:'grey', textShadowRadius:3}}>
Categories
    </Text>
    </Animatable.View>
    <Grid style={styles.after_space}>
        <Row style={styles.row1}>
            <Col style={{paddingLeft:25}}>
            <View style={styles.column}>
            {/* <Feather
                    name="file"
                    color="#00b3ff"
                    size={56}
                /> */}
            <Image
                source={require("./docum.png")}
                style={{height:70,width:70,marginTop:-5}}
            />
                </View>
                <Text style={{color:'#808080', fontWeight:'bold', textAlign:'center',paddingRight:21,top:4}}>
                Document</Text>
            </Col>
            
            <Col>
            <View style={styles.column}>
            {/* <Icon
                    name="image"
                    color="#05e395"
                    size={56}
                /> */}
                <Image
                source={require("./image.png")}
                style={{height:70,width:70,marginTop:-9}}
            />
                </View>
                <Text style={{color:'#808080', fontWeight:'bold', textAlign:'center',paddingRight:29,top:4}}>Images</Text>
            </Col>
            <Col style={{paddingRight:10}}>
            <View style={styles.column}>
            {/* <Feather
                    name="file"
                    color="#00b3ff"
                    size={56}
                /> */}
            <Image
                source={require("./extras.png")}
                style={{height:70,width:70,marginTop:-5}}
            />
                </View>
                <Text style={{color:'#808080', fontWeight:'bold', textAlign:'center',paddingRight:21,top:4}}>
                Extras</Text>
            </Col>
        </Row>
        <Row style={styles.row2}>
            <Col style={{paddingLeft:25}}>
            <View style={styles.column}>
            {/* <Feather
            
                    name="pause-circle"
                    color="red"
                    size={56}
                /> */}
                <Image
                source={require("./audio.png")}
                style={{height:50,width:50}}
            />
                </View>
                <Text style={{color:'#808080', fontWeight:'bold', textAlign:'center',paddingRight:25,top:4}}>Audio</Text>
            </Col>
            <Col>
            <View style={styles.column}>
            {/* <Feather
            
                    name="pause-circle"
                    color="red"
                    size={56}
                /> */}
                <Image
                source={require("./apk.png")}
                style={{height:70,width:70,top:-9}}
            />
                </View>
                <Text style={{color:'#808080', fontWeight:'bold', textAlign:'center',paddingRight:25,top:4}}>APK</Text>
            </Col>
            <Col>
            <View style={styles.column}>
            {/* <Feather
                    name="video"
                    color="#00b3ff"
                    size={56}
                /> */}
                <Image
                source={require("./videoi.png")}
                style={{height:100,width:90,marginTop:-25}}
            />
                </View>
                <Text style={{color:'#808080', fontWeight:'bold', textAlign:'center',fontSize:16,paddingRight:25,top:4}}>Video</Text>
            </Col>
            
        </Row>
    </Grid>
     </View>
     
     <Animatable.View 
            animation="fadeInUpBig"
           
        >
        <Text style={{top:-55,color:'black',paddingLeft:20,fontWeight:'bold', fontSize:20, fontFamily:'Roboto', textShadowColor:'grey', textShadowRadius:3}}>
Recent Files
    </Text>
    
     
    <View style={styles.recent}>
        <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>
            My first.png
        </Text>
    </View>
  
    </Animatable.View>
    {/* <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        > */}
        {/* <Animatable.ScrollView
  scrollEventThrottle={1}
  onScroll={Animatable.event(
    [{ nativeEvent: { contentOffset: { y: this.state.animatedValue } } }],
    { useNativeDriver: true } // Add this line
  )}
> */}

    

     <View style={{top:-155,alignItems:'flex-end',paddingRight:28}}>
     
     <CircleButton 
     style={{elevation:50}}
     size={70} 
     primaryColor='#00b3ff'
     secondaryColor='#ffffff00'
     iconButtonTop={require("./image.png")}
     iconButtonBottom={require("./docum.png")}
     iconButtonRight={require("./audio.png")}
     iconButtonLeft={require("./videoi.png")}
     />
     </View>

     {/* </Animatable.ScrollView> */}

     {/* </Animatable.View> */}
 </View>
  );
};

  
export default HomeScreen;
const {height} = Dimensions.get("screen");
const height_logo = height * 0.03;
const styles = StyleSheet.create({
main:{
flex:1,
paddingLeft:10,
paddingRight:10,
},
search:{
    top:70,
    marginLeft:17,
    marginRight:17,
    borderColor:"#00b3ff"
  },
  row1:{
 top:20,
 alignContent:'center',
 justifyContent:'center'
  },
  row2:{
    top:-58,
    alignContent:'center',
    justifyContent:'center',
    paddingRight:10
     },
  column:{
backgroundColor:'#c9e5ee',
paddingTop:20,
borderRadius:20,
width:100,
height:90,
alignItems:'center'

},
column2:{
    backgroundColor:'#c9e5ee',
    paddingTop:-12,
    borderRadius:20,
    width:93,
    height:90,
    
    },

    recent:{
        backgroundColor:"#00b3ff",
        alignContent:"center",
        height:90,
        width:350,
        paddingLeft:20,
        marginLeft:20,
        marginRight:10,
        borderRadius:10,
        opacity:0.2,
        top:-50
    },

space2:{
    marginTop:-120,
    backgroundColor:"#00b3ff",
    alignContent:"center",
    height:144,
    width:340,
    paddingLeft:30,
    marginLeft:25,
    marginRight:17,
    borderRadius:10,
    opacity:0.2,
    top:40
},
  space:{
      marginTop:40,
      top:50,
      backgroundColor:"#00b3ff",
      alignContent:"center",
      height:130,
      marginLeft:17,
      marginRight:17,
      borderRadius:12,
      elevation:8
//       shadowColor: "#000",
// shadowOffset: {
// 	width: 1,
// 	height: 20,
// },
// shadowOpacity: 2,
// shadowRadius: 20,
// elevation: 104,
// shadowColor: "black",
//     shadowOffset: { width: 5, height: 10 },
//     shadowRadius: 40,
//     shadowOpacity: 1,
//     elevation: 65,
    },
  text_space:{
    color: 'white',
    fontSize: 20,
    fontWeight:'bold',
    textAlign:'center',
    height:90,
    padding:10,
    top:-34,
    textAlign:'right',
    paddingRight:100,
    textShadowRadius:4,
    textShadowColor:"white",

},
text_body:{
    color: 'white',
    fontSize: 12,
    fontWeight:'bold',
    textAlign:'center',
    height:90,
    padding:10,
    top:-83,
    textAlign:'right',
    paddingRight:110

},
  logo_file:{
      top:40,
      paddingLeft:24,
      alignContent:"center"
  },
  after_space:{
      top:50,
  },
  
});