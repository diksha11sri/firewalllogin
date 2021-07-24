firebase.auth().onAuthStateChanged(function(user) 
{
    if (user)
    {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("signup_div").style.display = "none";
      document.getElementById("login_div").style.display = "none";

  
      var user = firebase.auth().currentUser;
  
      if(user != null)
      {
  
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  
      }
    } else
     {
        // No user is signed in.
    
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "none";
        document.getElementById("signup_div").style.display = "block";

    
      }
});


function signup()
{
 

  var userEmail=document.getElementById("email_field").value;
  var userPass=document.getElementById("password_field").value;

  console.log(userEmail,userPass);
 // Create User with Email and Password
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
  
}

function login(){

    var userEmail = document.getElementById("email_field1").value;
    var userPass = document.getElementById("password_field1").value;
  
    console.log(userEmail,userPass);

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
    document.getElementById("user_div").style.display = "none";
    document.getElementById("signup_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  }
  
function soLogin()
{
    document.getElementById("user_div").style.display = "none";
    document.getElementById("signup_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
}

function soSignup()
{
    document.getElementById("user_div").style.display = "none";
    document.getElementById("signup_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
}