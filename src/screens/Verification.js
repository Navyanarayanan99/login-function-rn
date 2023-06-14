import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React,{useState} from 'react'

const Verification = (props) => {
    const[code , setCode] = useState('')
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Enter OTP</Text>
      <TextInput 
      autoFocus
      value={code}
      onChangeText={setCode}
      keyboardType='numeric'
      placeholder='Enter Otp'
      style={styles.input}
      />
      <Button title='Confirm OTP' onPress={() => props.onSubmit(code)}/>
    </View>
  )
}

export default Verification

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
})