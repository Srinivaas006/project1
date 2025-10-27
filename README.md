# TravelSurveyApp

Lightweight Expo React Native app to collect short travel surveys from users and let admins review submissions.

## Summary
TravelSurveyApp is a small mobile app built with Expo and React Native. It provides a simple flow:
- User chooses login type ([`UserTypeSelection`](screens/UserTypeSelection.js)).
- Traveller signs in and gives consent ([`TravellerLogin`](screens/TravellerLogin.js], [`ConsentScreen`](screens/ConsentScreen.js)).
- Traveller fills a trip form ([`TripFormScreen`](screens/TripFormScreen.js)); data is saved locally using [`DatabaseService`](database.js).
- Thank you / review screens: [`ThankYouScreen`](screens/ThankYouScreen.js), [`TripDetails`](screens/TripDetails.js), and admin dashboard [`AdminHome`](screens/AdminHome.js).

## Features
- Expo + React Navigation stack ([`App`](App.js)).
- Local persistence using AsyncStorage via [`DatabaseService`](database.js).
- Separate flows for travellers and admins.
- Simple, accessible UI for quick data entry and admin review.

## Tech stack
- React Native (Expo)
- Expo SDK (see [package.json](package.json))
- AsyncStorage (local)

## Run locally
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start Expo:
   ```sh
   npm run start
   ```
3. Open on a device or simulator.

## Files to inspect
- [App.js](App.js) — navigation setup and screen list.  
- [database.js](database.js) — save/get/delete trips logic ([`DatabaseService`](database.js)).  
- [screens/TripFormScreen.js](screens/TripFormScreen.js) — trip submission form.  
- [screens/AdminHome.js](screens/AdminHome.js) — admin list and navigation to [`TripDetails`](screens/TripDetails.js).

## Notes
- Credentials in login screens are temporary (hardcoded). Replace with real auth for production.
- Data is stored locally; migrate to a backend for persistence across devices.
