import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OrderSummaryScreen = ({ navigation }) => {
  const handleConfirmOrder = () => {
    // Ensure navigation is used correctly
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      {/* Display order summary details */}
      <Text style={styles.summary}>Item 1: $10 x 1</Text>
      <Text style={styles.summary}>Item 2: $5 x 2</Text>
      <Text style={styles.totalPrice}>Total: $20</Text>
      <Button title="Confirm Order" onPress={handleConfirmOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  summary: {
    fontSize: 16,
    marginBottom: 8,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
});

export default OrderSummaryScreen;
