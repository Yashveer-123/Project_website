var firebaseConfig = {
      apiKey: "AIzaSyCIP4wBMkP6pnz4zIS-wMr0kfj6T0BRdms",
      authDomain: "kwitter-app-c1677.firebaseapp.com",
      databaseURL: "https://kwitter-app-c1677-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-c1677",
      storageBucket: "kwitter-app-c1677.appspot.com",
      messagingSenderId: "534866966034",
      appId: "1:534866966034:web:5b74e0804607b75ae0cacb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();

function addRoom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      window.location = "index.html";
}