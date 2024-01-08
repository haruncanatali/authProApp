import axios from "axios";
import { setToken } from "./storage";
const API_KEY = 'AIzaSyBLygAIOEsKf0NOOEGgF10fJcYtVH8yOqY'

export async function createUser(email,password) {
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,{
        email: email,
        password: password,
        returnSecureToken: true
    })
    console.log(response)
}

export async function loginUser(email, password){
    try {
        const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY,{
            email: email,
            password: password,
            returnSecureToken: true
        })
        setToken(response.data.idToken)
        return true
    }catch(error){
        return false
    }
}

export async function getUserFromToken(token) {
    
}