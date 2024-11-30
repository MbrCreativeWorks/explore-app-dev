import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Navbar = () => (
    <View style={styles.navbar}>
      <Image
        source={ require('../../../assets/images/Ordrio-logo.png')}
        style={styles.logo}
      />
      <TouchableOpacity>
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>
    </View>
  );


  const styles = StyleSheet.create({
    
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#0e0e0d',
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    logo: {
      width: 160,
      height: 40,
    },
    menuIcon: {
      fontSize: 24,
      color: '#ffffff',
    },
  });

  export default Navbar;