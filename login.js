
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

const firebaseConfig = {
   apiKey: "AIzaSyDenol5uVp5yDBBnUCNTonO9cQUU-trWF8",
   authDomain: "kartepebelediye.firebaseapp.com",
   projectId: "kartepebelediye",
   storageBucket: "kartepebelediye.appspot.com",
   messagingSenderId: "993270259189",
   appId: "1:993270259189:web:9f2c893c694f1d768b14bc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const buton = document.getElementById("logButton");


    buton.addEventListener("click", function(event) {
    event.preventDefault();
    const emailInput = document.getElementById("emailInput");
    const emailValue = emailInput.value;
    const passwordInput = document.getElementById("passwordInput");
    const passwordValue = passwordInput.value;

    signInWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {

    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });  
});
