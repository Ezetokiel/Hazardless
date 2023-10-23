import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAlg8K9qZtFTBEStq2xN9oIL6Zuvie3cjw",
    authDomain: "codeverse-49af1.firebaseapp.com",
    databaseURL: "https://codeverse-49af1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "codeverse-49af1",
    storageBucket: "codeverse-49af1.appspot.com",
    messagingSenderId: "223559847168",
    appId: "1:223559847168:web:d1b54946928a1eaa2937e5",
    measurementId: "G-Q735VKS6EQ"
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
      var username = document.getElementById('username').value;
  try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await set(ref(database, 'users/' + user.uid), {
            username: username,
            email: email
        });
    alert('user created!')
    window.login.href = '../admindashboard.html'
