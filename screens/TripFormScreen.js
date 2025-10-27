import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { DatabaseService } from '../database'; // Import your database service if present

export default function TripFormScreen({ navigation }) {
  const [trip, setTrip] = useState({
    tripNumber: '',
    origin: '',
    destination: '',
    time: '',
    mode: '',
    travellers: '',
  });

  const handleChange = (field, value) => {
    setTrip(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      if (
        !trip.tripNumber ||
        !trip.origin ||
        !trip.destination ||
        !trip.time ||
        !trip.mode ||
        !trip.travellers
      ) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }

      await DatabaseService.saveTripData(trip);

      Alert.alert('Success', 'Trip details saved successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('ThankYouScreen', { trip }) },
      ]);
    } catch (error) {
      console.error('Error saving trip:', error);
      Alert.alert('Error', 'Failed to save trip data. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({ ios: 100, android: 80 })}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.heading}>Enter your trip details</Text>

        <Text style={styles.label}>Trip Number</Text>
        <TextInput
          value={trip.tripNumber}
          onChangeText={v => handleChange('tripNumber', v)}
          placeholder="Enter Trip Number"
          style={styles.input}
          keyboardType="numeric"
          returnKeyType="next"
        />

        <Text style={styles.label}>Origin</Text>
        <TextInput
          value={trip.origin}
          onChangeText={v => handleChange('origin', v)}
          placeholder="Enter Origin"
          style={styles.input}
          returnKeyType="next"
        />

        <Text style={styles.label}>Destination</Text>
        <TextInput
          value={trip.destination}
          onChangeText={v => handleChange('destination', v)}
          placeholder="Enter Destination"
          style={styles.input}
          returnKeyType="next"
        />

        <Text style={styles.label}>Time</Text>
        <TextInput
          value={trip.time}
          onChangeText={v => handleChange('time', v)}
          placeholder="Enter Time (e.g., 10:30 AM)"
          style={styles.input}
          returnKeyType="next"
        />

        <Text style={styles.label}>Mode</Text>
        <TextInput
          value={trip.mode}
          onChangeText={v => handleChange('mode', v)}
          placeholder="Enter Mode (e.g., Bus, Car, Train)"
          style={styles.input}
          returnKeyType="next"
        />

        <Text style={styles.label}>Number of Travellers</Text>
        <TextInput
          value={trip.travellers}
          onChangeText={v => handleChange('travellers', v)}
          placeholder="Enter Number of Travellers"
          style={styles.input}
          keyboardType="numeric"
          returnKeyType="done"
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitBtnText}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const colors = {
  primary: '#4CAF50',
  background: '#E8F5E9',
  buttonBackground: '#FF6F00',
  buttonText: '#FFFFFF',
  textPrimary: '#333333',
  labelColor: '#196619',
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    color: colors.labelColor,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: colors.labelColor,
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: colors.textPrimary,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: colors.buttonBackground,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignSelf: 'center',
    elevation: 3,
  },
  submitBtnText: {
    fontSize: 18,
    color: colors.buttonText,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
