import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Banner } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TextInput, Button} from 'react-native-paper';


const DataTps = () => {
 
  return (
    <SafeAreaView>
        <View style={style.header}>
            <Text style={{fontSize:25, fontWeight:"bold"}}>Data TPS</Text>
        </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header:{
    height:hp(13), 
    width:wp(100), 
    backgroundColor:'#B22222',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    alignItems:"center", 
    justifyContent:"center"
  },
})

export default DataTps;