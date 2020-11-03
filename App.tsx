import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './routes/AppStack'; 

export default function App() {
  return (
      <>
        <AppStack/>
        <StatusBar style="auto" />
      </>
  );
}

