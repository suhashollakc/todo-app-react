import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {

            apiKey: "AIzaSyCzYN5ttN2HogeCxffJQYEGz2K15iKwTl4",
            authDomain: "todo-app-clever-c1c3b.firebaseapp.com",
            projectId: "todo-app-clever-c1c3b",
            storageBucket: "todo-app-clever-c1c3b.appspot.com",
            messagingSenderId: "752787711878",
            appId: "1:752787711878:web:46c2acb9f88a3d61b82e07",
            measurementId: "G-8YGR85QWRZ"

        

    }

);

const db = firebaseApp.firestore();

export default db;



