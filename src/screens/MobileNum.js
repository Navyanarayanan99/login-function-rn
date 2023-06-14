import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const MobileNum = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('')

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Enter Phone number</Text>
            <TextInput
                value={phoneNumber}
                onChangeText={txt => setPhoneNumber(txt)}
                placeholder='Enter phone number'
                style={styles.input}
            />
            <Button title='Sign in with OTP' onPress={()=> props.onSubmit(phoneNumber)}/>
        </View>
    );
}

export default MobileNum

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