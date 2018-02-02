var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyDYnOYzNwnnn5NtCb6OdSwcCY1OvOnadE0",
    authDomain: "aula-2018.firebaseapp.com",
    databaseURL: "https://aula-2018.firebaseio.com",
    projectId: "aula-2018",
    storageBucket: "aula-2018.appspot.com",
    messagingSenderId: "116877868019"
};

module.exports.app = firebase.initializeApp(config);
module.exports.database = firebase.database();
