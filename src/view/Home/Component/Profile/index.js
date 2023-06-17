import {View, Image, Text, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../../../Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {COLOR} from '../../../../styles/color';
import {Button} from 'react-native-paper';

export default function Profile({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: wp(100),
          height: wp(30),
          backgroundColor: COLOR.PRIMARY,
          flexDirection: 'row',
          alignItems: 'flex-end',
          paddingLeft: wp(10),
          paddingBottom: wp(4),
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color={COLOR.WHITE} size={wp(8)} />
        </TouchableOpacity>

        <Text
          style={{fontSize: wp(4.5), fontWeight: 'bold', marginLeft: wp(5)}}>
          Anugerah Alief Riadi
        </Text>
      </View>
      <View
        style={{
          width: wp(100),
          height: wp(40),
          backgroundColor: COLOR.PRIMARY,
          borderTopWidth: wp(0.5),
          borderColor: COLOR.BLACK,
        }}></View>
      <View
        style={{
          width: wp(100),
          height: wp(150),
          backgroundColor: COLOR.WHITE,
          borderColor: COLOR.BLACK,
        }}>
        <Image
          style={{
            width: wp(50),
            height: hp(25),
            alignSelf: 'center',
            bottom: wp(25),
          }}
          source={{
            uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
          }}
        />
        <View
          style={{
            width: wp(90),
            height: wp(10),
            bottom: wp(15),
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: wp(4), color: COLOR.BLACK}}>Nama :</Text>
          <Text style={{fontSize: wp(4), color: COLOR.BLACK}}>
            Anugerah Alief Riadi
          </Text>
        </View>
        <View
          style={{
            width: wp(90),
            height: wp(10),
            bottom: wp(15),
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: wp(4), color: COLOR.BLACK}}>
            No Telepon :
          </Text>
          <Text style={{fontSize: wp(4), color: COLOR.BLACK}}>
            082250332000
          </Text>
        </View>
        <View
          style={{
            width: wp(90),
            height: wp(10),
            bottom: wp(15),
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: wp(4), color: COLOR.BLACK}}>
            Jenis Kelamin :
          </Text>
          <Text style={{fontSize: wp(4), color: COLOR.BLACK}}>Waria</Text>
        </View>
        <View
          style={{
            width: wp(90),
            height: wp(10),
            bottom: wp(15),
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: wp(4), color: COLOR.BLACK}}>Alamat :</Text>
          <Text style={{fontSize: wp(4), color: COLOR.BLACK}}>
            BTN Antara Blok A1 No. 2
          </Text>
        </View>
      </View>
    </View>
  );
}
