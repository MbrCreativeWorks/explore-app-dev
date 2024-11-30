import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const JoinUs = () => {
  const handlePress = () => {
    Alert.alert('Request Sent!', 'Our team will reach you soon.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.heading}>Join Us on this Journey</Text>
        <Text style={styles.description}>
        As we look to the future, we're excited to have you as part of our journey. Together, we can revolutionise commerce. Join the Team. 
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  banner: {
    backgroundColor: '#000',
    padding: 30,
    borderRadius: 8,
    width: '100%',
    maxWidth: 400, // Limits the width on larger screens
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    textAlign:'center',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFCF01',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    color: '#00',
    fontWeight: 'bold',
  },
});

export default JoinUs;
