import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../imagenes/Logo.jpg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F73B2', 
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain', 
  },
});

export default SplashScreen;
