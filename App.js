import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserTypeSelection from './screens/UserTypeSelection';
import TravellerLogin from './screens/TravellerLogin';
import AdminLogin from './screens/AdminLogin';
import ConsentScreen from './screens/ConsentScreen';
import TripFormScreen from './screens/TripFormScreen';
import ThankYouScreen from './screens/ThankYouScreen';
import AdminHome from './screens/AdminHome';

// Add these new screens for post-submission navigation
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
          options={{ title: 'Select Login Type' }}
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
          name="Consent"
          component={ConsentScreen}
          options={{ title: 'Consent' }}
        />
        <Stack.Screen
          name="TripForm"
          component={TripFormScreen}
          options={{ title: 'Trip Form' }}
        />
        <Stack.Screen
          name="ThankYou"
          component={ThankYouScreen}
          options={{ title: 'Thank You' }}
        />
        <Stack.Screen
          name="AdminHome"
          component={AdminHome}
          options={{ title: 'Admin Home' }}
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
