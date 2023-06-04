import * as React from 'react';
import { View, Text } from 'react-native'
import {StatusBar} from 'react-native'; 
import NavigationRoutes from './src/routes';

export default function App() {
  return (
    <>
    <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle="dark-content"
    />
    <NavigationRoutes />
  </>
  )
}