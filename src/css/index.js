import { StyleSheet } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Platform } from "react-native";

export const css = StyleSheet.create({
    header: {
        height:hp(6), 
        width:wp(100), 
        backgroundColor:'#B22222',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    headerTitle:{
        fontSize:25, 
        fontWeight:"bold",
        color:"white",
        alignSelf:"center",
        marginTop:-25
    }
})