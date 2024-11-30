import { View, Text, Image, StyleSheet } from 'react-native';

const HeroArea = () => (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>Discover Our Story, Our Passion, and </Text>
        <Text style={[styles.heading, styles.splText]}> Our Promise </Text>
        <Text style={styles.description}>
        At Ordrio, we're not just a business; we're a team of dreamers, innovators, and creators. We started with a vision to making ecommerce simple, and that vision has been the driving force behind everything we do.
        </Text>
        <Image
          source={{
            uri: 'https://ordrio.com/wp-content/uploads/2023/11/ordrio-about-650x434.jpg',
          }}
          style={styles.image}
        />
      </View>
    </View>
  );

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
      alignItems: 'center',
    },
    heading: {
      fontSize: 24,
      lineHeight: 30,
      fontWeight: 'bold',
      textAlign:'center'
    },
    splText:{
      marginTop:6,
      backgroundColor:'#ffcf01',
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 20,
      color: '#555',
    },
    image: {
      width: 300,
      height: 200,
      marginBottom: 20,
    },
  });

  export default HeroArea;