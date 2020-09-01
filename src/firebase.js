import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBSfPBEMBSG3XW7Rsv2uYgHnLXgX95HPgg",
    authDomain: "pwa-budget-app.firebaseapp.com",
    databaseURL: "https://pwa-budget-app.firebaseio.com",
    projectId: "pwa-budget-app",
    storageBucket: "pwa-budget-app.appspot.com",
    messagingSenderId: "1074209386152",
    appId: "1:1074209386152:web:dcabd0c536fedc44289c9d"

}

firebase.initializeApp(config);

export default firebase;