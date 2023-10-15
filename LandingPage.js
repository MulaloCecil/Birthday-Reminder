import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Image } from 'react-native-elements';

const LandingPage = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('ReminderForm');
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Card containerStyle={styles.card}>
          <Image
            source={require('./assets/reminder.jpeg')}
            style={styles.image}
          />
          <View><Text style={styles.welcomeText}>
            Welcome To Clown's Birthday Reminder.
          </Text></View>
        </Card>
        
         
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={handleGetStarted}
          >
            <Text style={styles.buttonText}>New Reminder</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98E4FF',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    borderRadius: 16,
      backgroundColor: '#98E4FF',
      marginBottom:20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius:16,
  },
  welcomeText: {
    color:'red',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  getStartedButton: {
    backgroundColor: 'transparent',
    borderWidth:1,
    borderColor:'#687EFF',
    padding: 10,
    borderRadius: 16,
  },
  buttonText: {
    color: '#687EFF',
    fontSize: 18,
  },
});

export default LandingPage;
