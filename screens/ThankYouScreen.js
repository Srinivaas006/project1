import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ThankYouScreen({ navigation, route }) {
  const { trip } = route.params || {};

  const handleDashboard = () => {
    navigation.navigate('Dashboard');
  };

  const handleTripDetails = () => {
    navigation.navigate('TripDetails', { trip });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank You!</Text>
      <Text style={styles.message}>
        Your trip details have been submitted successfully.
      </Text>
      <Text style={styles.subtitle}>
        What would you like to do next?
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.dashboardButton} onPress={handleDashboard}>
          <Text style={styles.buttonText}>📊 Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tripDetailsButton} onPress={handleTripDetails}>
          <Text style={styles.buttonText}>🗺️ Trip Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 20,
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 26,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  dashboardButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tripDetailsButton: {
    backgroundColor: '#FF9800',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
