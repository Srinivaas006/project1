import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function TripFormScreen({ navigation }) {
  const [trip, setTrip] = useState({
    tripNumber: '',
    origin: '',
    destination: '',
    time: '',
    mode: '',
    travellers: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setTrip(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <View style={styles.successContainer}>
        <Text style={styles.successMessage}>Happy travelling!</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.buttonText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { marginLeft: 20 }]} onPress={() => navigation.navigate('TripDetails', { trip })}>
            <Text style={styles.buttonText}>Trip Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter your trip details</Text>

      <Text style={styles.label}>Trip Number</Text>
      <TextInput
        value={trip.tripNumber}
        onChangeText={v => handleChange('tripNumber', v)}
        placeholder="Enter Trip Number"
        style={styles.input}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Origin</Text>
      <TextInput
        value={trip.origin}
        onChangeText={v => handleChange('origin', v)}
        placeholder="Enter Origin"
        style={styles.input}
      />

      <Text style={styles.label}>Destination</Text>
      <TextInput
        value={trip.destination}
        onChangeText={v => handleChange('destination', v)}
        placeholder="Enter Destination"
        style={styles.input}
      />

      <Text style={styles.label}>Time</Text>
      <TextInput
        value={trip.time}
        onChangeText={v => handleChange('time', v)}
        placeholder="Enter Time"
        style={styles.input}
      />

      <Text style={styles.label}>Mode</Text>
      <TextInput
        value={trip.mode}
        onChangeText={v => handleChange('mode', v)}
        placeholder="Enter Mode"
        style={styles.input}
      />

      <Text style={styles.label}>Number of Travellers</Text>
      <TextInput
        value={trip.travellers}
        onChangeText={v => handleChange('travellers', v)}
        placeholder="Enter Number of Travellers"
        style={styles.input}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitBtnText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}

const colors = {
  primary: '#4CAF50',
  background: '#E8F5E9',
  buttonBackground: '#FF6F00',  // Bright UI orange color
  buttonText: '#FFFFFF',
  textPrimary: '#333333',
  labelColor: '#196619',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    color: colors.labelColor,
    fontWeight: 'bold',
    marginBottom: 15,
    fontFamily: 'serif',
  },
  label: {
    fontSize: 16,
    color: colors.labelColor,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    color: colors.textPrimary,
  },
  submitButton: {
    marginTop: 15,
    backgroundColor: colors.buttonBackground,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    alignSelf: 'center',
    elevation: 3,
  },
  submitBtnText: {
    fontSize: 18,
    color: colors.buttonText,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  successContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  successMessage: {
    fontSize: 32,
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.buttonBackground,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    color: colors.buttonText,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
