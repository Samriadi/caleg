import * as React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import { Banner } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TextInput, Button} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const Home = () => {
 
  return (
    <SafeAreaView>
        <View style={{height:hp(10), width:wp(100), backgroundColor:'#B22222',borderBottomLeftRadius:20,borderBottomRightRadius:20,alignItems:"center", justifyContent:"center", marginBottom:15}}>
            <Text style={{fontSize:25, fontWeight:"bold", color:"white"}}>PEMILU</Text>
        </View>

        <View style={{height:hp(15), width:wp(100), alignItems:"center"}}>
            <View style={{height:hp(10),width:wp(90),  alignItems:"center", flexDirection:"row", justifyContent: "space-around", borderWidth:1, borderRadius:10,borderColor:"#B22222", backgroundColor:"white"}}>
                <View style={{height:hp(8),width:wp(16),borderRadius:20, backgroundColor:"#B22222"}}>
                </View>
                <View style={{height:hp(8), width:wp(50)}}>
                    <Text style={{fontSize:20,color:"black"}}>Alifuddin bin muddin</Text>
                    <Text style={{color:"#B22222"}}>Bangkala Barat, Jeneponto</Text>
                </View>
                <View style={{height:hp(8), width:wp(10), justifyContent:"center"}}>
                    <Icon name="chevron-forward" color="#B22222" size={30}/>
                </View>
            </View>
        </View>
        <View style={{width:wp(100), borderWidth:1.5, borderColor:"#B22222"}}></View>
        <Text style={{color:"black", fontWeight:"bold", textAlign:"center", fontSize:15, marginTop:10}}>Perolehan Suara Partai</Text>
        <PieChart
            data={
                [
                {
                    name: "Jawa Barat",
                    population: 25,
                    color: "rgba(131, 167, 234, 1)",
                    legendFontColor: "#B22222",
                    legendFontSize: 11
                },
                {
                    name: "Jawa Timur",
                    population: 20,
                    color: "red",
                    legendFontColor: "#B22222",
                    legendFontSize: 11
                },
                {
                    name: "Jawa Tengah",
                    population: 5,
                    color: "brown",
                    legendFontColor: "#B22222",
                    legendFontSize: 11
                },
                {
                    name: "Sumatera Utara",
                    population: 35,
                    color: "orange",
                    legendFontColor: "#B22222",
                    legendFontSize: 11
                },
                {
                    name: "Banten",
                    population: 15,
                    color: "green",
                    legendFontColor: "#B22222",
                    legendFontSize: 11
                }
                ]
            }
            width={wp(90)} // from react-native
            height={hp(25)}
            chartConfig={{
                color: (opacity = 1) => `white`,
                labelColor: (opacity = 1) => `white`,
                style: {
                    borderRadius: 16
                }
            }}
            backgroundColor="white"
            accessor="population"
            paddingLeft="15"
            absolute
            style={{
                marginVertical: 8,
                borderRadius: 16,
                alignSelf:"center"
            }}
        />

    </SafeAreaView>
  );
};

export default Home;

