let email = document.getElementById("email");
let error = document.getElementById("error");

function validate(){
    console.log("jyg")
    let regexprsn = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexprsn.test(email.value)){
        error.innerHTML = "valid";
        error.style.color = "red";
        return true;

    }
    else{
        error.innerHTML = "Invalid";   
        error.style.color = "red";
        return  false;
    }
    
}
function CheckPasswordStrength(password) {
    var password_strength = document.getElementById("warn");
    
    
      //if textBox is empty
      if(password.length==0){
          password_strength.innerHTML = "";
          return;
      }
    
      //Regular Expressions
      var regex = new Array();
      regex.push("[A-Z]"); //For Uppercase Alphabet
      regex.push("[a-z]"); //For Lowercase Alphabet
      regex.push("[0-9]"); //For Numeric Digits
      regex.push("[$@$!%*#?&]"); //For Special Characters
    
      var passed = 0;
    
      //Validation for each Regular Expression
      for (var i = 0; i < regex.length; i++) {
          if((new RegExp (regex[i])).test(password)){
              passed++;
          }
      }
    
      //Validation for Length of Password
      if(passed > 2 && password.length > 8){
          passed++;
      }
    
      //Display of Status
      var color = "";
      var passwordStrength = "";
      switch(passed){
          case 0:
              break;
          case 1:
              passwordStrength = "Password is Weak.";
              color = "Red";
              break;
          case 2:
              passwordStrength = "Password is Good.";
              color = "darkorange";
              break;
          case 3:
              passwordStrength = "Password is medium.";
              color = "black";
              break;
                  
                
          case 4:
              passwordStrength = "Password is Strong.";
              color = "Green";
              break;
          case 5:
              passwordStrength = "Password is Very Strong.";
              color = "darkgreen";
              break;
      }
      password_strength.innerHTML = passwordStrength;
      password_strength.style.color = color;
    }

    

