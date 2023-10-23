import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
  
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
  
  signUp.addEventListener('click', async (e) => {
      e.preventDefault();
  
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
  try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await set(ref(database, 'users/' + user.uid), {
            email: email
        });
    alert('user created!')
    window.login.href = '../admindashboard.html'
