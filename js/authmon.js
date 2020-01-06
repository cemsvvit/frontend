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

function funcsignout() {
    firebase
        .auth()
        .signOut()
        .then(function() {
            // Sign-out successful.
        })
        .catch(function(error) {
            // An error happened.
        });
    window.location.replace("index.html");
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        // ...
        // window.location.replace("dashboard.html");
    } else {
        // User is signed out.
        // ...
        window.location.replace("index.html");
    }
});

document.querySelector(".signoutbutton").addEventListener("click", () => {
    funcsignout();
});
