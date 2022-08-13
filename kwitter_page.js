//TUS ANLACES DE FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyCaw6W5yyFkEtGnQoLpi2PWt9wkBaSQcFU",
      authDomain: "kitter-fd0d4.firebaseapp.com",
      projectId: "kitter-fd0d4",
      storageBucket: "kitter-fd0d4.appspot.com",
      messagingSenderId: "111352062651",
      appId: "1:111352062651:web:352586204f5d3131b37f9e",
      databaseURL:"https://kitter-fd0d4-default-rtdb.firebaseio.com"
    };
    
    // Initialize Firebase
    


    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
      }  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código
console.log(firebase_mesdage_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+ name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id=" + firebase_mesdage_id + "value=" + like + "onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like: " + like + "</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//Termina código
      } });  }); }
    getData();


function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}

function updatelike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updatelikes=Number(likes) + 1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updatelikes
      });
      
}