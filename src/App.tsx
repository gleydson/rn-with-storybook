import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import RepositoryList from './components/RepositoryList/RepositoryList';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <RepositoryList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',

    paddingHorizontal: 16
  },
});