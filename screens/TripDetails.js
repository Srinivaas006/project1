import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TripDetails({ route }) {
  const { trip } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trip Details</Text>
      <View style={styles.box}>
        <Text style={styles.label}>Trip Number:</Text>
        <Text style={styles.value}>{trip.tripNumber}</Text>

        <Text style={styles.label}>Origin:</Text>
        <Text style={styles.value}>{trip.origin}</Text>

        <Text style={styles.label}>Destination:</Text>
        <Text style={styles.value}>{trip.destination}</Text>

        <Text style={styles.label}>Time:</Text>
        <Text style={styles.value}>{trip.time}</Text>

        <Text style={styles.label}>Mode:</Text>
        <Text style={styles.value}>{trip.mode}</Text>

        <Text style={styles.label}>Number of Travellers:</Text>
        <Text style={styles.value}>{trip.travellers}</Text>
      </View>
    </View>
  );
}

const colors = {
  primary: '#4CAF50',
  background: '#E8F5E9',
  textPrimary: '#333333',
  boxBackground: '#FFFFFF',
  labelColor: '#196619',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'serif',
  },
  box: {
    backgroundColor: colors.boxBackground,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    color: colors.labelColor,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
  value: {
    color: colors.textPrimary,
    fontSize: 16,
    marginBottom: 8,
  },
});
