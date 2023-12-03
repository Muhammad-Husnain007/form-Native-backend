import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';

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
      const response = await fetch('http://localhost:3000/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data sent successfully!');
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
        <Text>Enter Email:</Text>
        <TextInput style={{ borderWidth: 1, padding: 5 }} placeholder='Enter Your Email' value={email} onChangeText={setEmail} />
        <Text>Enter Password:</Text>
        <TextInput style={{ borderWidth: 1, padding: 5 }} placeholder='Enter Your Password' value={password} onChangeText={setPassword} secureTextEntry={true} />
        <Button title="Signin" onPress={signinForm} />
      </View>
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  )
}

export default Signin;
