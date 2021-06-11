import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    NativeModules,
    ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Col, Row, Grid } from "react-native-easy-grid";

// const { RNVirgilCrypto } = NativeModules;
// // const IMEI = 
// const SignInScreen = ({navigation}) => {
//     const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
//         db.transaction((trans) => {
//           trans.executeSql(sql, params, (trans, results) => {
//             resolve(results);
            
//           },
//             (error) => {
//               reject(error);
//             });
//         });
//       });
//       const { signIn } = React.useContext(AuthContext);
//       const [id,setid] = React.useState(null);
//       const [loading,setloading] = React.useState(false);
//     const [data, setData] = React.useState({
//         username: '',
//         password: '',
//         confirm_password: '',
//         check_textInputChange: false,
//         secureTextEntry: true,
//         confirm_secureTextEntry: true,
//     });

//     const textInputChange = (val) => {
//         if( val.length !== 0 ) {
//             setData({
//                 ...data,
//                 username: val,
//                 check_textInputChange: true
//             });
//         } else {
//             setData({
//                 ...data,
//                 username: val,
//                 check_textInputChange: false
//             });
//         }
//     }
//     const successdb =()=>{
// 		console.log('successsss............')
// 	}
// 	const faildb =() =>{
// 		console.log('fail')
// 	}
//     React.useEffect(()=>{
//         db = SQLite.openDatabase({
// 			name: 'sqlite',
// 			location: 'default',
// 			createFromLocation: '~sqlite.db'
// 		},
// 		successdb,	
// 		faildb
//         );
//         const fetchid = async() =>{
//             const id = await DeviceInfo.getAndroidId();
//             setid(id);
//         }
//         fetchid();  
//     },[]);
//     const singuphandle = (userName,password) => {
//         // const getImei = async() => {
//         //     const im = await IMEI.getImei();
//         //     setimei(im);
//         // }
//         // getImei();
//         // AsyncStorage.setItem("imei",imei);
//         // var data = new FormData();
//         // console.log(userName);
//         // console.log(password);
//         // data.append("email", userName);
//         // data.append("password", password);
//         // data.append("IMEI",12345);
//         setloading(true);
//         fetch('https://b797588889a05953f5e6bcf741a50f153190b29e381e9a5e8ed11389c.loca.lt/api/register/',{
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
//                 'Content-Type': 'application/json'
//               },
//             body: JSON.stringify({
//                 'email' : userName,
//                 'password' : password,
//                 'IMEI' : id
//             }),
//         }).then((res)=>{
//             res.json().then(resp=>{
//             const keypair = RNVirgilCrypto.generateKeyPair();
//             const mypub = keypair.result.publicKey;
//             const mypri = keypair.result.privateKey;
//             AsyncStorage.setItem('mypub',mypub);
//             AsyncStorage.setItem('mypri',mypri);
//             if(resp.success){
//                 ExecuteQuery("CREATE TABLE IF NOT EXISTS Image_hashes (file_name  varchar(200)  , file_hash varchar(200))").then((resp)=>{
//                     ExecuteQuery("CREATE TABLE IF NOT EXISTS Document_hashes (file_name  varchar(200)  , file_hash varchar(200))").then((resp)=>{
//                         ExecuteQuery("CREATE TABLE IF NOT EXISTS Videos_hashes (file_name  varchar(200)  , file_hash varchar(200))").then((resp)=>{
//                             console.log(resp);
//                     const foundUser = [{
//                         id : id,
//                         username : userName,
//                         password : password,
//                         userToken : id
//                     }];
//                     setloading(false);
//                     signIn(foundUser);
//                 })
//                     })
                    
//                 })
//             }
//             })
//             .catch((error)=>{
//                 console.log(error);
//             })
//         })
//     }
//     const handlePasswordChange = (val) => {
//         setData({
//             ...data,
//             password: val
//         });
//     }

//     const handleConfirmPasswordChange = (val) => {
//         setData({
//             ...data,
//             confirm_password: val
//         });
//     }

//     const updateSecureTextEntry = () => {
//         setData({
//             ...data,
//             secureTextEntry: !data.secureTextEntry
//         });
//     }

//     const updateConfirmSecureTextEntry = () => {
//         setData({
//             ...data,
//             confirm_secureTextEntry: !data.confirm_secureTextEntry
//         });
//     }
const LoginSignup = ({navigation}) => {
    return (
      <View style={styles.container}>
      <ImageBackground source={require("./blue.jpeg")}
      style={{width: '100%', height: '100%'}}>
          <StatusBar backgroundColor='#00b3ff' barStyle="light-content"/>
          {/* <View style={styles.header}>
            <Text style={styles.text_header}>Avatar</Text>
        </View> */}
        
        
           
        <Animatable.Image 
                animation="bounceIn"
                
            source={require('./logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
            <Animatable.View 
            animation="fadeInUpBig"
            duraton="10000"
            style={{flex:1}}
        >
            <Grid style={styles.after_space}>
            <Row style={styles.row1}>
            <Col>
                <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>navigation.navigate('Navbar')}

                >
                <LinearGradient
                    colors={['#05e395', '#00b3ff']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Login</Text>
                </LinearGradient>

                </TouchableOpacity> 
                </View>
</Col>
<Col>
                <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>navigation.navigate('SignUp')}
                >
                <LinearGradient
                    colors={['#05e395', '#00b3ff']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity> 
                </View>
</Col>

            </Row>
            </Grid>
        </Animatable.View>
        </ImageBackground>
      </View>
    );
                }
export default LoginSignup;
const {height} = Dimensions.get("screen");
const height_logo = height * 0.14;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#00b3ff'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 120,
        paddingTop:40
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        paddingHorizontal: 40,
        paddingVertical: 30,
        marginRight:150,
        marginTop:230,
        marginBottom:400
    },
    row1:{
        top:400,
        alignContent:'center',
        justifyContent:'center',
        paddingLeft:20
         },
         row2:{
            top:130,
            alignContent:'center',
            justifyContent:'center',
            paddingLeft:80
             },
    text_header: {
        color: '#00b3ff',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign:'center',
    },
    text_footer: {
        color: '#00b3ff',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#00b3ff',
        paddingBottom: 5
    },
    logo: {
        top:260,
        width: (height_logo*1.7)*1.2,
        height: height_logo*0.9,
        marginLeft:70
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#00b3ff',
    },
    button: {
        alignItems: 'center',
    },
    signIn: {
        width: 150,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        elevation:40,
        fontFamily:'Orbitron-Medium'

    },
    textSign: {
        fontSize: 18,
        fontFamily:'Orbitron-Medium'

    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    after_space:{
        top:-10
    },
  });

