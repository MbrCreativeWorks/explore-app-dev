import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const teamData = [
  {
    id: '1',
    name: 'Vishwaraj',
    role: 'Project Manager',
    image: 'https://ordrio.com/wp-content/uploads/2023/12/PM-min.png',
  },
  {
    id: '2',
    name: 'Gurudatt Kamath',
    role: 'Senior Marketting  Manager',
    image: 'https://ordrio.com/wp-content/uploads/2023/12/MH-min-1.png',
  },
  {
    id: '3',
    name: 'Velashri',
    role: 'Human Resource',
    image: 'https://ordrio.com/wp-content/uploads/2023/12/HR-min.png',
  },
];

const TeamSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Team</Text>
      <FlatList
        data={teamData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textBox}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.role}>{item.role}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    width: 240,
    margin: 'auto',
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 260,
    borderRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  textBox:{
    padding:15
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  role: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});

export default TeamSection;
