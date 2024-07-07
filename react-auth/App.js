import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const myEmail = "222310071@student.ibik.ac.id";
  const myPass = "0325";

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const handlerSubmit = () => {
    // if(!email){
    //   return alert ("Email harus diisi!");
    // }

    // if(email !== myEmail){
    //   return alert ("Email yang anda masukan salah!");
    // }

    // if(!password){
    //   return alert ("Password harus diisi");
    // }

    // if(password !== myPass){
    //   return alert ("Password yang anda masukan salah!");
    // }

    // alert(`Selamat Datang, ${email}!`);

      let valid = true;
      if (!email) {
        setEmailError("Email harus diisi!");
        valid = false;
      } else if (email !== myEmail) {
        setEmailError("Email yang Anda masukan salah!");
        valid = false;
      } else {
        setEmailError("");
      }
  
      if (!password) {
        setPasswordError("Password harus diisi!");
        valid = false;
      } else if (password !== myPass) {
        setPasswordError("Password yang Anda masukan salah!");
        valid = false;
      } else {
        setPasswordError("");
      }
  
      if (valid) {
       if (valid) {
        alert(`Selamat datang, ${email}`)
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Login</Text>
        <TextInput
                    style={styles.input}
                    placeholder="Email"
                    defaultValue={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                    autoCapitalize="none"
                  />
                  {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                  <TouchableOpacity style={styles.button} onPress={handlerSubmit}>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
      </View>
    </View>
  );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#800080',  
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  errorText: {
    color: 'red',
    marginBottom: 14,
    fontSize: 14,
  },
});
