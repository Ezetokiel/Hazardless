import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getDatabase, set, ref, update, get } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzytdtUGpgzoh9sGbmb66TTmYL7iAScjg",
    authDomain: "hazardless-c0fac.firebaseapp.com",
    projectId: "hazardless-c0fac",
    storageBucket: "hazardless-c0fac.appspot.com",
    messagingSenderId: "740724267034",
    appId: "1:740724267034:web:934170ebeedf06125699a3",
    measurementId: "G-P3FCHJ4617",
    databaseURL: "https://hazardless-c0fac-default-rtdb.asia-southeast1.firebasedatabase.app",
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();


login.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value; 

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            const userRef = ref(database, 'users/' + user.uid);
            get(userRef)
                .then((snapshot) => {
                    const userData = snapshot.val();
                    if (userData) {
                        const username = userData.username; // Retrieve username from database

                        // Update the user's email if needed
                        update(ref(database, 'users/' + user.uid), {
                            email: email,
                        });

                        // Store the user's authentication token in local storage
                        const idToken = userCredential.accessToken;
                        localStorage.setItem('authToken', idToken);
                        alert('Logged-in successfully!')
                        // Redirect or update UI as needed
                        window.location.href = "admindashboard.html"; //replace immediately
                    } else {
                        alert('User data not found.');
                    }
                })
                .catch((error) => {
                    alert("Error fetching user data: " + error.message);
                });
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
