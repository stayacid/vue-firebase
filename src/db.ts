import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyDXPm6VIkWqdADCoy5OlHlw1jQjHNniRjI",
    authDomain: "vuefire-3d926.firebaseapp.com",
    databaseURL: "https://vuefire-3d926.firebaseio.com",
    projectId: "vuefire-3d926",
    storageBucket: "vuefire-3d926.appspot.com",
    messagingSenderId: "285968130522",
    appId: "1:285968130522:web:863a8e09d87bb5db97e0e3"
  })
  .database()