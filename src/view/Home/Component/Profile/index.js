import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../../../Header'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  return (
    <SafeAreaView>
        <Header tittle={"Profile"}/>
    </SafeAreaView>
  )
}
