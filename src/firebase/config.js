import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDepT5t9-x4OXwheq8Bw9usMlUqSFJRS0I",
    authDomain: "live-chat-dbec7.firebaseapp.com",
    projectId: "live-chat-dbec7",
    storageBucket: "live-chat-dbec7.appspot.com",
    messagingSenderId: "1037814312044",
    appId: "1:1037814312044:web:a1b14f921c09bb6b5efc49"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, projectAuth, timestamp}