import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function UserTypeSelection({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {}
      <View style={styles.overlay} />
      
      <View style={styles.container}>
        <Text style={styles.title}>Select Login Type</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TravellerLogin')}
        >
          <Text style={styles.buttonText}>Traveller Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.adminButton]}
          onPress={() => navigation.navigate('AdminLogin')}
        >
          <Text style={styles.buttonText}>Admin Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,  
    backgroundColor: 'white',
    opacity: 0.5, 
  },
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'transparent', 
    padding: 30 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#000000ff', 
    marginBottom: 40 
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 30,
    width: '70%',
    alignItems: 'center',
  },
  adminButton: {
    backgroundColor: '#fb8c00',
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: '600' 
  },
});
