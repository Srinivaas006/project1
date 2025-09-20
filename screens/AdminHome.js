import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AdminHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <Text>Displaying traveller data will be implemented here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding: 30, backgroundColor: '#e8f5e9' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2e7d32', marginBottom: 20 },
});
