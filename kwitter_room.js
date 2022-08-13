
//AÑADE TUS ENLACES DE FIREBASE
//AÑADE LOS ENLACES FIREBASE
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
    document.getElementById("user_name").innerHTML="Hola " + user_name;
    
    function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            proposito:"añadir sala"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Inicio del código
      row="<div class='room_name' id="+ Room_names + " onclick='redirecttoroomname(this.id)'> #"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //Final del código
      });});}

      
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      widnows.location="kwitter.page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}


