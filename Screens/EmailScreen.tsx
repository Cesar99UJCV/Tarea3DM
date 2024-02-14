import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const EmailScreen: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    console.log('Correo electrónico:', email);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Continuar" onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 44,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
  },
});

export default EmailScreen;

