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
const SignUpScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
      <ImageBackground source={require("./bg2.jpeg")}
      style={{width: '100%', height: '100%'}}>
          <StatusBar backgroundColor='#00b3ff' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Sign Up</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#00b3ff"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="red"
                        size={20}
                    />
                </Animatable.View>
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#00b3ff"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Confirm Password</Text>
 <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#00b3ff"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 20
            }]}>Phone Number</Text>
            <View style={styles.action}>
            <Feather 
                    name="lock"
                    color="#00b3ff"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Phone Number"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="red"
                        size={20}
                    />
                </Animatable.View>
            </View>


                        <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>navigation.navigate('Home')}

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
            </ScrollView>
        </Animatable.View>
        </ImageBackground>
      </View>
    );
                }
export default SignUpScreen;

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
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
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
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#00b3ff',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });
