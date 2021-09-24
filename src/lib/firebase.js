// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const config = {
  apiKey: "AIzaSyCAaE7nHi-Ba2AFkkdBe6gC80Q9xli3Flk",
  authDomain: "insta2-2ee89.firebaseapp.com",
  projectId: "insta2-2ee89",
  storageBucket: "insta2-2ee89.appspot.com",
  messagingSenderId: "292685478770",
  appId: "1:292685478770:web:c12b43ed39028d3dd03beb",
  measurementId: "G-P9PN4YJVPD"
}

const firebase = window.firebase.initializeApp(config)
const { FieldValue } = window.firebase.firestore


export { firebase, FieldValue }