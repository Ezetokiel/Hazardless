import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAzytdtUGpgzoh9sGbmb66TTmYL7iAScjg",
    authDomain: "hazardless-c0fac.firebaseapp.com",
    projectId: "hazardless-c0fac",
    storageBucket: "hazardless-c0fac.appspot.com",
    messagingSenderId: "740724267034",
    appId: "1:740724267034:web:934170ebeedf06125699a3",
    measurementId: "G-P3FCHJ4617"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();

submit-form.addEventListener('click', async (e) => {
    e.preventDefault();

    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var description = document.getElementById('description').value;
    var risks = document.getElementById('risks').value;
    var location = document.getElementById('location').value;
    var photo = document.getElementById('photo').value;

    const userRef = ref(database, 'Incidents/')
    update(userRef, {
        'Date': date,
        'Time': time,
        'Photo': photo,
        'Location': location,
        'Potential risks': risks,
        'Description': description,
    });

    alert('Hazard report submitted!')
    console.log('surely')

});