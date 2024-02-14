import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const OTPScreen: React.FC = () => {
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    console.log('OTP:', otp);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el OTP"
        value={otp}
        onChangeText={setOtp}
      />
      <Button title="Verificar OTP" onPress={handleVerifyOTP} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default OTPScreen;
