import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const tempAdminCreds = {
  username: 'admin',
  password: 'admin123',
};

export default function AdminLogin({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const login = () => {
    if (username === tempAdminCreds.username && password === tempAdminCreds.password) {
      navigation.navigate('AdminHome');
    } else {
      Alert.alert('Invalid credentials', 'Please enter correct admin username and password');
    }
  };

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Admin Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
          <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Login</Text>
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
    justifyContent: 'center', 
    padding: 30 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#2e7d32', 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#4caf50', 
    padding: 10, 
    marginBottom: 15, 
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  button: { 
    backgroundColor: '#fb8c00', 
    padding: 15, 
    borderRadius: 5, 
    alignItems: 'center' 
  },
  buttonText: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
});
