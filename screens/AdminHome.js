import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { DatabaseService } from '../database'; // Import database service

export default function AdminHome({ navigation }) {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load trips when component mounts
  useEffect(() => {
    loadTrips();
  }, []);

  const loadTrips = async () => {
    try {
      const savedTrips = await DatabaseService.getAllTrips();
      setTrips(savedTrips);
    } catch (error) {
      console.error('Error loading trips:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderTripItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.tripItem}
      onPress={() => navigation.navigate('TripDetails', { trip: item })}
    >
      <Text style={styles.tripNumber}>Trip #{item.tripNumber}</Text>
      <Text style={styles.tripRoute}>{item.origin} → {item.destination}</Text>
      <Text style={styles.tripDetails}>{item.mode} • {item.travellers} travelers</Text>
      <Text style={styles.tripTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Dashboard</Text>
      <Text style={styles.subtitle}>Travel Survey Responses ({trips.length})</Text>
      
      {loading ? (
        <Text style={styles.loadingText}>Loading trips...</Text>
      ) : trips.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No trip data available yet.</Text>
          <Text style={styles.emptySubtext}>Trips will appear here once users submit the form.</Text>
        </View>
      ) : (
        <FlatList
          data={trips}
          keyExtractor={(item) => item.id}
          renderItem={renderTripItem}
          style={styles.tripsList}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#e8f5e9', 
    padding: 20 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#2e7d32', 
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    color: '#2e7d32',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '600'
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 50
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
    fontWeight: '600',
    textAlign: 'center'
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center'
  },
  tripsList: {
    flex: 1
  },
  tripItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#fb8c00',
    elevation: 2
  },
  tripNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 5
  },
  tripRoute: {
    fontSize: 14,
    color: '#333',
    marginBottom: 3
  },
  tripDetails: {
    fontSize: 12,
    color: '#666',
    marginBottom: 3
  },
  tripTime: {
    fontSize: 12,
    color: '#888'
  }
});
