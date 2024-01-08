import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { createUser, loginUser } from '../util/Auth'
import { useNavigation } from '@react-navigation/native'

export default function AuthForm({isLogin}) {
    const navigator = useNavigation()
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')

    function updateInput(inputType, enteredValue){
        switch(inputType){
            case 'email':
                setEnteredEmail(enteredValue)
                break
            case 'password':
                setEnteredPassword(enteredValue)
                break
        }
    }

    async function submitHandle(){
        if(!isLogin){
            const response = await createUser(enteredEmail, enteredPassword)
        }
        else{
            const response = await loginUser(enteredEmail, enteredPassword)
            if(response){
                navigator.navigate('Home')
            }
        }
    }

  return (
    <View>
      <Input label='E-Posta' keyboardType="email-adress" onUpdateValue={updateInput.bind(this,'email')} value={enteredEmail} secure={false}/>
      <Input label='Şifre' keyboardType="email-adress" onUpdateValue={updateInput.bind(this,'password')} value={enteredPassword} secure={true}/>
      <View style={styles.buttons}>
        <Button onPress={submitHandle}>{ isLogin ? "Giriş Yap" : "Kayıt Ol"}</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttons: {
        marginTop: 10
    }
})