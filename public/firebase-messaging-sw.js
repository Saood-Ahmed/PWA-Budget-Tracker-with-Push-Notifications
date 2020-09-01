importScripts("https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyBSfPBEMBSG3XW7Rsv2uYgHnLXgX95HPgg",
    authDomain: "pwa-budget-app.firebaseapp.com",
    databaseURL: "https://pwa-budget-app.firebaseio.com",
    projectId: "pwa-budget-app",
    storageBucket: "pwa-budget-app.appspot.com",
    messagingSenderId: "1074209386152",
    appId: "1:1074209386152:web:dcabd0c536fedc44289c9d"
})

firebase.messaging();