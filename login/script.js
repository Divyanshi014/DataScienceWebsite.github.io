const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq0e_hvhsee0vlyfyWkARi5BolaWqCT4s",
  authDomain: "signup-form-83246.firebaseapp.com",
  projectId: "signup-form-83246",
  storageBucket: "signup-form-83246.appspot.com",
  messagingSenderId: "240295950430",
  appId: "1:240295950430:web:a9f62ecc4293c8a4119ccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()




// SignUp Function
signup.addEventListener('click', (e)=>{
   
  var name  = document.getElementById("name").value;
 var email   =document.getElementById("email").value;
 var password    =document.getElementById("password").value;
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('user created')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
 

})

// Sign In Function
login.addEventListener('click' ,(e) =>{
  var email =document.getElementById("email").value;
  var password =document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user created!")
    alert("Registration successful!")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert(errorMessage)
  });
});
