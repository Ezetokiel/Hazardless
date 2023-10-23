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


function retrieveData() {
    const incidentsRef = ref(database, 'Incidents');

    get(incidentsRef).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            const verifyAndRepairBox = document.querySelector('.box-container:nth-child(1) .box');
            const completeBox = document.querySelector('.box-container:nth-child(2) .box'); // Add completeBox

            for (const incidentKey in data) {
                if (Object.hasOwnProperty.call(data, incidentKey)) {
                    const incidentData = data[incidentKey];

                    const incidentElement = document.createElement('div');
                    incidentElement.classList.add('incident');

                    const infoElement = document.createElement('div');
                    infoElement.classList.add('incident-info');

                    const formattedInfo = `
                        Name: ${incidentKey}
                        Location: ${incidentData.Location}
                        Date: ${incidentData.Date}
                        Time: ${incidentData.Time}
                        Potential Risks: ${incidentData['Potential risks']}
                    `;
                    console.log(`${incidentKey}`);

                    infoElement.innerHTML = formattedInfo;
                    const buttonElement = document.createElement('button');
                    buttonElement.classList.add('view-button');
                    buttonElement.textContent = 'View Details';

                    buttonElement.id = `${incidentKey}`;
                    buttonElement.addEventListener('click', () => {
                        const url = `moredetails.html?incidentKey=${incidentKey}`;
                        window.location.href = url;
                    });

                    incidentElement.appendChild(infoElement);
                    incidentElement.appendChild(buttonElement);

                    if (incidentData.Verification === false || incidentData.Resolved === false) {
                        verifyAndRepairBox.appendChild(incidentElement);
                    } else {
                        completeBox.appendChild(incidentElement); // Append to completeBox
                    }

                    const lineBreak = document.createElement('hr');
                    verifyAndRepairBox.appendChild(lineBreak);
                    completeBox.appendChild(lineBreak.cloneNode()); // Append line break to completeBox
                }
            }
        } else {
            console.log('Data does not exist.');
        }
    }).catch((error) => {
        console.error('Error retrieving data:', error);
    });
}

retrieveData();





