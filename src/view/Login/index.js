import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Banner } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TextInput, Button} from 'react-native-paper';


const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SafeAreaView>
        <Image
        source={require('../../../assets/images/Topbar_login.png')}
        style={{width: wp(100),}}
        />
         <View style={{alignItems:"center",marginTop:hp(5)}}>
         <Image
        source={require('../../../assets/images/logo.png')}
        />

            <View style={{height: hp(35), width:wp(80), justifyContent:"space-around", marginTop:hp(5)}}>
              <View style={{height: hp(18), justifyContent:"space-between"}}>
              <View>
                  <Text style={{color:'#B22222'}}>Username</Text>
                <TextInput
                  onChangeText={(username) => setUsername(username)}
                  underlineColor="transparent"
                  theme={{colors: {primary: '#B22222'}}}
                  style={style.inputBox}
                />
                  </View>
              <View>
              <Text style={{color:'#B22222'}}>Password</Text>
                <TextInput
                  onChangeText={(password) => setPassword(password)}
                  underlineColor="transparent"
                  theme={{colors: {primary: '#B22222'}}}
                  style={style.inputBox}
                />
                  </View>
                  </View>
                  <View>
                  <Button mode="contained" theme={{colors: {primary: '#B22222'}}} onPress={() => console.log({username})}
                      style={{borderRadius:10}}
                  >
                      LOGIN
                  </Button>
                  </View>
              </View>
         </View>
    </SafeAreaView>
  );
};


const style = StyleSheet.create({
  inputBox:{
    height: wp(12),
    borderRadius: wp(2),
    fontSize: wp(5),
    borderColor: '#B22222',
    backgroundColor: '#fff',
  }
})

export default Login;