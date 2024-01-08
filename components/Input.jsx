import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({label, keyboardType, onUpdateValue, value, secure}) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} autoCapitalize='none' keyboardType={keyboardType} onChangeText={onUpdateValue} value={value} secureTextEntry={secure}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8
    },
    input: {
        backgroundColor: 'pink',
        borderRadius:11,
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
        fontSize: 15
    },
    label: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22
    }
})