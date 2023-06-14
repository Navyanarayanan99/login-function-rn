import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'

import auth from '@react-native-firebase/auth'
import Verification from './Verification'
import MobileNum from './MobileNum'

const MobileLogin = ({ navigation }) => {
    const [confirm, setConfirm] = useState('')

    const mobileLogin = async (phoneNumber) => {
        auth().signInWithPhoneNumber('+91' + phoneNumber).then((res) => {
            console.log('response', res)
            setConfirm(res);
        })
            .catch((error) => {
                console.log('error', error)
            })
        //  setConfirm(confirmation);
    }

    const confirmVerification = async (code) => {
        try {
            await confirm.confirm(code);
        }
        catch (error) {
            Alert.alert('Invalid code')
        }
    }
    auth().onAuthStateChanged((user) => {
        if (user) {
            setConfirm(null)
            navigation.navigate('Verification')
        } else {
            if (confirm) {
                Alert.alert('Authentication failed')
            }

        }
    })
    if (confirm) return <Verification
        onSubmit={confirmVerification} />
    return <MobileNum
        onSubmit={mobileLogin} />
}

export default MobileLogin