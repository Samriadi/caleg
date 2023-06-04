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
        <View style={{height:hp(13), width:wp(100), backgroundColor:'#B22222',borderBottomLeftRadius:20,borderBottomRightRadius:20,alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:25, fontWeight:"bold"}}>LOGIN</Text>
        </View>

         <View style={{alignItems:"center",marginTop:hp(10)}}>
          {/* <Image
                style={{width:wp(40), height:hp(20), alignSelf:"center", marginBottom:10}}
                source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}/> */}

            <View style={{height: hp(35), width:wp(80), justifyContent:"space-around"}}>
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