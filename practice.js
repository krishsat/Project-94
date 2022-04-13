// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCst-LjOyQ1Ly3bUK2qeZaSvMCjVlh21Dk",
    authDomain: "kwitter-ecaef.firebaseapp.com",
    databaseURL: "https://kwitter-ecaef-default-rtdb.firebaseio.com",
    projectId: "kwitter-ecaef",
    storageBucket: "kwitter-ecaef.appspot.com",
    messagingSenderId: "792869021734",
    appId: "1:792869021734:web:b86cab3ac951d5703f5ee7"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
    });
  }
  