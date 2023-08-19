import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import { KindeSDK } from '@kinde-oss/react-native-sdk-0-7x'
import Constants from 'expo-constants'
import { useEffect } from 'react'
export default function Page() {
  const issuerUrl = Constants.expoConfig?.extra?.issuerUrl
  const callbackUrl = Constants.expoConfig?.extra?.callbackUrl
  const clientId = Constants.expoConfig?.extra?.clientId
  const logoutRedirectUrl = Constants.expoConfig?.extra?.logoutRedirectUrl
  const client = new KindeSDK(
    issuerUrl,
    callbackUrl,
    clientId,
    logoutRedirectUrl
  )
  console.log(issuerUrl)
  console.log(callbackUrl)
  console.log(clientId)
  console.log(logoutRedirectUrl)
  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      // Need to implement, e.g: call an api, etc...
      console.log('Authenticated')
      console.log(await client.getUserDetails())
    } else {
      // Need to implement, e.g: redirect user to sign in, etc..
      console.log('Not Authenticated')
    }
  }

  useEffect(() => {
    checkAuthenticate()
  }, [])

  const handleSignUp = async () => {
    const token = await client.register()
    if (token) {
      // User was authenticated
    }
  }

  const handleSignIn = async () => {
    const token = await client.login()
    if (token) {
      // User was authenticated
      checkAuthenticate()
    }
  }
  const handleLogout = async () => {
    const isLoggedOut = await client.logout()

    if (isLoggedOut) {
      // Need to implement, e.g: redirect user to login screen, etc...
      console.log('Logged out')
    }
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app</Text>
      <View>
        <View>
          <Button title='Sign In' onPress={handleSignIn} />
        </View>
        <View>
          <Button title='Sign Up' color='#000' onPress={handleSignUp} />
        </View>
        <View>
          <Button title='Log out' color='#000' onPress={handleLogout} />
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
