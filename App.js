import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import UserTypeSelection from './screens/UserTypeSelection';
import TravellerLogin from './screens/TravellerLogin';
import AdminLogin from './screens/AdminLogin';
import ConsentScreen from './screens/ConsentScreen';
import TripFormScreen from './screens/TripFormScreen';
import ThankYouScreen from './screens/ThankYouScreen';
import AdminHome from './screens/AdminHome';
import Dashboard from './screens/Dashboard';
import TripDetails from './screens/TripDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserTypeSelection">
        <Stack.Screen 
          name="UserTypeSelection" 
          component={UserTypeSelection} 
          options={{ title: 'Select User Type' }} 
        />
        <Stack.Screen 
          name="TravellerLogin" 
          component={TravellerLogin} 
          options={{ title: 'Traveller Login' }} 
        />
        <Stack.Screen 
          name="AdminLogin" 
          component={AdminLogin} 
          options={{ title: 'Admin Login' }} 
        />
        <Stack.Screen 
          name="ConsentScreen" 
          component={ConsentScreen} 
          options={{ title: 'Consent Form' }} 
        />
        <Stack.Screen 
          name="TripFormScreen" 
          component={TripFormScreen} 
          options={{ title: 'Trip Details' }} 
        />
        <Stack.Screen 
          name="ThankYouScreen" 
          component={ThankYouScreen} 
          options={{ title: 'Thank You' }} 
        />
        <Stack.Screen 
          name="AdminHome" 
          component={AdminHome} 
          options={{ title: 'Admin Dashboard' }} 
        />
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{ title: 'Dashboard' }} 
        />
        <Stack.Screen 
          name="TripDetails" 
          component={TripDetails} 
          options={{ title: 'Trip Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
