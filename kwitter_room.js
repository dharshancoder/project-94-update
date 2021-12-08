//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCgJ2UX6kQjwDUJqJ_fLAA1V20K55VJ77A",
      authDomain: "kwitter-f5aee.firebaseapp.com",
      databaseURL: "https://kwitter-f5aee-default-rtdb.firebaseio.com",
      projectId: "kwitter-f5aee",
      storageBucket: "kwitter-f5aee.appspot.com",
      messagingSenderId: "1091827493691",
      appId: "1:1091827493691:web:75c77ab1d7ab8dba05251e",
      measurementId: "G-LFWEKWTB6G"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
