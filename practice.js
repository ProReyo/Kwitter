var firebaseConfig = {
    apiKey: "AIzaSyDa_gOXmme3EqkgYBmsrI5g-F4ZMFei1J8",
    authDomain: "kwitter-78546.firebaseapp.com",
    databaseURL: "https://kwitter-78546-default-rtdb.firebaseio.com",
    projectId: "kwitter-78546",
    storageBucket: "kwitter-78546.appspot.com",
    messagingSenderId: "999938864611",
    appId: "1:999938864611:web:d9920c9baf4a7559641cd6"
  };
firebase.initializeApp(firebaseConfig);

  function addUser()
  {
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});

    
  }