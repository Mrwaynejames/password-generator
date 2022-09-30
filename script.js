// Assignment Code
var generateBtn = document.querySelector("#generate");

function rInteger(min,max) {
  if (!max) {
    max = min
    min = 0
  }

var mathR = Math.random()
return Math.floor(min*(1 - mathR) + mathR*max)
}

function get(list) {
  return list[rInteger(list.length )]
}

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
  var symList = [ "!", "@", "#", "$", "%", "^", "&", "*"]
  var lCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
  "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
 
  var output = []

  if(numbers === true) {
    output.push(numList)
  }

  if(uCase === true) {
    output.push(uCaseList)

}

  if(lCase === true) {
    output.push(lCaseList)
  }

    if(special === true) {
      output.push(symList)
    }

    if (output.length === 0) {
      alert("Please choose at least 1 criteria")
      return
    }
    var generatedPassword = ""

    for (var i = 0; i < pLength; i++) {
      var rList = get(output)
      var randomchar = get(rList)
      generatedPassword += randomchar
    }


  }


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
