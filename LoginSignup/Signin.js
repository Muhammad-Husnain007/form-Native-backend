import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const signinForm = async () => {
    const formData = {
      email,
      password
    };

    setEmail("");
    setPassword("");
    try {
      const response = await fetch('http://192.168.0.102:3000/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('login data sent successfully!');
        // Redirect to home page or desired screen upon successful sign-in
      } else {
        if (response.status === 401) {
          setErrorMessage("Invalid email or password");
        } else {
          console.error('Error in sign-in:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <View>
      <View>
        <Image source={require('../assests/signup-image.webp')}
          style={styles.signupImage} />
      </View>
      <View style={styles.form}>
        <Text style={styles.labelText}>Enter Email:</Text>
        <TextInput style={styles.inputfields} placeholder='Enter Your Email' value={email} onChangeText={setEmail} />
        <Text style={styles.labelText}>Enter Password:</Text>
        <TextInput style={styles.inputfields} placeholder='Enter Your Password' value={password} onChangeText={setPassword} secureTextEntry={true} />
        <TouchableOpacity style={styles.button} onPress={signinForm}>
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity>
      </View>
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 800,
    paddingTop: 20,
  },
  inputfields: {
    width: 250,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'lightgrey',
    paddingHorizontal: 10,
    marginLeft: 50,
    marginTop: 10

  },
  labelText: {
    marginLeft: 60,
    marginTop: 30,
    color: 'green'
  },
  button: {
    backgroundColor: 'cyan', // Set your button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: 130,
    marginLeft: 100,
    marginTop: 30
  },
  buttonText: {
    color: 'green',
    fontSize: 16,
    marginLeft: 10,

  },
  signupImage: {
    width: 300,
    height: 220,
    marginLeft: 20
  }
});

export default Signin;
