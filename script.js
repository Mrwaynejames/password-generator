// Assignment Code
var generateBtn = document.querySelector("#generate");
var outcome
function generatePassword() {

  var userinput = prompt("Please pick a password length between 8 and 128 characters")  
   
  var pLength = parseInt(userinput)
  
  if (isNaN(pLength) || pLength < 8 || pLength > 128) {
    alert("Please enter an acceptable input")
    return
  } 

  var numbers = confirm("Include numbers in your password?")
  var uCase = confirm("Include uppercase letters in your password?")
  var lCase = confirm("Include lowercase in your password?")
  var special = confirm("Include special characters in your password?")

  var numList = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
  var symList = 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
