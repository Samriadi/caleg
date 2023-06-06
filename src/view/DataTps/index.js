import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Header from '../../Header';

const DataTps = () => {
 
  return (
    <SafeAreaView>
        <Header tittle="DATA TPS" />
    </SafeAreaView>
  );
};

export default DataTps;