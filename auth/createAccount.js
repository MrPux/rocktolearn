// Fire Base imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
// Initialize Firebase

const firebaseConfig = {
    authDomain: "rocktolearn-b862d.firebaseapp.com",
    projectId: "rocktolearn-b862d",
    storageBucket: "rocktolearn-b862d.firebasestorage.app",
    messagingSenderId: "978124436883",
    appId: "1:978124436883:web:a5c7fa9270c7394a2ca466",
    measurementId: "G-V1HX2MBDPZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const dataBase = getFirestore(app);

// Sign Up Button Logic   const signUpButton = document.getElementById("sign-up");
const sign_up_button = document.getElementById("sign-up");

sign_up_button.addEventListener("click", function (event) {
    event.preventDefault();
    const name = document.getElementById("sign-up-name").value;
    const email = document.getElementById("sign-up-email").value;
    const password = document.getElementById("sign-up-password").value;
    const confirmPassword = document.getElementById("sign-up-confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Create user document in Firestore 
            setDoc(doc(dataBase, "users", user.uid), {
                name: name,
                email: user.email,
                uid: user.uid,
            }).then(() => {
                // Redirect after successful account creation
                window.location.href = "new_user_survey.html";
            });
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});  
