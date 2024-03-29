import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {COLOR} from '../../styles/color';

const DataCalon = () => {
  const [partai, setPartai] = useState([]);
  const [photoData, setPhotoData] = useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      await AsyncStorage.getItem('token', async (err, token) => {
        if (token) {
          await axios
            .get(`https://caleg-api.fihaa-app.com/partai`, {
              headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
              },
            })
            .then(async res => {
              console.log('Data partai : ', res.data.data);
              setPartai(res.data.data);
              // console.log('Data partai : ', partai);
              if (res.data.data.length > 0) {
                setPhotoData(res.data.data[0].url_logo);
              }
            });
        }
      });
    };
    fetchData().catch(console.error);
  }, []);
  useEffect(() => {
    console.log('photo 1: ', photoData);
  }, [photoData]);

  return (
    <SafeAreaView>
      <Header tittle="DATA CALON" />
      {partai.map((index, key) => (
        <View style={style.box} key={key}>
          <View style={style.listBox}>
            <View style={style.imageBox}>
              {photoData ? (
                <Image
                  style={{width: wp(10), height: hp(5), alignSelf: 'center'}}
                  source={{
                    uri: 'data:image/png;base64,' + photoData,
                  }}
                />
              ) : (
                <Text style={{color: COLOR.RED}}>Image Tidak Ada</Text>
              )}
            </View>
            <View style={style.nameBox}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                {index.nama_partai}
              </Text>
            </View>
            <View style={style.iconBox}>
              <Icon name="chevron-forward" size={30} color="#B22222" />
            </View>
          </View>

          <View style={style.subListBox}>
            <View style={style.subNameBox}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                1. Anugerah ALief Riadi
              </Text>
            </View>
            <View style={style.iconBox}>
              <Icon name="chevron-forward" size={30} color="#B22222" />
            </View>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    height: hp(13),
    width: wp(100),
    backgroundColor: '#B22222',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: wp(90),
    height: hp(30),
    alignSelf: 'center',
    marginTop: 40,
  },
  listBox: {
    width: wp(90),
    height: hp(9),
    borderWidth: 1,
    borderColor: '#B22222',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
    shadowColor: '#000',
  },
  subListBox: {
    width: wp(85),
    height: hp(9),
    borderWidth: 1,
    borderColor: '#B22222',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
  imageBox: {
    width: wp(15),
    height: hp(9),
    justifyContent: 'center',
  },
  nameBox: {
    width: wp(60),
    height: hp(9),
    justifyContent: 'center',
  },
  subNameBox: {
    width: wp(68),
    height: hp(9),
    justifyContent: 'center',
  },
  iconBox: {
    width: wp(10),
    height: hp(9),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default DataCalon;
