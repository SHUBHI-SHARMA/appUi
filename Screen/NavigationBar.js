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
  import { LinearTextGradient } from "react-native-text-gradient";
  import { Col, Row, Grid } from "react-native-easy-grid";
  import Icon from 'react-native-vector-icons/FontAwesome';
  import CircleButton from 'react-native-circle-button';
  import Feather from 'react-native-vector-icons/Feather';
  import ActionButton from 'react-native-circular-action-menu';
  import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FloatingAction } from "react-native-floating-action";
import { FloatButton } from 'react-native-easy-floating-button';
//import HomeScreen from './HomeScreen';


function FileScreen() {


  LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

  let menu = [
    {name : 'Image',image: require("./image.png"), action : ''},
    {name : 'Audio',image: require("./audio.png") , action : ''},
    {name : 'Document',image:require("./docum.png"), action : ''},
    {name : 'Video',image:require("./videoi.png"), action : ''},
];

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
    <ImageBackground
    source={require('./bluee.jpeg')}
    style={{height:'100%',width:'100%'}}
    >
    <Animatable.View 
            animation="bounceIn"
            style={styles.footer}
        >
    <Text style={{top:65,color:'black',fontFamily:'Orbitron-Bold',fontSize:25,paddingLeft:17}}>Rizky Lancelot</Text>

    {/* <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.search}
    /> */}

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
    <Text style={{top:58,color:'black',paddingLeft:17,fontFamily:'Orbitron-Bold', fontSize:21, textShadowColor:'grey', textShadowRadius:3}}>
Categories
    </Text>
    </Animatable.View>
    <Grid style={styles.after_space}>
        <Row style={styles.row1}>
            <Col style={{paddingLeft:25}}>
            <Animatable.View
            animation="bounceIn"
            >
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
                </Animatable.View>
                <Text style={{color:'#808080',fontFamily:'Orbitron-Bold', textAlign:'center',paddingRight:21,top:4}}>
                Document</Text>
            </Col>
            
            <Col>
            <Animatable.View
animation="bounceIn"
>
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
                </Animatable.View>
                <Text style={{color:'#808080',fontFamily:'Orbitron-Bold', textAlign:'center',paddingRight:29,top:4}}>Images</Text>
            </Col>
            <Col style={{paddingRight:10}}>
            <Animatable.View
animation="bounceIn"
>
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
                </Animatable.View>

                <Text style={{color:'#808080',fontFamily:'Orbitron-Bold', textAlign:'center',paddingRight:21,top:4}}>
                Extras</Text>
            </Col>
        </Row>
        <Row style={styles.row2}>
            <Col style={{paddingLeft:25}}>
            <Animatable.View
animation="bounceIn"
>
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
                </Animatable.View>

                <Text style={{color:'#808080',fontFamily:'Orbitron-Bold', textAlign:'center',paddingRight:25,top:4}}>Audio</Text>
            </Col>
            <Col>
            <View style={styles.column}>
            <Animatable.View
animation="bounceIn"
>
            {/* <Feather
            
                    name="pause-circle"
                    color="red"
                    size={56}
                /> */}
                <Image
                source={require("./apk.png")}
                style={{height:70,width:70,top:-9}}
            />
                        </Animatable.View>

                </View>

                <Text style={{color:'#808080',fontFamily:'Orbitron-Bold', textAlign:'center',paddingRight:25,top:4}}>APK</Text>
            </Col>
            <Col>
            <View style={styles.column}>
            <Animatable.View
animation="bounceIn"
>
            {/* <Feather
                    name="video"
                    color="#00b3ff"
                    size={56}
                /> */}
                <Image
                source={require("./videoi.png")}
                style={{height:100,width:90,marginTop:-25}}
            />
                            </Animatable.View>

                </View>

                <Text style={{color:'#808080',fontFamily:'Orbitron-Bold', textAlign:'center',fontSize:16,paddingRight:25,top:4}}>Video</Text>
            </Col>
            
        </Row>
    </Grid>
     </View>
     
     <Animatable.View 
            animation="fadeInUpBig"
           
        >
        <Text style={{top:175,color:'black',paddingLeft:20,fontFamily:'Orbitron-Bold', fontSize:20,textShadowColor:'grey', textShadowRadius:3}}>
Recent Files
    </Text>
    
     
    <View style={styles.recent}>
        <Text style={{fontFamily:'Orbitron-Bold',fontSize:20,color:'black'}}>
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
     
     {/* <FloatingAction
     color={"#00b3ff"}
     shadow={{ shadowOpacity: 1, shadowOffset: { width: 0, height: 15 }, shadowColor: "white", shadowRadius: 20 }}
    showBackground={false}
    overlayColor={'rgb(2,89,58)'}
    actions={actions}
    actionsPaddingTopBottom={2}
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
  /> */}

  <FloatButton
    buttonInitializeLeft={320}
    buttonInitializeTop={50}
    menuOffsetY={-100} 
    menus={menu} 
    menuWidth={350}
    menuHeight={120}
    buttonSize={60}
    buttonImage={require('./add.png')}
    backgroundColor={'#ffffff00'}
    menuBackgroundColor={'#00b3ff'}
    numberOfRow={1}
    numberOfColumn={4}
    menuButtonTextStyle={'Orbitron-Medium'}
  //  menuButtonDeleteImage={require('./cross.png')}
    moveRange={{width : 400,height:400}}
 />
     </View>
     
     {/* </Animatable.ScrollView> */}

     {/* </Animatable.View> */}
     {/* </ImageBackground> */}
     {/* </ImageBackground> */}
     </ImageBackground>
 </View>
  );
}




function SettingsScreen() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ImageBackground 
    source={require('./settingss.jpeg')}
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
      <View style={{top:95,marginLeft:325,paddingRight:10}}>
      <Animatable.View
      animation="bounceIn"
      >
      <Feather
        name='log-out'
        size={50}
        color='#00b3ff'

      />
        <Text style={{fontFamily:'Orbitron-Bold',color:'#00b3ff',fontSize:14}}>Logout</Text>
        </Animatable.View>
      </View>
      <Image 
        source={require('./users.png')}
        style={{top:123,height:100,width:100,marginLeft:170}}
      />
      {/* <View style={{top:39,height:150,width:150,marginLeft:140}}>
      <Feather
        name='user'
        size={100}
        color='white'
      />
      </View> */}
      
<Text style={{top:123,color:'#00b3ff',marginLeft:90,fontFamily:'Orbitron-Bold'}}>UserName :</Text>
<Text style={{top:125,color:'#00b3ff',marginLeft:90,fontFamily:'Orbitron-Bold'}}>Gender :</Text>
<Text style={{top:130,color:'#00b3ff',marginLeft:90,fontFamily:'Orbitron-Bold'}}>Peer Id :</Text>
<Animatable.View
animation="bounceIn"
>
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
</Animatable.View>
<Animatable.View
 animation="fadeInUpBig"
>
<View style={styles.bottom_container}>
<Grid>
  <Row style={{top:65,left:40}}>
    <Col>
      <Text style={styles.bottom_container_text}>Image</Text>
    </Col>
    <Col>
      <Text style={styles.bottom_container_text}>Document</Text>
    </Col>
    </Row>
    <Row style={{top:45,left:60}}>
    <Col>
      <Text style={styles.bottom_container_text}>Audio</Text>
    </Col>
    <Col>
      <Text style={styles.bottom_container_text}>Video</Text>
    </Col>
  </Row>
</Grid>

</View>
</Animatable.View>

</ImageBackground>
    </View>
  );
}


function HomeScreen(){
  return(
    <View style={{flex:1}}>
    <ImageBackground
    source={require('./home2.jpeg')}
    style={{height:'100%',width:'100%'}}>

    <View style={{top:140, left:30}}>
    <Animatable.View
    animation="slideInUp"
    duration={1000}>

<LinearTextGradient
  style={{ fontFamily:'Orbitron-Black', fontSize:25 }}
  locations={[0, 1]}
  colors={["#00b3ff", "#05e395"]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
>
<Text>
 File Manager
 </Text>
</LinearTextGradient>



    {/* <Text style={{, color:'black'}}>File Manager</Text> */}
    <Text style={{top:10,fontFamily:'Orbitron-Medium', fontSize:12, color:'black'}}>Let's Clean and Manage Your Files</Text>
    </Animatable.View>
<Text style={{transform: [{ rotate: '270deg' }],fontFamily:'Orbitron-Medium', fontSize:12, color:'#00b3ff', marginRight:50,top:-100,marginLeft:-310}}>Decentralized Storage</Text>
<Text style={{transform: [{ rotate: '270deg' }],fontFamily:'Orbitron-Medium', fontSize:12, color:'#05e395', marginRight:50,top:20,marginLeft:-310}}>Internal Storage</Text>
<Animatable.View
animation="bounceInLeft"
duration={2000}
>
<View style={styles.home_container}>

</View>
<View style={styles.home_container2}>

</View>
</Animatable.View>
    </View>
    </ImageBackground>
    </View>
  )
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
                   
                        <Icon name="home" color={color} size={25}/>  
                   ),  
                activeColor: '#00b3ff',  
                inactiveColor: 'grey',  
                barStyle: { backgroundColor: '#00b3ff' },  
            } }   

        />


        <Tab.Screen name="Files" component={FileScreen} 
          options= {{
                tabBarIcon: ({ color }) => (  
                   
                        <Icon name="file" color={color} size={22}/>  
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
            <Icon name="cogs" color={color} size={23} />
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

home_container:{
  height:340,
  width:170,
  backgroundColor:'#00b3ff',
 top:20,
 left:140,
 borderRadius:40
},
home_container2:{
  height:340,
  width:150,
  backgroundColor:'#00b3ff',
 top:-329,
 left:172,
 borderBottomRightRadius:40,
 borderTopRightRadius:40,
borderTopLeftRadius:40,
 opacity:0.4
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
  top:140,
height:150,
width:320,
backgroundColor:'#05e395',
marginLeft:50,
marginRight:40,
borderBottomLeftRadius:15,
borderBottomRightRadius:15,
borderTopLeftRadius:15,
borderTopRightRadius:15
},
bottom_container:{
top:140,
height:270,
width:395,
backgroundColor:"#00b3ff",
alignContent:'center',
borderTopLeftRadius:50,
borderTopRightRadius:50,
opacity:0.8,
marginLeft:10,
paddingRight:20
},
bottom_container_text:{
  fontSize:20,
  fontFamily:'Orbitron-Medium',
  color:'white'
},
search:{
    top:70,
    marginLeft:17,
    marginRight:17,
    borderColor:"#00b3ff"
  },
  row1:{
 top:30,
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
      backgroundColor:'#ecf3f9',
      paddingTop:20,
      borderRadius:20,
      width:100,
      height:90,
      alignItems:'center',
      elevation:70,
      borderColor:'#00b3ff',
      borderWidth:0.7
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
        width:370,
        paddingLeft:20,
        marginLeft:20,
        marginRight:10,
        borderRadius:10,
        opacity:0.2,
        top:190,
        borderColor:'white',
        borderWidth:1
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