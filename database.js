import AsyncStorage from '@react-native-async-storage/async-storage';

// Database helper functions
export const DatabaseService = {

  // Save a trip to AsyncStorage
  async saveTripData(tripData) {
    try {
      // Generate unique ID for trip
      const tripId = Date.now().toString();
      const tripWithId = { ...tripData, id: tripId, createdAt: new Date().toISOString() };
      
      // Get existing trips
      const existingTrips = await this.getAllTrips();
      
      // Add new trip
      const updatedTrips = [...existingTrips, tripWithId];
      
      // Save back to storage
      await AsyncStorage.setItem('trips', JSON.stringify(updatedTrips));
      
      console.log('Trip saved successfully:', tripWithId);
      return tripWithId;
    } catch (error) {
      console.error('Error saving trip:', error);
      throw error;
    }
  },

  // Get all trips
  async getAllTrips() {
    try {
      const trips = await AsyncStorage.getItem('trips');
      return trips ? JSON.parse(trips) : [];
    } catch (error) {
      console.error('Error fetching trips:', error);
      return [];
    }
  },

  // Get trip by ID
  async getTripById(id) {
    try {
      const trips = await this.getAllTrips();
      return trips.find(trip => trip.id === id);
    } catch (error) {
      console.error('Error fetching trip by ID:', error);
      return null;
    }
  },

  // Delete a trip
  async deleteTrip(id) {
    try {
      const trips = await this.getAllTrips();
      const filteredTrips = trips.filter(trip => trip.id !== id);
      await AsyncStorage.setItem('trips', JSON.stringify(filteredTrips));
      console.log('Trip deleted successfully');
      return true;
    } catch (error) {
      console.error('Error deleting trip:', error);
      return false;
    }
  },

  // Clear all trips (for testing)
  async clearAllTrips() {
    try {
      await AsyncStorage.removeItem('trips');
      console.log('All trips cleared');
      return true;
    } catch (error) {
      console.error('Error clearing trips:', error);
      return false;
    }
  }
};
