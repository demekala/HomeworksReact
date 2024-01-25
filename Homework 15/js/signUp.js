// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js"; // Add this import
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
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const id = document.getElementById("id");

const data = {
  email: email.value,
  phone: phone.value,
  address: address.value,
  id: id.value,
};

const auth = getAuth();
const db = getFirestore(app);
const signIn = document.getElementById("submit");

signIn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = email.value;
  const passwordValue = password.value;
  console.log(emailValue, passwordValue);
  createUserWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((res) => {
      const user = res.user;
      console.log(user);
      setDoc(doc(db, "users", user.uid), {
        email: email.value,
        phone: phone.value,
        address: address.value,
        id: id.value,
      })
        .then(() => {
          console.log("success");
          window.location.href = "login.html";
        })
        .catch((error) => {
          console.log(error);
        });
      localStorage.setItem("user", user.accessToken);
    })
    .catch((error) => {
      alert(error.message);
    });
});
