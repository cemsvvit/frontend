console.log("Auth connected");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDmFYr-2MTJwOLN42NB9Ztu60dkNZcjACk",
    authDomain: "cems-w.firebaseapp.com",
    databaseURL: "https://cems-w.firebaseio.com",
    projectId: "cems-w",
    storageBucket: "cems-w.appspot.com",
    messagingSenderId: "492028136445",
    appId: "1:492028136445:web:9ca41601be0af954432794",
    measurementId: "G-SZK5J5QE7E"
};

console.log(firebase);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth();
firebase.analytics();

var email = document.getElementById("Emailinput").value;
var pass = document.getElementById("Passwordinput").value;

var user = firebase.auth().currentUser;

function funclogin(email, pass) {
    var email = document.getElementById("Emailinput").value;
    var pass = document.getElementById("Passwordinput").value;
    firebase
        .auth()
        .signInWithEmailAndPassword(email, pass)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            window.alert(" Error : " + errorMessage);
        });
}

function funcsignup(email, pass) {
    console.log("Sign up initiated");
    var name = document.getElementById("Usernameinput").value;
    var email = document.getElementById("Emailinput").value;
    var pass = document.getElementById("Passwordinput").value;
    console.log(email);
    console.log(pass);
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            window.alert(" Error : " + errorMessage);
        });
    window.location.replace("index.html");
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        // ...
        window.location.replace("home.html");
    } else {
        // User is signed out.
        // ...
        // window.location.replace("index.html");
    }
});
