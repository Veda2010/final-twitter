//ADD YOUR FIREBASE LINKS HERE 
var firebaseConfig = { apiKey: "AIzaSyCumdYAyNbd13aznW82e6Q2fB0PsTkJVPk", authDomain: "classtest-9dfb6.firebaseapp.com", databaseURL: "https://classtest-9dfb6-default-rtdb.firebaseio.com", projectId: "classtest-9dfb6", storageBucket: "classtest-9dfb6.appspot.com", messagingSenderId: "1081085837270", appId: "1:1081085837270:web:83d7c3bd099242ad182e77", measurementId: "G-5SG28CM0MD" }; 
// Initialize Firebase 
firebase.initializeApp(firebaseConfig); user_name=localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML="welcome"+user_name+"!"; function addRoom() {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
         childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
  