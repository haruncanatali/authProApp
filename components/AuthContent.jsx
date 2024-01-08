import { Button, StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import AuthForm from './AuthForm'
import ButtonWhite from './ButtonWhite'
import { useNavigation } from '@react-navigation/native'

export default function AuthContent({isLogin}) {
    const navigator = useNavigation()
    function switchScreen(){
        if(isLogin){
            navigator.navigate('Register')
        }
        else{
            navigator.navigate('Login')
        }
    }
  return (
    <View style={styles.container}>
      <AuthForm isLogin={isLogin}/>
      <View>
        <ButtonWhite onPress={switchScreen}>
            {isLogin ? 'Yeni Kullanıcı Oluşturun' : 'Giriş Yapın'}
        </ButtonWhite>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blueviolet',
        marginTop: 50,
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 20,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:1, height:2},
        shadowOpacity: 0.5,
        shadowRadius: 4
    }
})