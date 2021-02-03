
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name=document.getElementById("user_name").value;

    firebase.database().ref("/").child("user_name").update({
        purpose:"adding_user"
    });

      window.location="kwitter_room.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyCumdYAyNbd13aznW82e6Q2fB0PsTkJVPk",
    authDomain: "classtest-9dfb6.firebaseapp.com",
    databaseURL: "https://classtest-9dfb6-default-rtdb.firebaseio.com",
    projectId: "classtest-9dfb6",
    storageBucket: "classtest-9dfb6.appspot.com",
    messagingSenderId: "1081085837270",
    appId: "1:1081085837270:web:83d7c3bd099242ad182e77",
    measurementId: "G-5SG28CM0MD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);