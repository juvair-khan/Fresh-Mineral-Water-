
// FreshMineralWater App – App.js (Snack Ready Version)

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

export default function App() {
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const pricePerBottle = 20;

  const handleConfirmOrder = () => {
    if (!quantity || !address) {
      Alert.alert('Error', 'Please enter quantity and address.');
      return;
    }
    setConfirmed(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>💧 Fresh Mineral Water</Text>

      <Text style={styles.label}>How many 20L bottles?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
        placeholder="e.g. 3"
      />

      <Text style={styles.label}>Delivery Address</Text>
      <TextInput
        style={styles.input}
        multiline
        value={address}
        onChangeText={setAddress}
        placeholder="House No, Street, Area"
      />

      <Text style={styles.label}>Special Instructions</Text>
      <TextInput
        style={styles.input}
        multiline
        value={instructions}
        onChangeText={setInstructions}
        placeholder="Any note for delivery boy"
      />

      <Button title="Confirm Order" color="#1E90FF" onPress={handleConfirmOrder} />

      {confirmed && (
        <View style={styles.summary}>
          <Text style={styles.summaryText}>✅ Order Confirmed!</Text>
          <Text>Total Bottles: {quantity}</Text>
          <Text>Total Price: ₹{parseInt(quantity || 0) * pricePerBottle}</Text>
          <Text>📍 Address: {address}</Text>
          <Text>📝 Note: {instructions || 'None'}</Text>
        </View>
      )}

      <Text style={styles.footer}>Made for Juvair Khan 💧</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F3FAFF',
    flex: 1,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  summary: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#E6F7FF',
    borderRadius: 12,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'green',
  },
  footer: {
    marginTop: 30,
    fontSize: 14,
    textAlign: 'center',
    color: '#888',
  },
});
