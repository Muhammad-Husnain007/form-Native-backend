import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  const submitForm = async () => {
    const formData = {
      name,
      email,
      password,
      confirmPassword,
      phone,
      gender
    };

    try {
      const response = await fetch('http://10.0.2.2:3000/User/Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data sent successfully!');
        navigation.navigate('Signin');
      } else {

        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Image source={require('../assests/signup-image.webp')}
          style={styles.signupImage} />
      </View>
      <View style={styles.form}>
        <Text style={styles.labelText}>Name*</Text>
        <TextInput style={styles.inputfields} placeholder='Enter Your Name' value={name} onChangeText={setName} />
        <Text style={styles.labelText}>Email*</Text>
        <TextInput style={styles.inputfields} placeholder='Enter Your Email' value={email} onChangeText={setEmail} />
        <Text style={styles.labelText}>Password*</Text>
        <TextInput style={styles.inputfields} placeholder='Enter Your Password' secureTextEntry={true} value={password} onChangeText={setPassword} />
        <Text style={styles.labelText}>Confirm Password*</Text>
        <TextInput style={styles.inputfields} placeholder='Enter Confirm Password' secureTextEntry={true} value={confirmPassword} onChangeText={setConfirmPassword} />
        <TouchableOpacity style={styles.button} onPress={submitForm}>
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    backgroundColor: 'cyan', 
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

export default Signup;