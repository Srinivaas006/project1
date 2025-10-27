import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function TripDetails({ route }) {
  const { trip } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Trip Details</Text>
      
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Trip Number:</Text>
          <Text style={styles.value}>{trip.tripNumber}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Origin:</Text>
          <Text style={styles.value}>{trip.origin}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Destination:</Text>
          <Text style={styles.value}>{trip.destination}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Time:</Text>
          <Text style={styles.value}>{trip.time}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Mode:</Text>
          <Text style={styles.value}>{trip.mode}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Travelers:</Text>
          <Text style={styles.value}>{trip.travellers}</Text>
        </View>
        
        {trip.createdAt && (
          <View style={styles.row}>
            <Text style={styles.label}>Submitted:</Text>
            <Text style={styles.value}>{new Date(trip.createdAt).toLocaleString()}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#e8f5e9', 
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#2e7d32', 
    marginBottom: 20,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4caf50',
    flex: 1
  },
  value: {
    fontSize: 16,
    color: '#333',
    flex: 2,
    textAlign: 'right'
  }
});
