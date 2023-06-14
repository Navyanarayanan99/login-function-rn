import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const email = await AsyncStorage.getItem('email');
        const password = await AsyncStorage.getItem('password');
        if (email !== null && password !== null) {
          setEmail(email);
          setPassword(password);
          navigation.navigate('Home')
        }
      } catch (e) {
        console.error(e);
      }
    };
    checkLoggedIn();
  }, []);


  const loginData = async () => {
    try {
      const { user } = await auth().signInWithEmailAndPassword(email, password);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      console.log('User logged in successfully!', user);
      navigation.navigate('Home')
    } catch (e) {
      console.error(e);
    }
  };


  const signUp = () => {
    if (email != '' && password != '') {
      auth().createUserWithEmailAndPassword(email, password).then((res) => {
        console.log("response", res)
        Alert.alert("Success")

      })
        .catch((error) => {
          console.log("error", error)
          Alert.alert("Error")
        })
    } else {
      Alert.alert("Field Empty")
    }

  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 27, fontWeight: '700', color: '#000' }}>Login Screen</Text>
      <TextInput
        value={email}
        onChangeText={txt => {
          setEmail(txt)
        }}
        placeholder='Email'
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={txt => {
          setPassword(txt)
        }}
        placeholder='Password'
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={() => {
        loginData()
      }}>
        <Text style={{ color: '#fff', fontSize: 20 }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
        signUp()
      }}>
        <Text style={{ color: '#fff', fontSize: 20 }}>SignUp</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 30,
    paddingLeft: 20,
    borderColor: '#000'
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  }
})