import { ScrollView, StyleSheet } from 'react-native';
import Navbar from '../navbar';
import HeroArea from '../heroArea';
import Team from '../team';
import JoinUs from '../joinUs';
import Footer from '../footer';
import Contact from '../contact';

const AboutPage = () => (
    <ScrollView style={styles.container}>
      <Navbar />
      <HeroArea/>
      <Team/>
      <JoinUs/>
      <Contact/>
      <Footer/>
    </ScrollView>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
  });

  export default AboutPage;