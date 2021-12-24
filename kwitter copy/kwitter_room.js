const firebaseConfig = {
      apiKey: "AIzaSyDWV0uS-YrtFaHiV-LhowoWnrnTASP0RVo",
      authDomain: "gwen-kwitter-10.firebaseapp.com",
      databaseURL: "https://gwen-kwitter-10-default-rtdb.firebaseio.com",
      projectId: "gwen-kwitter-10",
      storageBucket: "gwen-kwitter-10.appspot.com",
      messagingSenderId: "206558092002",
      appId: "1:206558092002:web:e011977e55b77ae8d45cbb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="WELCOME "+user_name+"!!"
function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update
(
      {
            purpose:"addingroom"
      }
)
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.HTML"
}










function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("Room name :"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row;

      //Start code

      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log("room_name",name)
window.location="kwitter_page.HTML"      
}