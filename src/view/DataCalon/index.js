import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const DataCalon = () => {
 
  return (
    <SafeAreaView>
        <View style={{height:hp(13), width:wp(100), backgroundColor:'#B22222',borderBottomLeftRadius:20,borderBottomRightRadius:20,alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:25, fontWeight:"bold"}}>Quick Count</Text>
        </View>
        <View style={style.box}>

          <View style={style.listBox}>
            <View style={style.imageBox}>
            <Image
              style={{width:wp(10), height:hp(5), alignSelf:"center"}}
              source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}/>
            </View>
            <View style={style.nameBox}>
              <Text style={{color:"black", fontSize:20, fontWeight:"bold"}}>Partai A</Text>
            </View>
            <View style={style.iconBox}>
              <Icon name="chevron-forward" size={30} color="#B22222"/>
            </View>
          </View>

          <View style={style.subListBox}>
            <View style={style.subNameBox}>
                <Text style={{color:"black", fontSize:20, fontWeight:"bold"}}>1. Anugerah ALief Riadi</Text>
            </View>
            <View style={style.iconBox}>
              <Icon name="chevron-forward" size={30} color="#B22222"/>
            </View>
          </View>

          <View style={style.subListBox}>
            <View style={style.subNameBox}>
                <Text style={{color:"black", fontSize:20, fontWeight:"bold"}}>1. Anugerah ALief Riadi</Text>
            </View>
            <View style={style.iconBox}>
              <Icon name="chevron-forward" size={30} color="#B22222"/>
            </View>
          </View>

        </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    box:{
      width:wp(90),
      height:hp(30), 
      alignSelf:"center", 
      marginTop:40,
    },
    listBox:{
      width:wp(90), 
      height:hp(9),
      borderWidth:1,
      borderColor:"#B22222", 
      flexDirection:"row",
      justifyContent:"space-around",
      marginBottom:5,
      shadowColor: "#000",
    },
    subListBox:{
      width:wp(85), 
      height:hp(9),
      borderWidth:1,
      borderColor:"#B22222", 
      flexDirection:"row",
      justifyContent:"space-around",
      alignSelf:"flex-end",
      marginBottom:5
    },
    imageBox:{
      width:wp(15), 
      height:hp(9), 
      justifyContent:"center"
    },
    nameBox:{
      width:wp(60), 
      height:hp(9), 
      justifyContent:"center",
    },
    subNameBox:{
      width:wp(68), 
      height:hp(9), 
      justifyContent:"center",
    },
    iconBox:{
      width:wp(10), 
      height:hp(9), 
      alignItems:"flex-end",
      justifyContent:"center"
    }
})

export default DataCalon;