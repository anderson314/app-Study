import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './pages/Landing';


export default function App() {
  return (
      <>
        <Landing/>
        <StatusBar style="auto" />
      </>
  );
}

