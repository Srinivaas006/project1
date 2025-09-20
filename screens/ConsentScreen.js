import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const colors = {
  background: '#e8f5e9',
  primary: '#2e7d32',
  secondary: '#4caf50',
  accent: '#fb8c00',
  textPrimary: '#333',
  textSecondary: '#555',
};

const ConsentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to NATPAC Travel Survey</Text>
      <Text style={styles.description}>
        We collect trip data for transportation planning. All data is stored securely with your consent.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TripForm')}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>I Agree</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 28,
  },
  button: {
    backgroundColor: colors.accent,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 5,
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ConsentScreen;
