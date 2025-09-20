import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const tempTravellerCreds = {
  username: 'traveller',
  password: 'traveller123',
};

export default function TravellerLogin({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const login = () => {
    if (username === tempTravellerCreds.username && password === tempTravellerCreds.password) {
      navigation.navigate('Consent');
    } else {
      Alert.alert('Invalid credentials', 'Please enter correct traveller username and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traveller Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
          <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <Button title="Login" onPress={login} color="#4caf50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 30, backgroundColor: '#e8f5e9' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2e7d32', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
