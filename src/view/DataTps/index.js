import * as React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../Header';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const DataTps = ({navigation}) => {
const[Tps, setTps]= React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      await AsyncStorage.getItem('token', async (err, token) => {
        if(token){
          await axios
          .get(`https://caleg-api.fihaa-app.com/tps`,{
            headers:{
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json',
            }
          })
          .then(async res => {
            console.log('Data Tps : ', res.data.data);
            setTps(res.data.data);
          })
        }
      })
    }
    fetchData()
      .catch(console.error);
  }, [])

  return (
    <SafeAreaView>
      <Header tittle="DATA TPS" />
      {Tps.map((index, key) => (
      <TouchableOpacity
        style={style.box}
        onPress={() => navigation.navigate('DetailTPS')}>
        <View style={style.listBox}>
          <View style={style.nameBox}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              {index.no_tps}
            </Text>
          </View>
          <View style={style.iconBox}>
            <Icon name="chevron-forward" size={30} color="#B22222" />
          </View>
        </View>
      </TouchableOpacity>
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

  nameBox: {
    width: wp(60),
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

export default DataTps;
