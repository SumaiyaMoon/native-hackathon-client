import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import SMAppLoader from '../components/SMLoader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 16,
  },
});

export default function Splash() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., loading data)
    const loadData = async () => {
      // Simulate loading for 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    loadData();
  }, []);

  return (
    <ImageBackground
      source={require('../assets/img.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>Taskcy</Text>
          <Text style={styles.heading}>Tasks Manager</Text>
          <Text style={styles.description}>
            Let's create a space for your workflows
          </Text>
        </View>
        {isLoading && (
          <View style={styles.loaderContainer}>
            <SMAppLoader />
          </View>
        )}
      </View>
    </ImageBackground>
  );
}
