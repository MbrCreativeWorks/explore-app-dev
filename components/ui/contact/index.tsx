import { View, Text, Image,TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Contact = () =>{ 
  const handlePress = () => {
    Alert.alert('Request Sent!', 'Our team will reach you soon.');
  };
  return(
    <View style={styles.container}>
      <View style={styles.section}>
      <Image
          source={{
            uri: 'https://ordrio.com/wp-content/uploads/2023/11/ordrio-about-650x434.jpg',
          }}
          style={styles.image}
        />
        <Text style={styles.heading}>Our Commitment to Excellence</Text>
        <Text style={styles.description}>
        Excellence is not just a goal at Ordrio; it's a way of life. We are committed to delivering cutting-edge technology that helps businesses succeed. Our solutions are a testament to our dedication to providing the best tools and services in the industry.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  )};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    section: {
      paddingTop: 40,
      paddingBottom: 40,
      paddingRight: 20,
      paddingLeft: 20,
    },
    heading: {
      fontSize: 24,
      lineHeight: 30,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      marginTop: 20,
      marginBottom: 30,
      color: '#555',
    },
    image: {
      width: 300,
      height: 200,
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#000',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 4,
      width: 160
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      textAlign:'center'
    },
  });

  export default Contact;