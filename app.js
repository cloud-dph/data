// ✅ Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBjjBGJm2JsyIBn5DfgbvPw7Ua0p_3N0c",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ✅ Check if user exists
function checkUser() {
    const email = document.getElementById("email").value;
    if (!email) {
        alert("Please enter your email");
        return;
    }

    db.collection("users").where("email", "==", email).get()
        .then(snapshot => {
            if (!snapshot.empty) {
                document.getElementById("passwordSection").style.display = "block";
            } else {
                document.getElementById("signupSection").style.display = "block";
            }
        })
        .catch(error => {
            console.error("Error checking user:", error);
            alert("Firestore Error: Check console for details.");
        });
}

// ✅ Login User
function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "https://abc.xyz";  // Redirect if login is successful
        })
        .catch(error => {
            alert("Login Failed: " + error.message);
        });
}

// ✅ Sign Up User
function signupUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("newPassword").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return db.collection("users").doc(user.uid).set({ email });
        })
        .then(() => {
            alert("Signup successful! Please login.");
            document.getElementById("signupSection").style.display = "none";
            document.getElementById("passwordSection").style.display = "block";
        })
        .catch(error => {
            alert("Signup Failed: " + error.message);
        });
}
