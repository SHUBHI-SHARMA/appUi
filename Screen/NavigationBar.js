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
    LogBox,
    Modal,
    TouchableHighlight                                                  
  } from 'react-native';
  import { Col, Row, Grid } from "react-native-easy-grid";
  import Icon from 'react-native-vector-icons/FontAwesome';
  import CircleButton from 'react-native-circle-button';
  import Feather from 'react-native-vector-icons/Feather';
  import ActionButton from 'react-native-circular-action-menu';
  import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FloatingAction } from "react-native-floating-action";




function HomeScreen() {


  LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

  const actions = [
    {
      text: "Image",
      icon: require("./image.png"),
      name: "Image",
      position: 2,
      textBackground:"#ffffff00",
      color:"#05e395"
    },
    {
      text: "Video",
      icon: require("./videoi.png"),
      name: "Video",
      position: 1,
      textBackground:"#ffffff00",
      color:"#05e395"
    },
    {
      text: "Document",
      icon: require("./docum.png"),
      name: "Document",
      position: 3,
      textBackground:"#ffffff00",
      color:"#05e395"
    },
    {
      text: "Audio",
      icon: require("./audio.png"),
      name: "Audio",
      position: 4,
      textBackground:"#ffffff00",
      color:"#05e395"
    }
  ];

  return (
    <View style={styles.main}>
    {/* <ImageBackground
    source={require('./bggg2.png')}
    style={{height:'100%',width:'100%'}}
    > */}
    {/* <ImageBackground
    source={require('./bgH.jpeg')}
    style={{height:'100%',width:'100%'}}
    > */}
    <Animatable.View 
            animation="bounceIn"
            style={styles.footer}
        >
    <Text style={{top:50,color:'black',fontWeight:'bold',fontSize:25,paddingLeft:17}}>Rizky Lancelot</Text>

    <Searchbar
      placeholder="Search"
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
        <Text style={{top:160,color:'black',paddingLeft:20,fontWeight:'bold', fontSize:20, fontFamily:'Roboto', textShadowColor:'grey', textShadowRadius:3}}>
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

    

     <View style={{top:20,alignItems:'flex-end',marginRight:27,flex:1}}>
     
     {/* <CircleButton 
     size={70} 
     primaryColor='#00b3ff'
     secondaryColor='#ffffff00'
     iconButtonTop={require("./image.png")}
     iconButtonBottom={require("./docum.png")}
     iconButtonRight={require("./audio.png")}
     iconButtonLeft={require("./videoi.png")}
     /> */}
     
     <FloatingAction
     color={"#00b3ff"}
     shadow={{ shadowOpacity: 1, shadowOffset: { width: 0, height: 15 }, shadowColor: "white", shadowRadius: 20 }}
    showBackground={false}
    overlayColor={'rgb(2,89,58)'}
    actions={actions}
    actionsPaddingTopBottom={2}
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
  />
     </View>
     
     {/* </Animatable.ScrollView> */}

     {/* </Animatable.View> */}
     {/* </ImageBackground> */}
     {/* </ImageBackground> */}
 </View>
  );
}

function SettingsScreen() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ImageBackground 
    source={require('./settings.jpeg')}
    style={{height:'100%',width:'100%'}}
    >
      {/* <Grid>
        <Row>
          <Col>
          <Image 
        source={require('./avatar.png')}
        style={{height:100,width:100}}
      />
          </Col>
          <Col>
          <Image 
        source={require('./avatar.png')}
        style={{height:100,width:100}}
      />
          </Col>
        </Row>
      </Grid> */}
      <View style={{top:45,marginLeft:345}}>
      <Feather
        name='log-out'
        size={50}
        color='#00b3ff'
      />
        <Text style={{fontFamily:'Orbitron-Bold',color:'#00b3ff',fontSize:14}}>Logout</Text>
      </View>
      <Image 
        source={require('./users.png')}
        style={{top:43,height:150,width:150,marginLeft:140}}
      />
      {/* <View style={{top:39,height:150,width:150,marginLeft:140}}>
      <Feather
        name='user'
        size={100}
        color='white'
      />
      </View> */}
<Text style={{top:43,color:'#00b3ff',marginLeft:140,fontFamily:'Orbitron-Bold'}}>UserName</Text>
<Text style={{top:45,color:'#00b3ff',marginLeft:140,fontFamily:'Orbitron-Bold'}}>Gender</Text>
<Text style={{top:50,color:'#00b3ff',marginLeft:140,fontFamily:'Orbitron-Bold'}}>Peer Id:</Text>

<View style={styles.container}>

<Text style={{top:10,fontSize:20,fontFamily:'Orbitron-Bold',color:'white',marginLeft:50,marginTop:10,alignContent:'center'}}>
    Available Space
</Text>
<Text style={{top:55,fontFamily:'Orbitron-Bold',color:'white',marginLeft:50,marginTop:-10,alignContent:'center'}}>
    Purchased Storage
</Text>
<Text style={{top:35,fontFamily:'Orbitron-Regular',color:'white',marginLeft:105,marginTop:25,alignContent:'center'}}>
    0.00 GB
</Text>
<Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          {/*Animation can be slide, slide, none*/}
          <View style={styles.modal}>
            <Text style={styles.text}>Modal is open!</Text>
            <Button
              title="Click To Close Modal"
              onPress={() => {
                setShowModal(!showModal);
              }}
            />
          </View>
        </Modal>
<TouchableOpacity
    style={{
      borderWidth: 1,
      borderColor: '#05e395',
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      position: 'absolute',
      bottom: 10,
      right: 10,
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 80,
      top:80
    }}
    onPress={() => {
            setShowModal(!showModal);
          }}
  >
    <Icon name='plus' size={37} color='#01a699' />
  </TouchableOpacity>
</View>

</ImageBackground>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function NavigationBar() {
  return (
    
      <Tab.Navigator
      activeColor="#00b3ff"
      inactiveColor="grey"
     
      barStyle={{backgroundColor: 'white',
      }}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
          options= {{
                tabBarIcon: ({ color }) => (  
                   
                        <Icon name="home" color={color} size={20}/>  
                   ),  
                activeColor: '#00b3ff',  
                inactiveColor: 'grey',  
                barStyle: { backgroundColor: '#00b3ff' },  
            } }   

        />
        <Tab.Screen name="Settings" component={SettingsScreen} 
           options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <Icon name="cogs" color={color} size={20} />
          ),
          activeColor:'#05e395',
          inactiveColor:'blue',
          barStyle: { backgroundColor: '#00b3ff'}
        }}
        />
      </Tab.Navigator>
  );
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.03;
const styles = StyleSheet.create({
main:{
flex:1,

},
text_space:{
  color: 'black',
  fontSize: 20,
  fontWeight:'bold',
  textAlign:'center',
  height:90,
  padding:10,
  textAlign:'right',
  paddingRight:100,
  textShadowRadius:4,
  textShadowColor:"white",
},
text_body:{
  color: 'black',
  fontSize: 12,
  fontWeight:'bold',
  textAlign:'center',
  height:90,
  padding:10,
  textAlign:'right',
  paddingRight:110

},
modal: {
  margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop:100,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
},
container:{
  top:80,
height:180,
width:320,
backgroundColor:'#05e395',
marginLeft:50,
marginRight:40,
borderBottomLeftRadius:10,
borderBottomRightRadius:10,
borderTopLeftRadius:10,
borderTopRightRadius:10
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
    top:70,
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
alignItems:'center',
opacity:0.8,
elevation:50,
shadowColor:'#00b3ff'

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
        height:80,
        width:350,
        paddingLeft:20,
        marginLeft:20,
        marginRight:10,
        borderRadius:10,
        opacity:0.2,
        top:170
    },

space2:{
    marginTop:-120,
    backgroundColor:"#00b3ff",
    alignContent:"center",
    height:144,
    width:340,
    paddingLeft:30,
    marginLeft:35,
    marginRight:22,
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