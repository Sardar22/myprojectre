import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ route, navigation }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const { email: signupEmail, password: signupPassword } = route.params || {};

  const handleLogin = () => {
    // Simulate login logic (replace this with your actual login code)
    if (loginEmail === signupEmail && loginPassword === signupPassword) {
      // Successful login, navigate to the Dashboard
      navigation.navigate('Dashboard');
    } else {
      // Handle login failure (e.g., show an error message)
      alert('Invalid email or password.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={loginEmail}
        onChangeText={(text) => setLoginEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={loginPassword}
        onChangeText={(text) => setLoginPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
