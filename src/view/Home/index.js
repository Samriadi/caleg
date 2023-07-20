import * as React from 'react';
import {View, Image, Text, Dimensions, TouchableOpacity} from 'react-native';
import {Banner} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TextInput, Button} from 'react-native-paper';
import Header from '../../Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const Home = ({navigation}) => {
  const getProfile = async () => {
      await AsyncStorage.getItem('token', async (err, token) => {
        if(token){
          await axios
          .get(`https://caleg-api.fihaa-app.com/user`,{
            headers:{
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json',
            }
          })
          .then(async res => {
            console.log('Data profile : ', res.data.data);
            navigation.navigate("Profile", { 
              itemName: (res.data.data.name),
              itemJenisKelamin: (res.data.data.jenis_kelamin),
              itemAlamat: (res.data.data.kabupaten),
            });
          })
        }
      })
    } 
  

  return (
    <SafeAreaView>
      <Header tittle={'PEMILU'} />
      <View
        style={{
          height: hp(15),
          width: wp(100),
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            height: hp(10),
            width: wp(90),
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#B22222',
            backgroundColor: 'white',
          }}>
          <View
            style={{
              height: hp(8),
              width: wp(16),
              borderRadius: 20,
              backgroundColor: '#B22222',
            }}></View>
          <View style={{height: hp(8), width: wp(50)}}>
            <Text style={{fontSize: wp(5), color: 'black'}}>
              Alifuddin bin muddin
            </Text>
            <Text style={{color: '#B22222'}}>Bangkala Barat, Jeneponto</Text>
          </View>
          <TouchableOpacity
            onPress={getProfile}
            style={{height: hp(8), width: wp(10), justifyContent: 'center'}}>
            <Icon name="chevron-forward" color="#B22222" size={wp(8)} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: wp(100),
            borderWidth: 1.5,
            borderColor: '#B22222',
            marginTop: 20,
          }}></View>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 15,
            marginTop: 10,
          }}>
          Perolehan Suara Partai
        </Text>
        <PieChart
          data={[
            {
              name: 'Jawa Barat',
              population: 25,
              color: 'rgba(131, 167, 234, 1)',
              legendFontColor: '#B22222',
              legendFontSize: 11,
            },
            {
              name: 'Jawa Timur',
              population: 20,
              color: 'red',
              legendFontColor: '#B22222',
              legendFontSize: 11,
            },
            {
              name: 'Jawa Tengah',
              population: 5,
              color: 'brown',
              legendFontColor: '#B22222',
              legendFontSize: 11,
            },
            {
              name: 'Sumatera Utara',
              population: 35,
              color: 'orange',
              legendFontColor: '#B22222',
              legendFontSize: 11,
            },
            {
              name: 'Banten',
              population: 15,
              color: 'green',
              legendFontColor: '#B22222',
              legendFontSize: 11,
            },
          ]}
          width={wp(90)} // from react-native
          height={hp(25)}
          chartConfig={{
            color: (opacity = 1) => `white`,
            labelColor: (opacity = 1) => `white`,
            style: {
              borderRadius: 16,
            },
          }}
          backgroundColor="white"
          accessor="population"
          paddingLeft="15"
          absolute
          style={{
            marginVertical: 8,
            borderRadius: 16,
            alignSelf: 'center',
          }}
        />
        <Button
          mode="contained"
          theme={{colors: {primary: '#B22222'}}}
          onPress={() => console.log({username})}
          style={{borderRadius: 10, width: wp(90), marginTop: hp(10)}}>
          Input Data
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;
