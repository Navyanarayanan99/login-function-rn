import { StyleSheet, Text, View, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth'
const Home = () => {
  useEffect(() => {
    const handleBackPress = () => {
      const currentUser = auth().currentUser;
      if (currentUser) {
        BackHandler.exitApp();
        return true;
      }
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})