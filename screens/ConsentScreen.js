import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function ConsentScreen({ navigation }) {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    if (!agreed) {
      Alert.alert('Consent Required', 'You must agree to the terms to continue');
      return;
    }
    navigation.navigate('TripFormScreen');
  };

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Privacy & Consent</Text>
      
      <Text style={styles.content}>
        By participating in this travel survey, you consent to the collection and use of your travel data 
        for research purposes. Your information will be kept confidential and used only for this study.
        
        We collect information about your travel patterns including origin, destination, mode of transport, 
        and travel time. This data helps us understand transportation needs and improve services.
        
        Your participation is voluntary and you can withdraw at any time.
      </Text>

      {/* Black and white checkbox instead of emoji */}
      <TouchableOpacity 
        style={styles.checkboxContainer}
        onPress={() => setAgreed(!agreed)}
      >
        <View style={[styles.checkbox, agreed && styles.checked]}>
          {agreed && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={[styles.checkboxText, agreed && styles.checkboxTextSelected]}>
          I agree to participate in this survey
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, agreed ? styles.buttonEnabled : styles.buttonDisabled]} 
        onPress={handleSubmit}
        disabled={!agreed}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { 
    flex: 1, 
    backgroundColor: '#e8f5e9' 
  },
  container: { 
    flexGrow: 1, 
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#2e7d32', 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  content: { 
    fontSize: 16, 
    color: '#333', 
    lineHeight: 24, 
    marginBottom: 30 
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 8,
    marginBottom: 30,
    backgroundColor: '#fff'
  },
  // Black and white checkbox styles
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#fb8c00',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  checked: {
    backgroundColor: '#fb8c00',
  },
  checkmark: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  checkboxText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  checkboxTextSelected: {
    color: '#',
    fontWeight: '500',
  },
  button: { 
    padding: 15, 
    borderRadius: 5, 
    alignItems: 'center',
    marginBottom: 20
  },
  buttonEnabled: {
    backgroundColor: '#fb8c00',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
});
