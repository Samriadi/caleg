import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { Banner } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TextInput, Button} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';


const Home = () => {
 
  return (
    <SafeAreaView>
        <View style={{height:hp(10), width:wp(100), backgroundColor:'red',borderBottomLeftRadius:20,borderBottomRightRadius:20,alignItems:"center", justifyContent:"center", marginBottom:10}}>
            <Text style={{fontSize:25, fontWeight:"bold"}}>PEMILU</Text>
        </View>
        <View style={{height:hp(30), width:wp(100), alignItems:"center"}}>
            <View style={{height:hp(10),width:wp(90),  alignItems:"center", flexDirection:"row", justifyContent: "space-around", borderWidth:1, borderRadius:10,borderColor:"red"}}>
                <View style={{height:hp(8),width:wp(16),borderRadius:20, backgroundColor:"red"}}>
                </View>
                <View style={{height:hp(8), width:wp(50)}}>
                    <Text style={{fontSize:20,color:"black"}}>Alifuddin bin muddin</Text>
                    <Text style={{color:"red"}}>Bangkala Barat, Jeneponto</Text>
                </View>
                <View style={{height:hp(8), width:wp(10)}}>
                    <Icon name="chevron-forward" color="red"/>
                </View>

            </View>
        </View>
    </SafeAreaView>
  );
};

export default Home;