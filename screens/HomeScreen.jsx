import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { getToken } from '../util/storage'

export default function HomeScreen() {
    useEffect(() => {
        async function getTokenValue(){
            return await getToken()
        }

        const tokenValue = getTokenValue()
    })
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})