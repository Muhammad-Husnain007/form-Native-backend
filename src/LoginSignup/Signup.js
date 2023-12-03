import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const navigation = useNavigation(); // Use useNavigation hook here

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
      const response = await fetch('http://localhost:3000/User//Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data sent successfully!');
        navigation.navigate('Signin'); // Navigate to 'Signin' screen
      } else {
        // Handle error response
        console.error('Failed to send form data');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error sending form data:', error);
    }
  }

  return (
    <View>
      <View>
        <Text>Name*</Text>
        <TextInput style={{ borderWidth: 1, padding: 5 }} placeholder='Enter Your Name' value={name} onChangeText={setName} />
        <Text>Email*</Text>
        <TextInput style={{ borderWidth: 1, padding: 5 }} placeholder='Enter Your Email' value={email} onChangeText={setEmail} />
        <Text>Password*</Text>
        <TextInput style={{ borderWidth: 1, padding: 5 }} placeholder='Enter Your Password' secureTextEntry={true} value={password} onChangeText={setPassword} />
        <Text>Confirm Password*</Text>
        <TextInput style={{ borderWidth: 1, padding: 5 }} placeholder='Enter Confirm Password' secureTextEntry={true} value={confirmPassword} onChangeText={setConfirmPassword} />
        <Text>Phone*</Text>
        <TextInput style={{ borderWidth: 1, padding: 5 }} placeholder='Enter Your Phone Number' value={phone} onChangeText={setPhone} />
        <Text>Gender*</Text>
        <TextInput style={{ borderWidth: 1, padding: 5 }} placeholder='Enter Your Gender' value={gender} onChangeText={setGender} />

        <Button title="Signup" onPress={submitForm} />
      </View>
    </View>
  )
}

export default Signup;