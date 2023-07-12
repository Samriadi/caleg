import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Banner } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TextInput, Button} from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const HandleSubmit = async () => {
    const data ={email,password};

    if (email && password) {
        await axios
        .post(`https://caleg-api.fihaa-app.com/login`, data)
        .then(async res =>{
          console.log(res.data.data.token)
          await AsyncStorage.setItem("token", res.data.data.token);
          navigation.replace("MainScreen");
        })
       
        // fetch("https://caleg-api.fihaa-app.com/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //         password: password,
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then(async (res) => {
        //         if (res.message == "Success") {
        //             await AsyncStorage.setItem("token", res.data.token);
        //             navigation.navigate("MainScreen");
        //         } else {
        //             alert('Data tidak ditemukan');
        //         }
        //     }),
            // [];
    }
  }

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
                  onChangeText={(email) => setEmail(email)}
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
                  <Button mode="contained" theme={{colors: {primary: '#B22222'}}} onPress={HandleSubmit}
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