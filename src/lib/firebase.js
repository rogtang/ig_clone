import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import {seedDatabase} from '../seed'

//call seed file ONCE



const config = {
    apiKey: "AIzaSyClLuX_tvyNRNLcyBAo0FjZyUwS57K3bA8",
    authDomain: "ig-clone-61841.firebaseapp.com",
    projectId: "ig-clone-61841",
    storageBucket: "ig-clone-61841.appspot.com",
    messagingSenderId: "213429322079",
    appId: "1:213429322079:web:1a5014b5db96ccbbe776ea"
}

const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;

//seedDatabase(firebase);



export {firebase, FieldValue}