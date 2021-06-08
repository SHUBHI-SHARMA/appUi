
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Button,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Fumi } from 'react-native-textinput-effects';

import Loader from './Components/Loader';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const image = { uri: "https://media.giphy.com/media/3o752oeUYz6S2SHi5W/giphy.gif" };


 const LoginScreen = (props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userAge) {
      alert('Please fill Age');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      name: userName,
      email: userEmail,
      age: userAge,
      address: userAddress,
      password: userPassword,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://localhost:3000/api/user/register', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          setIsRegistraionSuccess(true);
          console.log(
            'Registration Successful. Please Login to proceed'
          );
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
//   if (isRegistraionSuccess) {
//     return (
//       <View style={styles.container}>
      
//         style={{
//           flex: 1,
//           backgroundColor: '#307ecc',
//           justifyContent: 'center',
//         }}
              



//         <Text style={styles.successTextStyle}>
//           Registration Successful
//         </Text>
//         <TouchableOpacity
//           style={styles.buttonStyle}
//           activeOpacity={0.5}
//           onPress={() => props.navigation.navigate('LoginScreen')}>
//           <Text style={styles.buttonTextStyle}>Login Now</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
  return (
    <View>
    <ImageBackground
  source={image}
  style={{width: '100%', height: '100%'}}> 
<Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
        <Text style={styles.text_header}>Sign Up</Text>

        </View>
        <KeyboardAvoidingView enabled>
        <View style={styles.containerFull}>

{/*         
          <View style={styles.container}>
          <View style={styles.containerGlue}>
    
        <View style={styles.textContainer}>
        <Fumi
    label={'User Name'}
    iconClass={Icon}
    iconName={'user'}
    iconColor={'black'}
    iconSize={25}
  />
        </View>
          </View>
          </View> */}

          <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>User Name</Text>
            <View style={styles.action}>
            <Icon
              name='user'
              color='white'
              size={25}
              width={40}
            />
                <TextInput 
                    placeholder="User Name"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                
                    
                    
            </View>





          <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Password</Text>
            <View style={styles.action}>
            <Icon
              name='unlock-alt'
              color='white'
              size={25}
              width={40}
            />
                <TextInput 
                    placeholder="Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                
                    
                    
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>E-mail</Text>
            <View style={styles.action}>
            <Icon
              name='envelope'
              color='white'
              size={25}
              width={40}
            />
                <TextInput 
                    placeholder="Your E-mail"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                
                    
                    
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25,left:30
            }]}>Age</Text>
            <View style={[styles.action]}>
            <Icon
              name='male'
              color='white'
              size={25}
              width={40}
            />
                <TextInput 
                    placeholder="Your Age"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                
                    
                    
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Address</Text>
            <View style={styles.action}>
            <Icon
              name='address-book'
              color='white'
              size={25}
              width={40}
            />
                <TextInput 
                    placeholder="Your Address"
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                
                    
                    
            </View>


          {/* <View style={styles.container}>
          <View style={styles.containerGlue}>
    
        <View style={styles.textContainer}>
        <Fumi
    label={'Password'}
    iconClass={Icon}
    iconName={'unlock-alt'}
    iconColor={'#00b3ff'}
    iconSize={25}
    iconWidth={40}
    inputPadding={16}
  />
        </View>
          </View>
          </View> */}


{/* 



          <View style={styles.container}>
          <View style={styles.containerGlue}>
    
        <View style={styles.textContainer}>
        <Fumi
    label={'E-mail'}
    iconClass={Icon}
    iconName={'envelope'}
    iconColor={'#00b3ff'}
    iconSize={25}
    iconWidth={40}
    inputPadding={16}
  />
        </View>
          </View>
          </View>
          <View style={styles.container}>
          <View style={styles.containerGlue}>
        <View style={styles.textContainer}>
        <Fumi
    label={'Age'}
    iconClass={Icon}
    iconName={'male'}
    iconColor={'#00b3ff'}
    iconSize={25}
    iconWidth={40}
    inputPadding={16}
  />
        </View>
          </View>
          </View>
          <View style={styles.container}>
          <View style={styles.containerGlue}>
        <View style={styles.textContainer}>
        <Fumi
    label={'Address'}
    iconClass={Icon}
    iconName={'address-book'}
    iconColor={'#00b3ff'}
    iconSize={25}
    iconWidth={40}
    inputPadding={0}
  />
        </View>
          </View>
          </View> */}


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





          {/* {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>Sign Up</Text>
  </TouchableOpacity> */}
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      
      </ImageBackground> 

    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
 
  containerFull:{
    marginTop:50,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  appButtonContainer: {
   
    backgroundColor: "#00b3ff",
    padding: 20,
    borderRadius: 10
    
  },
  textInput: {
    color: 'white',
},
button: {
  alignItems: 'center',
  marginTop: 20,
  paddingLeft:20,
  paddingRight:20
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
text_footer: {
  color: 'white',
  fontSize: 18,
  textAlign:'left',
  paddingLeft:20
},
action: {
  flexDirection: 'row',
  marginTop: 10,
  marginLeft:30,
  marginRight:30,
  borderBottomWidth: 1,
  borderBottomColor: 'white',
  paddingBottom: 0,
  paddingLeft:20,
},
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop:80
},
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  container: {
    margin: 8,
    height: 75,
    width: "95%",
    marginTop: 0,
    borderRadius: 24,
    justifyContent: "center",
    backgroundColor: "black",
  },
  containerGlue: {
    marginLeft: 24,
    marginRight: 24,
    flexDirection: "row",
    },
  textContainer: {
    bottom: 3,
    width: "80%",
    marginLeft: 12,
    color: "blue",
    flexDirection: "column",
    justifyContent: "center",
  },
  iconContainer: {
    width: 35,
    justifyContent: "center",
  },
});