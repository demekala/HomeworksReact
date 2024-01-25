// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtdZnBQIfGn72UIwx12uKhcJIeBZSfCik",
  authDomain: "firebasics-594bf.firebaseapp.com",
  projectId: "firebasics-594bf",
  storageBucket: "firebasics-594bf.appspot.com",
  messagingSenderId: "902059386968",
  appId: "1:902059386968:web:712a268b283a4c046c422d",
  measurementId: "G-LVCQE5NZQY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const email = document.getElementById("email");
const password = document.getElementById("password");

const auth = getAuth();
const signIn = document.getElementById("submit");

signIn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = email.value;
  const passwordValue = password.value;
  console.log(emailValue, passwordValue);
  signInWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((res) => {
      const user = res.user;
      console.log(user);
      localStorage.setItem("user", user.accessToken);
      window.location.href = `dashboard.html?email=${emailValue}`;
    })
    .catch((error) => {
      alert(error.message);
    });
});
