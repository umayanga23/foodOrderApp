import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "expo-status-bar";
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { StyleSheet } from "react-native";
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderSummaryScreen from '../screens/OrderSummaryScreen';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPXtomaVcU9V6rujAHmgHZ2w0wx2I2XtE",
    authDomain: "foodorderingapp-899d7.firebaseapp.com",
    projectId: "foodorderingapp-899d7",
    storageBucket: "foodorderingapp-899d7.firebasestorage.app",
    messagingSenderId: "192294370685",
    appId: "1:192294370685:web:944e23745bdcfea0636014",
    measurementId: "G-NG607LXV3G"
  };

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}
const db = getFirestore(app);

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="OrderSummary" component={OrderSummaryScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
