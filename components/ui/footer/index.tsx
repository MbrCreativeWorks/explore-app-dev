import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Footer = () => {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url); // Opens the provided URL
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.sectionsContainer}>
        {/* Company Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Company</Text>
          <TouchableOpacity onPress={() => handleLinkPress('https://www.example.com/about')}>
            <Text style={styles.link}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://www.example.com/contact')}>
            <Text style={styles.link}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://www.example.com/terms')}>
            <Text style={styles.link}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View>

        {/* Sources Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Industries</Text>
          <TouchableOpacity onPress={() => handleLinkPress('https://www.example.com/blog')}>
            <Text style={styles.link}>Blog</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://www.example.com/privacy')}>
            <Text style={styles.link}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://www.example.com/docs')}>
            <Text style={styles.link}>Documentation</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.footerText}>© 2024 Ordrio Technologies. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    padding: 30,
    backgroundColor: '#141414',
    width: '100%',
  },
  sectionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  section: {
    flex: 1,
    alignItems: 'flex-start',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    color: '#616161',
    fontSize: 14,
    marginBottom: 5,
  },

  footerText: {
    color: '#fff',
    textAlign:'left',
    fontSize: 12,
  },
});

export default Footer;
