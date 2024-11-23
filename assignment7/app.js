// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js&quot;;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP9QM4gVgyKRgAt5IIAWwbK6vgTcb2NMg",
  authDomain: "demoproject-a-6a550.firebaseapp.com",
  projectId: "demoproject-a-6a550",
  storageBucket: "demoproject-a-6a550.firebasestorage.app",
  messagingSenderId: "1029036910489",
  appId: "1:1029036910489:web:52b8aa1c10a1f4f2b35508",
  measurementId: "G-ZRKYWDVELM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Initialize Analytics

const auth = getAuth();

// // Signup Function
// function signup() {
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   // Check if both fields are filled
//   if (email === '' || password === '') {
//     alert('Please fill out both email and password fields.');
//     return;
//   }

//   // Optional: Add more password validation (e.g., length, special characters)
//   if (password.length < 6) {
//     alert('Password should be at least 6 characters long.');
//     return;
//   }

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // User signed up successfully
//       const user = userCredential.user;
//       console.log('User signed up:', user);
//       alert('Sign up successful! Welcome, ' + user.email);
//       window.location.href = "././index.html"; 
//     })
//     .catch((error) => {
//       // Handle sign-up errors
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error('Error signing up:', errorCode, errorMessage);

//       // Display a user-friendly error message
//       alert('Error: ' + errorMessage);
//     });
// }

// // Attach event listener to button
// document.getElementById('signupButton')?.addEventListener('click', signup);

function signin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if both fields are filled
  if (email === '' || password === '') {
    alert('Please fill out both email and password fields.');
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('Signed in successfully: ', user)
    alert('Logged in...')
    sessionStorage.setItem("user", user.email);
    window.location.pathname = './index.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
  });
}

document.getElementById('Submit').addEventListener('click', signin);
