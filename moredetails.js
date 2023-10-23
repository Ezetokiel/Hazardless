import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getDatabase, ref, push, update, get } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);



const urlParams = new URLSearchParams(window.location.search);
const incidentKey = urlParams.get('incidentKey');
const uniqueIncidentRef = ref(database, 'Incidents/' + incidentKey);
let data = null; // Declare data variable outside the block

function retrieveIndividualIncidentData(incidentKey) {
    get(uniqueIncidentRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                data = snapshot.val(); // Assign the value to the data variable
                console.log('Incident Data:', data);

                document.getElementById('incidentDate').textContent = data.Date;
                document.getElementById('incidentTime').textContent = data.Time;
                document.getElementById('incidentLocation').textContent = data.Location;
                document.getElementById('incidentRisks').textContent = data['Potential risks'];
                document.getElementById('incidentDescription').textContent = data.Description;
                document.getElementById('incidentVerification').textContent = data.Verification;
                document.getElementById('incidentResolved').textContent = data.Resolved;
            } else {
                console.log('Incident does not exist.');
            }
        })
        .catch((error) => {
            console.error('Error retrieving individual incident data:', error);
        });

    const verify = document.getElementById('verify'); // Assuming verify and repair are elements in your HTML
    const repair = document.getElementById('repair');

    verify.addEventListener('click', async (e) => {
        e.preventDefault();
        if (data) {
            document.getElementById('incidentVerification').textContent = data.Verification;
            update(uniqueIncidentRef, {
                'Verification': true,
            });
        } else {
            console.log('Data is not available.');
        }
    });

    repaired.addEventListener('click', async (e) => {
        e.preventDefault();
        if (data) {
            document.getElementById('incidentResolved').textContent = data.Resolved;
            update(uniqueIncidentRef, {
                'Resolved': true,
            });
        } else {
            console.log('Data is not available.');
        }
    });
}

retrieveIndividualIncidentData(incidentKey);



