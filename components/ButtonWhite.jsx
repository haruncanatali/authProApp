import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ButtonWhite({children, onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => [styles.button, pressed && styles.pressed]}>
            <View>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>
      )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 10
    },
    pressed: {
        opacity: 0.5
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
})