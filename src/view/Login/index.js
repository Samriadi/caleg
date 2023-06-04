import * as React from 'react';
import { View, Image, Text } from 'react-native';
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
        <View style={{height:hp(13), width:wp(100), backgroundColor:'red',borderBottomLeftRadius:20,borderBottomRightRadius:20,alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:25, fontWeight:"bold"}}>LOGIN</Text>
        </View>
         <View style={{alignItems:"center",marginTop:hp(25)}}>
            <View style={{height: hp(35), width:wp(80), justifyContent:"space-around"}}>
            <View style={{height: hp(18), justifyContent:"space-between"}}>
            <View>
                <Text style={{color:'red'}}>Username</Text>
              <TextInput
                onChangeText={username => setUsername(username)}
                underlineColor="transparent"
                theme={{colors: {primary: 'red'}}}
                style={{
                  height: wp(12),
                  borderRadius: wp(2),
                  fontSize: wp(5),
                  borderColor: 'red',
                  backgroundColor: '#fff',
                }}
              />
                </View>
            <View>
            <Text style={{color:'red'}}>Password</Text>
              <TextInput
                onChangeText={password => setPassword(password)}
                underlineColor="transparent"
                theme={{colors: {primary: 'red'}}}
                style={{
                  height: wp(12),
                  borderRadius: wp(2),
                  fontSize: wp(5),
                  borderColor: 'red',
                  backgroundColor: '#fff',
                }}
              />
                </View>
                </View>
                <View>
                <Button mode="contained" theme={{colors: {primary: 'red'}}} onPress={() => console.log('Pressed')}
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

export default Login;