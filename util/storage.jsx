import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setToken(token){
    if(token){
        await AsyncStorage.setItem('token', token)
    }
}

export async function getToken(){
    await AsyncStorage.getItem('token')
}

export async function deleteToken(){
    await AsyncStorage.removeItem('token')
}